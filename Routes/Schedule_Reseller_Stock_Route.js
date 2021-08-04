const express = require('express');
const Reseller = require('../Models/Reseller');
const ResellerStock = require('../Models/ResellerStock');
const ScheduleResellerStock = require('../Models/ScheduleResellerStock');
const router = express.Router();

//Saving schedule
router.post('/schedule/resellerStock', async function(req, res){
    // console.log("data from body: "+req.body)
   const reseller =  await Reseller.findOne({_id:req.body.ResellerID})
   if(!reseller){
       return res.status(400).json({success:false, message:"The reseller you provide is not available"})
   }


   //important important important important important important
   // scheduledTime scheduledDate (also other data) may need to be changed accordingly with incomming data
   const {ResellerID, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
    Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
    Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
    SendOrReceive, scheduledDate, scheduledTime, Remarks} = req.body

    //later this will be replaced by active user
    const Entryby ="Admin"

    const data = new ScheduleResellerStock({
        ResellerID:ResellerID,
        Gas_state:Gas_state,
        Regular_Prima:Regular_Prima,
        Regular_Kamakhya:Regular_Kamakhya,
        Regular_Suvidha:Regular_Suvidha,
        Regular_Others:Regular_Others,
        Leak_Prima:Leak_Prima,
        Leak_Kamakhya:Leak_Kamakhya,
        Leak_Suvidha:Leak_Suvidha,
        Leak_Others:Leak_Others,
        Sold_Prima:Sold_Prima,
        Sold_Kamakhya:Sold_Kamakhya,
        Sold_Suvidha:Sold_Suvidha,
        Sold_Others:Sold_Others,
        SendOrReceive:SendOrReceive,
        scheduledDate:scheduledDate,
        scheduledTime:scheduledTime,
        Remarks:Remarks,
        Entryby:Entryby
    })
    console.log("created model data(before saving): "+data)

    const savedData = await data.save()
    console.log("saved Data: " +savedData)

    if(!savedData){
        return res.status(400).json({
            success:false,
            message:"Sorry!!!. Could not schedule task."
        })
    }
    res.status(200).json({
        success:true,
        message: "Task has been scheduled successfully.",
        data:savedData
    })
})

router.get('schedule/resellerStock', async function(req, res){
    await ResellerStock.find()
    .then(function(response){
        console.log("to check response: "+ response)
        if(!response){
            return res.status(400).json({success:false, message:"Unable to  find scheduled stock"})
        }
        res.status(200).json({
            success:true,
            message:"Scheduled Stock are ready",
            data:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})
module.exports = router