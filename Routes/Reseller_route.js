const express = require('express');
const router1 = express.Router();
const Reseller = require('../Models/Reseller');


//Adding New Reseller
router1.post('/newReseller', async function(req,res)
{
    const {reseller_fullname, pasal_name, address, phone_number} = req.body

    const alreadyExist = await Reseller.findOne({reseller_fullname : reseller_fullname})
    if(alreadyExist)
    {
        return res.status(500).json({
            success:false, 
            message: "Reseller Already Exist."})
    }

    const data = new Reseller({
        reseller_fullname : reseller_fullname,
        pasal_name : pasal_name,
        address : address,
        phone_number : phone_number
    });

    const resellerinfo = await data.save();
    console.log(resellerinfo);
    if(!resellerinfo)
    {
        return res.status(500).json({
            success:false, 
            message:"Please fill all required information."});
    }

    res.status(200).json({
        message:"New reseller " + reseller_fullname + " added successfully. ", 
        success:true, 
        reseller:resellerinfo
    });
});


//Showing list of Reseller
router1.get('/resellerList',async function(req,res)
{
    await Reseller.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status().json({
                success:false, 
                message:"There are no any reseller registered."})
        };
        res.status(200).json({
            success:true, 
            message:"List of Registered Reseller: ", 
            list:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});


//Showing Reseller Details
router1.get('/resellerList/:id', async function(req,res)
{
    const id = req.params.id;
    await Reseller.findOne({_id : id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true, 
            message:"Details of " + result.reseller_fullname, 
            info:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});

module.exports = router1;