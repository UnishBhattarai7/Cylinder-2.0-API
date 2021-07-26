const express = require('express');
const router1 = express.Router();
const CompanyStock = require('../Models/CompanyStock');
const Company = require('../Models/Company');

//Entering Stock Details
router1.post('/CompanyStock',async function(req, res)
{
    await Company.findOne({_id:req.body.CompanyID})
    .then(async function(CompanyDetails)
    {
        console.log(CompanyDetails);
        const {CompanyReceiptNo, CompanyID, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
            Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
            Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
            SendOrReceive, Amount, Remarks} = req.body
    
        const data = new CompanyStock({
            CompanyReceiptNo:CompanyReceiptNo,
            CompanyID:CompanyID,
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
            Amount:Amount,
            Remarks:Remarks
        })
        
        const stockInfo = await data.save()
        console.log(stockInfo);

        if(!stockInfo)
        {
            res.status(201).json({
                success:false,
                message:"Could not save company Stock"
            })
        }
        res.status(200).json({
            success:true,
            message: "Data entered in Stock.",
            companyDetails:CompanyDetails,
            info:stockInfo
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    });
});

module.exports = router1;