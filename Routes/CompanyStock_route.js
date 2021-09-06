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

//Show all Company Stock list
router1.get('/companyStockList', async function(req,res)
{
    await CompanyStock.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status(201).json({
                success:false,
                message:"There is no data in Company Stock."
            })
        }
        res.status(200).json({
            success:true,
            message:"Company Stock List: ",
            data:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})


//Show stock of related company
router1.get('/companyStockList/:id', async function(req,res)
{
    const id = req.params.id

    await CompanyStock.findOne({CompanyID:id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true,
            message:"Details of stock of Company having ID " + result.CompanyID,
            data:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})

//Show profile of related company
router1.get('/company/:id', async function(req,res)
{
    const id = req.params.id
    console.log("company id : "+id)

        
    await CompanyStock.find({CompanyID:id})
    .then(function(result)
    {
        console.log(result);
       

        var sendTotalAmount = 0
        var receiveTotalAmount = 0
        var Gas_Sold = 0
        var Cylinder_Sold = 0
        var ReceiveLeak = 0
        var SendLeak = 0
        var CylinderSENDLended = 0
        var CylinderRECEIVELended = 0
        var LatestPaid = 0
        var LatestTotCylinder = 0
        for (i in result){
            if (result[i].SendOrReceive == "Send"){
                sendTotalAmount +=  +result[i].Amount
                Gas_Sold += +result[i].Regular_Prima +result[i].Regular_Kamakhya +result[i].Regular_Suvidha +result[i].Regular_Others
                Cylinder_Sold += +result[i].Sold_Prima +result[i].Sold_Kamakhya +result[i].Sold_Suvidha +result[i].Sold_Others
                SendLeak += +result[i].Leak_Prima +result[i].Leak_Kamakhya +result[i].Leak_Suvidha +result[i].Leak_Others 
                CylinderSENDLended += +result[i].Regular_Prima +result[i].Regular_Kamakhya +result[i].Regular_Suvidha +result[i].Regular_Others
             }
             if (result[i].SendOrReceive == "Receive"){
                receiveTotalAmount +=  +result[i].Amount
                ReceiveLeak += +result[i].Leak_Prima +result[i].Leak_Kamakhya +result[i].Leak_Suvidha +result[i].Leak_Others 
                CylinderRECEIVELended += +result[i].Regular_Prima +result[i].Regular_Kamakhya +result[i].Regular_Suvidha +result[i].Regular_Others
                
                LatestPaid = result[i].Amount
                LatestTotCylinder = result[i].Regular_Prima +result[i].Regular_Kamakhya +result[i].Regular_Suvidha +result[i].Regular_Others
            }
        }

        Rate = LatestPaid / LatestTotCylinder


        TotalAmount = sendTotalAmount - receiveTotalAmount
        TotalLeak = ReceiveLeak - SendLeak
        CylinderLended = CylinderSENDLended - CylinderRECEIVELended
        
        console.log("TotalAmount")
        console.log(TotalAmount)
        res.status(200).json({
            success:true,
            message:"Details of stock of Reseller having ID " + result.ResellerID,
            Rate: Rate,
            Amount: TotalAmount,
            GasSold:Gas_Sold,
            CylinderSold: Cylinder_Sold,
            LeakCylinderGiven: TotalLeak,
            CylinderLended:CylinderLended


        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})



//Updating Stock of Related Company
router1.put('/companyStockList/update/:id', async function(req,res)
{
    const id = req.params.id

    const {CompanyReceiptNo, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
        Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
        Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
        SendOrReceive, Amount, Remarks, Entryby} = req.body

    await CompanyStock.findOneAndUpdate({_id:id},
        {
            CompanyReceiptNo:CompanyReceiptNo,
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
            Remarks:Remarks,
            Entryby:Entryby
        })

    .then(function(result)
    {
        if(!result)
        {
            return res.status(500).json({
                success:false, 
                message:"Please fill all required information."
            });
        }
        console.log(result);
        res.status(200).json({
            message: "Stock Details Updated.", 
            success:true,
            data:result
        });
    })
})

module.exports = router1;