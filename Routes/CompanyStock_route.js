const express = require('express');
const router1 = express.Router();
const CompanyStock = require('../Models/CompanyStock');
const Company = require('../Models/Company');

//Entering Stock Details
router1.post('/CompanyStock',async function(req, res)
{
    await Company.findOne({_id:req.body.ID})
    .then(function(CompanyDetails)
    {
        console.log(CompanyDetails);
        const {CompanyID, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
            Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
            Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
            SendOrReceive, Amount, Remarks} = req.body
    
        const data = new CompanyStock({
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
        
        const stockInfo = data.save()
        console.log(stockInfo);

        if(!stockInfo)
        {
            res.status(201).json({
                success:false,
                message:"Please fill all required information."
            })
        }
        res.status(200).json({
            success:true,
            message: "Data entered in Stock."
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    });
});

module.exports = router1;