const express = require('express');
const router1 = express.Router();
const Company = require('../Models/Company');


//Adding New Company
router1.post('/newCompany', async function(req,res)
{
    const {company_fullname, cylinder_name, address, phone_number} = req.body

    const alreadyExist = await Company.findOne({company_fullname : company_fullname})
    if(alreadyExist)
    {
        return res.status(500).json({
            success:false, 
            message: "Company Already Exist."})
    }

    const data = new Company({
        company_fullname : company_fullname,
        cylinder_name : cylinder_name,
        address : address,
        phone_number : phone_number
    });

    const companyinfo = await data.save();
    console.log(companyinfo);
    if(!companyinfo)
    {
        return res.status(500).json({
            success:false, 
            message:"Please fill all required information."});
    }

    res.status(200).json({
        message:"New company " + company_fullname + " added successfully. ", 
        success:true, 
        company:companyinfo});
});


//Showing list of Companies
router1.get('/companyList',async function(req,res)
{
    await Company.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status().json({
                success:false, 
                message:"There are no any companies registered."})
        };
        res.status(200).json({
            success:true, 
            message:"List of Registered Comapnies: ", 
            list:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});


//Showing Company Details
router1.get('/companyList/:id', async function(req,res)
{
    const id = req.params.id;
    await Company.findOne({_id : id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true, 
            message:"Details of " + result.company_fullname, 
            info:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});

module.exports = router1;