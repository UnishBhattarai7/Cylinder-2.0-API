const express = require('express');
const NotificationHistory = require('../Models/NotificationHistory');
const router = express.Router();


///saving notification 
router.post('/notification', async function(req,res){
    console.log("data from body: "+req.body)
    const {Title, L1, L2, L3, R1, R2, Action} = req.body

    const data = new NotificationHistory({
        Title:Title,
        L1:L1,
        L2:L2,
        L3:L3,
        R1:R1,
        R2:R2,
        Action:Action
    })
    console.log("created model data(before saving): "+data)

    const savedData = await data.save()
    console.log("saved Data: " +savedData)

    if(!savedData){
        return res.status(400).json({
            success:false,
            message:"Sorry!!!. Could not save notification."
        })
    }
    res.status(200).json({
        success:true,
        message: "Notification has been saved successfully.",
        data:savedData
    })
})

//get Notification Hostory
router.get('/notification', async function(req, res){
    await NotificationHistory.find()
    .then(async function(response){
        console.log("to check response: "+ response)
        if(!response){
            return res.status(400).json({success:false, message:"Unable to  find notificatio"})
        }
        res.status(200).json({
            success:true,
            message:"Notification history is ready",
            data:response
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})

module.exports = router