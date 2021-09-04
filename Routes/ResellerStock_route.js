const express = require('express');
const router1 = express.Router();
const ResellerStock = require('../Models/ResellerStock');
const Reseller = require('../Models/Reseller');

//Entering Stock Details
router1.post('/resellerStock',async function(req, res)
{
    await Reseller.findOne({_id:req.body.ResellerID})
    .then(async function(ResellerDetails)
    {
        console.log(ResellerDetails);
        console.log("dta from body "+req.body.Gas_state)
        const {ResellerReceiptNo, ResellerID, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
            Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
            Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
            SendOrReceive, Amount, Remarks} = req.body
        const data = new ResellerStock({
            ResellerReceiptNo:ResellerReceiptNo,
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
            Amount:Amount,
            Remarks:Remarks,
        })
        console.log(data)
        
        const stockInfo = await data.save()
        console.log(stockInfo);

        if(!stockInfo)
        {
            return res.status(400).json({
                success:false,
                message:"Please fill all required information."
            })
        }
        res.status(200).json({
            success:true,
            message: "Data entered in Stock.",
            info:stockInfo
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    });
});

//Show all Reseller Stock list
router1.get('/resellerStockList', async function(req,res)
{
    await ResellerStock.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status(201).json({
                success:false,
                message:"There is no data in Reseller Stock."
            })
        }
        res.status(200).json({
            success:true,
            message:"Reseller Stock List: ",
            data:result
        })

        
        console.log( "result")
        console.log( result[0]._id)
        console.log( "hi")

    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})


//Show stock of related reseller
router1.get('/resellerStockList/:id', async function(req,res)
{
    const id = req.params.id
    console.log("reseller id :"+id)
    
    await ResellerStock.findOne({ResellerID:id})
    .then(function(result)
    {
        console.log(result);
        console.log("result");
        res.status(200).json({
            success:true,
            message:"Details of stock of Reseller having ID " + result.ResellerID,
            data:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})

//Show profile of related reseller
router1.get('/profile/:id', async function(req,res)
{
    const id = req.params.id
    console.log("reseller id : "+id)

    var rate = 0
    await Reseller.find({_id:id})
    .then(function(result1)
    {
        console.log(result1)
        rate = result1[0].rateforReseller
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

        
    await ResellerStock.find({ResellerID:id})
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
             }
        }

        TotalAmount = sendTotalAmount - receiveTotalAmount
        TotalLeak = ReceiveLeak - SendLeak
        CylinderLended = CylinderSENDLended - CylinderRECEIVELended
        
        console.log("TotalAmount")
        console.log(TotalAmount)
        res.status(200).json({
            success:true,
            message:"Details of stock of Reseller having ID " + result.ResellerID,
            Rate:rate,
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
router1.put('/resellerStockList/update/:id', async function(req,res)
{
    const id = req.params.id

    const {ResellerReceiptNo, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
        Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
        Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
        SendOrReceive, Amount, Remarks, Entryby} = req.body

    await ResellerStock.findOneAndUpdate({_id:id},
        {
            ResellerReceiptNo:ResellerReceiptNo,
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