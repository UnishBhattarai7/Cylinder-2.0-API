const express = require('express');
const ScheduleExtra = require('../Models/ScheduleExtra');
const router = express.Router();


//saving schedule
router.post('/schedule/addSchedule', async function(req, res){
        // console.log("data from body: "+req.body)
        const {scheduledDate, scheduledTime, subject, message} = req.body

        //this will be changed after authentication
        const scheduledBy = "Admin"

        const data = new ScheduleExtra({
            scheduledDate:scheduledDate,
            scheduledTime:scheduledTime,
            subject:subject,
            message:message,
            scheduledBy:scheduledBy
        })
        console.log("created model data(before saving): "+data)

        const savedData = await data.save()
        console.log("saved Data: " +savedData)

        if(!savedData){
            return res.status(400).json({
                success:false,
                message:"Sorry!!!. Could not schedule the task."
            })
        }
        res.status(200).json({
            success:true,
            message: "Task has been scheduled successfully.",
            data:savedData
        })
})
router.get('/schedule/getSchedule', async function(req, res){
    await ScheduleExtra.find()
    .then(function(response){
        console.log("to check response: "+ response)
        if(!response){
            return res.status(400).json({success:false, message:"Unable to  find scheduled stock"})
        }
        res.status(200).json({
            success:true,
            message:"Scheduled Stock are ready",
            data:response
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})
module.exports = router