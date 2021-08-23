const express = require('express');
const router = express.Router();
const Stock = require('../Models/Stock');
const ResellerStock = require('../Models/ResellerStock');
const CompanyStock = require('../Models/CompanyStock');
const { find } = require('../Models/Stock');

//Showing Stock Details
router.get('/stockDetails', async function(req,res)
{
    //For Full Cylinder (Reseller)
    var rFull_Prima_Send, rFull_Kamakhya_Send, rFull_Suvidha_Send, rFull_Others_Send;
    await ResellerStock.find({Gas_state:"Full" , SendOrReceive:"Send"})
    .then(function(result1aa)
    {
        for (i in result1aa)
        {
            rFull_Prima_Send = result1aa[i].Regular_Prima + result1aa[i].Leak_Prima + result1aa[i].Sold_Prima;
            rFull_Kamakhya_Send = result1aa[i].Regular_Kamakhya + result1aa[i].Leak_Kamakhya + result1aa[i].Sold_Kamakhya;
            rFull_Suvidha_Send = result1aa[i].Regular_Suvidha + result1aa[i].Leak_Suvidha + result1aa[i].Sold_Suvidha;
            rFull_Others_Send = result1aa[i].Regular_Others + result1aa[i].Leak_Others + result1aa[i].Sold_Others;
        }
        console.log("rPrima Full (Send): ", rFull_Prima_Send);
        console.log("rKamakhya Full (Send): ", rFull_Kamakhya_Send);
        console.log("rSuvidha Full (Send): ", rFull_Suvidha_Send);
        console.log("rOthers Full (Send): ", rFull_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var rFull_Prima_Receive, rFull_Kamakhya_Receive, rFull_Suvidha_Receive, rFull_Others_Receive;
    await ResellerStock.find({Gas_state:"Full" , SendOrReceive:"Receive"})
    .then(function(result1ab)
    {
        for (i in result1ab)
        {
            rFull_Prima_Receive = result1ab[i].Regular_Prima + result1ab[i].Leak_Prima + result1ab[i].Sold_Prima;
            rFull_Kamakhya_Receive = result1ab[i].Regular_Kamakhya + result1ab[i].Leak_Kamakhya + result1ab[i].Sold_Kamakhya;
            rFull_Suvidha_Receive = result1ab[i].Regular_Suvidha + result1ab[i].Leak_Suvidha + result1ab[i].Sold_Suvidha;
            rFull_Others_Receive = result1ab[i].Regular_Others + result1ab[i].Leak_Others + result1ab[i].Sold_Others;
        }
        console.log("rPrima Full (Receive): ", rFull_Prima_Receive);
        console.log("rKamakhya Full (Receive): ", rFull_Kamakhya_Receive);
        console.log("rSuvidha Full (Receive): ", rFull_Suvidha_Receive);
        console.log("rOthers Full (Receive): ", rFull_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    // For Half Cylinder (Reseller)
    var rHalf_Prima_Send, rHalf_Kamakhya_Send, rHalf_Suvidha_Send, rHalf_Others_Send;
    await ResellerStock.find({Gas_state:"Half" , SendOrReceive:"Send"})
    .then(function(result1ba)
    {
        for (i in result1ba)
        {
            rHalf_Prima_Send = result1ba[i].Regular_Prima + result1ba[i].Leak_Prima + result1ba[i].Sold_Prima;
            rHalf_Kamakhya_Send = result1ba[i].Regular_Kamakhya + result1ba[i].Leak_Kamakhya + result1ba[i].Sold_Kamakhya;
            rHalf_Suvidha_Send = result1ba[i].Regular_Suvidha + result1ba[i].Leak_Suvidha + result1ba[i].Sold_Suvidha;
            rHalf_Others_Send = result1ba[i].Regular_Others + result1ba[i].Leak_Others + result1ba[i].Sold_Others;
        }
        console.log("rPrima Half (Send): ", rHalf_Prima_Send);
        console.log("rKamakhya Half (Send): ", rHalf_Kamakhya_Send);
        console.log("rSuvidha Half (Send): ", rHalf_Suvidha_Send);
        console.log("rOthers Half (Send): ", rHalf_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var rHalf_Prima_Receive, rHalf_Kamakhya_Receive, rHalf_Suvidha_Receive, rHalf_Others_Receive;
    await ResellerStock.find({Gas_state:"Half" , SendOrReceive:"Receive"})
    .then(function(result1bb)
    {
        for (i in result1bb)
        {
            rHalf_Prima_Receive = result1bb[i].Regular_Prima + result1bb[i].Leak_Prima + result1bb[i].Sold_Prima;
            rHalf_Kamakhya_Receive = result1bb[i].Regular_Kamakhya + result1bb[i].Leak_Kamakhya + result1bb[i].Sold_Kamakhya;
            rHalf_Suvidha_Receive = result1bb[i].Regular_Suvidha + result1bb[i].Leak_Suvidha + result1bb[i].Sold_Suvidha;
            rHalf_Others_Receive = result1bb[i].Regular_Others + result1bb[i].Leak_Others + result1bb[i].Sold_Others;
        }
        console.log("rPrima Half (Receive): ", rHalf_Prima_Receive);
        console.log("rKamakhya Half (Receive): ", rHalf_Kamakhya_Receive);
        console.log("rSuvidha Half (Receive): ", rHalf_Suvidha_Receive);
        console.log("rOthers Half (Receive): ", rHalf_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    //For Empty Cylinder (Reseller)
    var rEmpty_Prima_Send, rEmpty_Kamakhya_Send, rEmpty_Suvidha_Send, rEmpty_Others_Send;
    await ResellerStock.find({Gas_state:"Empty" , SendOrReceive:"Send"})
    .then(function(result1ca)
    {
        for (i in result1ca)
        {
            rEmpty_Prima_Send = result1ca[i].Regular_Prima + result1ca[i].Leak_Prima + result1ca[i].Sold_Prima;
            rEmpty_Kamakhya_Send = result1ca[i].Regular_Kamakhya + result1ca[i].Leak_Kamakhya + result1ca[i].Sold_Kamakhya;
            rEmpty_Suvidha_Send = result1ca[i].Regular_Suvidha + result1ca[i].Leak_Suvidha + result1ca[i].Sold_Suvidha;
            rEmpty_Others_Send = result1ca[i].Regular_Others + result1ca[i].Leak_Others + result1ca[i].Sold_Others;
        }
        console.log("rPrima Empty (Send): ", rEmpty_Prima_Send);
        console.log("rKamakhya Empty (Send): ", rEmpty_Kamakhya_Send);
        console.log("rSuvidha Empty (Send): ", rEmpty_Suvidha_Send);
        console.log("rOthers Empty (Send): ", rEmpty_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var rEmpty_Prima_Receive, rEmpty_Kamakhya_Receive, rEmpty_Suvidha_Receive, rEmpty_Others_Receive;
    await ResellerStock.find({Gas_state:"Empty" , SendOrReceive:"Receive"})
    .then(function(result1cb)
    {
        for (i in result1cb)
        {
            rEmpty_Prima_Receive = result1cb[i].Regular_Prima + result1cb[i].Leak_Prima + result1cb[i].Sold_Prima;
            rEmpty_Kamakhya_Receive = result1cb[i].Regular_Kamakhya + result1cb[i].Leak_Kamakhya + result1cb[i].Sold_Kamakhya;
            rEmpty_Suvidha_Receive = result1cb[i].Regular_Suvidha + result1cb[i].Leak_Suvidha + result1cb[i].Sold_Suvidha;
            rEmpty_Others_Receive = result1cb[i].Regular_Others + result1cb[i].Leak_Others + result1cb[i].Sold_Others;
        }
        console.log("rPrima Empty (Receive): ", rEmpty_Prima_Receive);
        console.log("rKamakhya Empty (Receive): ", rEmpty_Kamakhya_Receive);
        console.log("rSuvidha Empty (Receive): ", rEmpty_Suvidha_Receive);
        console.log("rOthers Empty (Receive): ", rEmpty_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var rFull_Prima = rFull_Prima_Send - rFull_Prima_Receive;
    var rHalf_Prima = rHalf_Prima_Send - rHalf_Prima_Receive;
    var rEmpty_Prima = rEmpty_Prima_Send - rEmpty_Prima_Receive;
    
    var rFull_Kamakhya = rFull_Kamakhya_Send - rFull_Kamakhya_Receive;
    var rHalf_Kamakhya = rHalf_Kamakhya_Send - rHalf_Kamakhya_Receive;
    var rEmpty_Kamakhya = rEmpty_Kamakhya_Send - rEmpty_Kamakhya_Receive;

    var rFull_Suvidha = rFull_Suvidha_Send - rFull_Suvidha_Receive;
    var rHalf_Suvidha = rHalf_Suvidha_Send - rHalf_Suvidha_Receive;
    var rEmpty_Suvidha = rEmpty_Suvidha_Send - rEmpty_Suvidha_Receive;

    var rFull_Others = rFull_Others_Send - rFull_Others_Receive;
    var rHalf_Others = rHalf_Others_Send - rHalf_Others_Receive;
    var rEmpty_Others = rEmpty_Others_Send - rEmpty_Others_Receive;
    
    console.log("rFull_Prima Total", rFull_Prima);
    console.log("rHalf_Prima Total", rHalf_Prima);
    console.log("rEmpty_Prima Total", rEmpty_Prima);
    
    console.log("rFull_Kamakhya Total", rFull_Kamakhya);
    console.log("rHalf_Kamakhya Total", rHalf_Kamakhya);
    console.log("rEmpty_Kamakhya Total", rEmpty_Kamakhya);

    console.log("rFull_Suvidha Total", rFull_Suvidha);
    console.log("rHalf_Suvidha Total", rHalf_Suvidha);
    console.log("rEmpty_Suvidha Total", rEmpty_Suvidha);
    
    console.log("rFull_Others Total", rFull_Others);
    console.log("rHalf_Others Total", rHalf_Others);
    console.log("rEmpty_Others Total", rEmpty_Others);

    //For Full Cylinder (Company)
    var cFull_Prima_Send, cFull_Kamakhya_Send, cFull_Suvidha_Send, cFull_Others_Send;
    await CompanyStock.find({Gas_state:"Full" , SendOrReceive:"Send"})
    .then(function(result2aa)
    {
        for (i in result2aa)
        {
            cFull_Prima_Send = result2aa[i].Regular_Prima + result2aa[i].Leak_Prima + result2aa[i].Sold_Prima;
            cFull_Kamakhya_Send = result2aa[i].Regular_Kamakhya + result2aa[i].Leak_Kamakhya + result2aa[i].Sold_Kamakhya;
            cFull_Suvidha_Send = result2aa[i].Regular_Suvidha + result2aa[i].Leak_Suvidha + result2aa[i].Sold_Suvidha;
            cFull_Others_Send = result2aa[i].Regular_Others + result2aa[i].Leak_Others + result2aa[i].Sold_Others;
        }
        console.log("cPrima Full (Send): ", cFull_Prima_Send);
        console.log("cKamakhya Full (Send): ", cFull_Kamakhya_Send);
        console.log("cSuvidha Full (Send): ", cFull_Suvidha_Send);
        console.log("cOthers Full (Send): ", cFull_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var cFull_Prima_Receive, cFull_Kamakhya_Receive, cFull_Suvidha_Receive, cFull_Others_Receive;
    await CompanyStock.find({Gas_state:"Full" , SendOrReceive:"Receive"})
    .then(function(result2ab)
    {
        for (i in result2ab)
        {
            cFull_Prima_Receive = result2ab[i].Regular_Prima + result2ab[i].Leak_Prima + result2ab[i].Sold_Prima;
            cFull_Kamakhya_Receive = result2ab[i].Regular_Kamakhya + result2ab[i].Leak_Kamakhya + result2ab[i].Sold_Kamakhya;
            cFull_Suvidha_Receive = result2ab[i].Regular_Suvidha + result2ab[i].Leak_Suvidha + result2ab[i].Sold_Suvidha;
            cFull_Others_Receive = result2ab[i].Regular_Others + result2ab[i].Leak_Others + result2ab[i].Sold_Others;
        }
        console.log("cPrima Full (Receive): ", cFull_Prima_Receive);
        console.log("cKamakhya Full (Receive): ", cFull_Kamakhya_Receive);
        console.log("cSuvidha Full (Receive): ", cFull_Suvidha_Receive);
        console.log("cOthers Full (Receive): ", cFull_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    
    // For Half Cylinder (Company)
    var cHalf_Prima_Send, cHalf_Kamakhya_Send, cHalf_Suvidha_Send, cHalf_Others_Send;
    await CompanyStock.find({Gas_state:"Half" , SendOrReceive:"Send"})
    .then(function(result2ba)
    {
        for (i in result2ba)
        {
            cHalf_Prima_Send = result2ba[i].Regular_Prima + result2ba[i].Leak_Prima + result2ba[i].Sold_Prima;
            cHalf_Kamakhya_Send = result2ba[i].Regular_Kamakhya + result2ba[i].Leak_Kamakhya + result2ba[i].Sold_Kamakhya;
            cHalf_Suvidha_Send = result2ba[i].Regular_Suvidha + result2ba[i].Leak_Suvidha + result2ba[i].Sold_Suvidha;
            cHalf_Others_Send = result2ba[i].Regular_Others + result2ba[i].Leak_Others + result2ba[i].Sold_Others;
        }
        console.log("cPrima Half (Send): ", cHalf_Prima_Send);
        console.log("cKamakhya Half (Send): ", cHalf_Kamakhya_Send);
        console.log("cSuvidha Half (Send): ", cHalf_Suvidha_Send);
        console.log("cOthers Half (Send): ", cHalf_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var cHalf_Prima_Receive, cHalf_Kamakhya_Receive, cHalf_Suvidha_Receive, cHalf_Others_Receive;
    await CompanyStock.find({Gas_state:"Half" , SendOrReceive:"Receive"})
    .then(function(result2bb)
    {
        for (i in result2bb)
        {
            cHalf_Prima_Receive = result2bb[i].Regular_Prima + result2bb[i].Leak_Prima + result2bb[i].Sold_Prima;
            cHalf_Kamakhya_Receive = result2bb[i].Regular_Kamakhya + result2bb[i].Leak_Kamakhya + result2bb[i].Sold_Kamakhya;
            cHalf_Suvidha_Receive = result2bb[i].Regular_Suvidha + result2bb[i].Leak_Suvidha + result2bb[i].Sold_Suvidha;
            cHalf_Others_Receive = result2bb[i].Regular_Others + result2bb[i].Leak_Others + result2bb[i].Sold_Others;
        }
        console.log("cPrima Half (Receive): ", cHalf_Prima_Receive);
        console.log("cKamakhya Half (Receive): ", cHalf_Kamakhya_Receive);
        console.log("cSuvidha Half (Receive): ", cHalf_Suvidha_Receive);
        console.log("cOthers Half (Receive): ", cHalf_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    //For Empty Cylinder (Company)
    var cEmpty_Prima_Send, cEmpty_Kamakhya_Send, cEmpty_Suvidha_Send, cEmpty_Others_Send;
    await CompanyStock.find({Gas_state:"Empty" , SendOrReceive:"Send"})
    .then(function(result2ca)
    {
        for (i in result2ca)
        {
            cEmpty_Prima_Send = result2ca[i].Regular_Prima + result2ca[i].Leak_Prima + result2ca[i].Sold_Prima;
            cEmpty_Kamakhya_Send = result2ca[i].Regular_Kamakhya + result2ca[i].Leak_Kamakhya + result2ca[i].Sold_Kamakhya;
            cEmpty_Suvidha_Send = result2ca[i].Regular_Suvidha + result2ca[i].Leak_Suvidha + result2ca[i].Sold_Suvidha;
            cEmpty_Others_Send = result2ca[i].Regular_Others + result2ca[i].Leak_Others + result2ca[i].Sold_Others;
        }
        console.log("cPrima Empty (Send): ", cEmpty_Prima_Send);
        console.log("cKamakhya Empty (Send): ", cEmpty_Kamakhya_Send);
        console.log("cSuvidha Empty (Send): ", cEmpty_Suvidha_Send);
        console.log("cOthers Empty (Send): ", cEmpty_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var cEmpty_Prima_Receive, cEmpty_Kamakhya_Receive, cEmpty_Suvidha_Receive, cEmpty_Others_Receive;
    await CompanyStock.find({Gas_state:"Empty" , SendOrReceive:"Receive"})
    .then(function(result2cb)
    {
        for (i in result2cb)
        {
            cEmpty_Prima_Receive = result2cb[i].Regular_Prima + result2cb[i].Leak_Prima + result2cb[i].Sold_Prima;
            cEmpty_Kamakhya_Receive = result2cb[i].Regular_Kamakhya + result2cb[i].Leak_Kamakhya + result2cb[i].Sold_Kamakhya;
            cEmpty_Suvidha_Receive = result2cb[i].Regular_Suvidha + result2cb[i].Leak_Suvidha + result2cb[i].Sold_Suvidha;
            cEmpty_Others_Receive = result2cb[i].Regular_Others + result2cb[i].Leak_Others + result2cb[i].Sold_Others;
        }
        console.log("cPrima Empty (Receive): ", cEmpty_Prima_Receive);
        console.log("cKamakhya Empty (Receive): ", cEmpty_Kamakhya_Receive);
        console.log("cSuvidha Empty (Receive): ", cEmpty_Suvidha_Receive);
        console.log("cOthers Empty (Receive): ", cEmpty_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var cFull_Prima = cFull_Prima_Receive - cFull_Prima_Send;
    var cHalf_Prima = cHalf_Prima_Receive - cHalf_Prima_Send;
    var cEmpty_Prima = cEmpty_Prima_Receive - cEmpty_Prima_Send;
    
    var cFull_Kamakhya = cFull_Kamakhya_Receive - cFull_Kamakhya_Send;
    var cHalf_Kamakhya = cHalf_Kamakhya_Receive - cHalf_Kamakhya_Send;
    var cEmpty_Kamakhya = cEmpty_Kamakhya_Receive - cEmpty_Kamakhya_Send;

    var cFull_Suvidha = cFull_Suvidha_Receive - cFull_Suvidha_Send;
    var cHalf_Suvidha = cHalf_Suvidha_Receive - cHalf_Suvidha_Send;
    var cEmpty_Suvidha = cEmpty_Suvidha_Receive - cEmpty_Suvidha_Send;

    var cFull_Others = cFull_Others_Receive - cFull_Others_Send;
    var cHalf_Others = cHalf_Others_Receive - cHalf_Others_Send;
    var cEmpty_Others = cEmpty_Others_Receive - cEmpty_Others_Send;
    
    console.log("cFull_Prima Total", cFull_Prima);
    console.log("cHalf_Prima Total", cHalf_Prima);
    console.log("cEmpty_Prima Total", cEmpty_Prima);
    
    console.log("cFull_Kamakhya Total", cFull_Kamakhya);
    console.log("cHalf_Kamakhya Total", cHalf_Kamakhya);
    console.log("cEmpty_Kamakhya Total", cEmpty_Kamakhya);

    console.log("cFull_Suvidha Total", cFull_Suvidha);
    console.log("cHalf_Suvidha Total", cHalf_Suvidha);
    console.log("cEmpty_Suvidha Total", cEmpty_Suvidha);
    
    console.log("cFull_Others Total", cFull_Others);
    console.log("cHalf_Others Total", cHalf_Others);
    console.log("cEmpty_Others Total", cEmpty_Others);















    //For Full Cylinder (Total Stock)
    var sFull_Prima_Send, sFull_Kamakhya_Send, sFull_Suvidha_Send, sFull_Others_Send;
    await Stock.find({Gas_state:"Full", SendOrReceive:"Send"})
    .then(function(result3aa)
    {
        for (i in result3aa)
        {
            sFull_Prima_Send = result3aa[i].Regular_Prima + result3aa[i].Leak_Prima + result3aa[i].Sold_Prima;
            sFull_Kamakhya_Send = result3aa[i].Regular_Kamakhya + result3aa[i].Leak_Kamakhya + result3aa[i].Sold_Kamakhya;
            sFull_Suvidha_Send = result3aa[i].Regular_Suvidha + result3aa[i].Leak_Suvidha + result3aa[i].Sold_Suvidha;
            sFull_Others_Send = result3aa[i].Regular_Others + result3aa[i].Leak_Others + result3aa[i].Sold_Others; 
        }
        console.log("sPrima Full (Send): ", sFull_Prima_Send);
        console.log("sKamakhya Full (Send): ", sFull_Kamakhya_Send);
        console.log("sSuvidha Full (Send): ", sFull_Suvidha_Send);
        console.log("sOthers Full (Send): ", sFull_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    })

    var sFull_Prima_Receive, sFull_Kamakhya_Receive, sFull_Suvidha_Receive, sFull_Others_Receive;
    await Stock.find({Gas_state:"Full", SendOrReceive:"Receive"})
    .then(function(result3ab)
    {
        for (i in result3ab)
        {
            sFull_Prima_Receive = result3ab[i].Regular_Prima + result3ab[i].Leak_Prima + result3ab[i].Sold_Prima;
            sFull_Kamakhya_Receive = result3ab[i].Regular_Kamakhya + result3ab[i].Leak_Kamakhya + result3ab[i].Sold_Kamakhya;
            sFull_Suvidha_Receive = result3ab[i].Regular_Suvidha + result3ab[i].Leak_Suvidha + result3ab[i].Sold_Suvidha;
            sFull_Others_Receive = result3ab[i].Regular_Others + result3ab[i].Leak_Others + result3ab[i].Sold_Others; 
        }
        console.log("sPrima Full (Receive): ", sFull_Prima_Receive);
        console.log("sKamakhya Full (Receive): ", sFull_Kamakhya_Receive);
        console.log("sSuvidha Full (Receive): ", sFull_Suvidha_Receive);
        console.log("sOthers Full (Receive): ", sFull_Others_Receive);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    })

    //For Half Cylinder (Total Stock)
    var sHalf_Prima_Send, sHalf_Kamakhya_Send, sHalf_Suvidha_Send, sHalf_Others_Send;
    await Stock.find({Gas_state:"Half", SendOrReceive:"Send"})
    .then(function(result3ba)
    {
        for (i in result3ba)
        {
            sHalf_Prima_Send = result3ba[i].Regular_Prima + result3ba[i].Leak_Prima + result3ba[i].Sold_Prima;
            sHalf_Kamakhya_Send = result3ba[i].Regular_Kamakhya + result3ba[i].Leak_Kamakhya + result3ba[i].Sold_Kamakhya;
            sHalf_Suvidha_Send = result3ba[i].Regular_Suvidha + result3ba[i].Leak_Suvidha + result3ba[i].Sold_Suvidha;
            sHalf_Others_Send = result3ba[i].Regular_Others + result3ba[i].Leak_Others + result3ba[i].Sold_Others; 
        }
        console.log("sPrima Half (Send): ", sHalf_Prima_Send);
        console.log("sKamakhya Half (Send): ", sHalf_Kamakhya_Send);
        console.log("sSuvidha Half (Send): ", sHalf_Suvidha_Send);
        console.log("sOthers Half (Send): ", sHalf_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    })

    var sHalf_Prima_Receive, sHalf_Kamakhya_Receive, sHalf_Suvidha_Receive, sHalf_Others_Receive;
    await Stock.find({Gas_state:"Half", SendOrReceive:"Receive"})
    .then(function(result3bb)
    {
        for (i in result3bb)
        {
            sHalf_Prima_Receive = result3bb[i].Regular_Prima + result3bb[i].Leak_Prima + result3bb[i].Sold_Prima;
            sHalf_Kamakhya_Receive = result3bb[i].Regular_Kamakhya + result3bb[i].Leak_Kamakhya + result3bb[i].Sold_Kamakhya;
            sHalf_Suvidha_Receive = result3bb[i].Regular_Suvidha + result3bb[i].Leak_Suvidha + result3bb[i].Sold_Suvidha;
            sHalf_Others_Receive = result3bb[i].Regular_Others + result3bb[i].Leak_Others + result3bb[i].Sold_Others; 
        }
        console.log("sPrima Half (Receive): ", sHalf_Prima_Receive);
        console.log("sKamakhya Half (Receive): ", sHalf_Kamakhya_Receive);
        console.log("sSuvidha Half (Receive): ", sHalf_Suvidha_Receive);
        console.log("sOthers Half (Receive): ", sHalf_Others_Receive);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    })

    //For Empty Cylinder (Total Stock)
    var sEmpty_Prima_Send, sEmpty_Kamakhya_Send, sEmpty_Suvidha_Send, sEmpty_Others_Send;
    await Stock.find({Gas_state:"Empty", SendOrReceive:"Send"})
    .then(function(result3ca)
    {
        for (i in result3ca)
        {
            sEmpty_Prima_Send = result3ca[i].Regular_Prima + result3ca[i].Leak_Prima + result3ca[i].Sold_Prima;
            sEmpty_Kamakhya_Send = result3ca[i].Regular_Kamakhya + result3ca[i].Leak_Kamakhya + result3ca[i].Sold_Kamakhya;
            sEmpty_Suvidha_Send = result3ca[i].Regular_Suvidha + result3ca[i].Leak_Suvidha + result3ca[i].Sold_Suvidha;
            sEmpty_Others_Send = result3ca[i].Regular_Others + result3ca[i].Leak_Others + result3ca[i].Sold_Others; 
        }
        console.log("sPrima Empty (Send): ", sEmpty_Prima_Send);
        console.log("sKamakhya Empty (Send): ", sEmpty_Kamakhya_Send);
        console.log("sSuvidha Empty (Send): ", sEmpty_Suvidha_Send);
        console.log("sOthers Empty (Send): ", sEmpty_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    })

    var sEmpty_Prima_Receive, sEmpty_Kamakhya_Receive, sEmpty_Suvidha_Receive, sEmpty_Others_Receive;
    await Stock.find({Gas_state:"Empty", SendOrReceive:"Receive"})
    .then(function(result3cb)
    {
        for (i in result3cb)
        {
            sEmpty_Prima_Receive = result3cb[i].Regular_Prima + result3cb[i].Leak_Prima + result3cb[i].Sold_Prima;
            sEmpty_Kamakhya_Receive = result3cb[i].Regular_Kamakhya + result3cb[i].Leak_Kamakhya + result3cb[i].Sold_Kamakhya;
            sEmpty_Suvidha_Receive = result3cb[i].Regular_Suvidha + result3cb[i].Leak_Suvidha + result3cb[i].Sold_Suvidha;
            sEmpty_Others_Receive = result3cb[i].Regular_Others + result3cb[i].Leak_Others + result3cb[i].Sold_Others; 
        }
        console.log("sPrima Empty (Receive): ", sEmpty_Prima_Receive);
        console.log("sKamakhya Empty (Receive): ", sEmpty_Kamakhya_Receive);
        console.log("sSuvidha Empty (Receive): ", sEmpty_Suvidha_Receive);
        console.log("sOthers Empty (Receive): ", sEmpty_Others_Receive);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    })

    var sFull_Prima = sFull_Prima_Receive - sFull_Prima_Send;
    var sHalf_Prima = sHalf_Prima_Receive - sHalf_Prima_Send;
    var sEmpty_Prima = sEmpty_Prima_Receive - sEmpty_Prima_Send;

    var sFull_Kamakhya = sFull_Kamakhya_Receive - sFull_Kamakhya_Send;
    var sHalf_Kamakhya = sHalf_Kamakhya_Receive - sHalf_Kamakhya_Send;
    var sEmpty_Kamakhya = sEmpty_Kamakhya_Receive - sEmpty_Kamakhya_Send;

    var sFull_Suvidha = sFull_Suvidha_Receive - sFull_Suvidha_Send;
    var sHalf_Suvidha = sHalf_Suvidha_Receive - sHalf_Suvidha_Send;
    var sEmpty_Suvidha = sEmpty_Suvidha_Receive - sEmpty_Suvidha_Send;

    var sFull_Others = sFull_Others_Receive - sFull_Others_Send;
    var sHalf_Others = sHalf_Others_Receive - sHalf_Others_Send;
    var sEmpty_Others = sEmpty_Others_Receive - sEmpty_Others_Send;
    
    console.log("sFull_Prima Total", sFull_Prima);
    console.log("sHalf_Prima Total", sHalf_Prima);
    console.log("sEmpty_Prima Total", sEmpty_Prima);
    
    console.log("sFull_Kamakhya Total", sFull_Kamakhya);
    console.log("sHalf_Kamakhya Total", sHalf_Kamakhya);
    console.log("sEmpty_Kamakhya Total", sEmpty_Kamakhya);

    console.log("sFull_Suvidha Total", sFull_Suvidha);
    console.log("sHalf_Suvidha Total", sHalf_Suvidha);
    console.log("sEmpty_Suvidha Total", sEmpty_Suvidha);
    
    console.log("sFull_Others Total", sFull_Others);
    console.log("sHalf_Others Total", sHalf_Others);
    console.log("sEmpty_Others Total", sEmpty_Others);





    //Total calculation of Stock
    var Full_Prima = cFull_Prima - rFull_Prima + sFull_Prima
    var Full_Kamakhya = cFull_Kamakhya - rFull_Kamakhya + sFull_Kamakhya
    var Full_Suvidha = cFull_Suvidha - rFull_Suvidha + sFull_Suvidha
    var Full_Others = cFull_Others - rFull_Others + sFull_Others

    var Half_Prima = cHalf_Prima - rHalf_Prima + sHalf_Prima
    var Half_Kamakhya = cHalf_Kamakhya - rHalf_Kamakhya + sHalf_Kamakhya
    var Half_Suvidha = cHalf_Suvidha - rHalf_Suvidha + sHalf_Suvidha
    var Half_Others = cHalf_Others - rHalf_Others + sHalf_Others

    var Empty_Prima = cEmpty_Prima - rEmpty_Prima + sEmpty_Prima
    var Empty_Kamakhya = cEmpty_Kamakhya - rEmpty_Kamakhya + sEmpty_Kamakhya
    var Empty_Suvidha = cEmpty_Suvidha - rEmpty_Suvidha + sEmpty_Suvidha
    var Empty_Others = cEmpty_Others - rEmpty_Others + sEmpty_Others

    console.log("Full Prima: ",Full_Prima);
    console.log("Full_Kamakhya: ",Full_Kamakhya);
    console.log("Full_Suvidha: ",Full_Suvidha);
    console.log("Full_Others: ",Full_Others);

    console.log("Half Prima: ",Half_Prima);
    console.log("Half_Kamakhya: ",Half_Kamakhya);
    console.log("Half_Suvidha: ",Half_Suvidha);
    console.log("Half_Others: ",Half_Others);

    console.log("Empty Prima: ",Empty_Prima);
    console.log("Empty_Kamakhya: ",Empty_Kamakhya);
    console.log("Empty_Suvidha: ",Empty_Suvidha);
    console.log("Empty_Others: ",Empty_Others);


    res.status(200).json({
        success: true,
        message: "Stock Details",
        etPrimaF: Full_Prima,
        etPrimaH: Half_Prima,
        etPrimaE: Empty_Prima,
        etKamakhyaF: Full_Kamakhya,
        etKamakhyaH: Half_Kamakhya,
        etKamakhyaE: Empty_Kamakhya,
        etSuvidhaF: Full_Suvidha,
        etSuvidhaH: Half_Suvidha,
        etSuvidhaE: Empty_Suvidha,
        etOthersF: Full_Others,
        etOthersH: Half_Others,
        etOthersE: Empty_Others,
    })
});

//Updating Stock Details
router.post('/addStock', function(req,res)
{
    const {etPrimaF, etPrimaH, etPrimaE,
    etKamakhyaF, etKamakhyaH, etKamakhyaE,
    etSuvidhaF, etSuvidhaH, etSuvidhaE,
    etOthersF, etOthersH, etOthersE, Entryby} = req.body

    // { 11, -10, 20, 5, 2, -1, 4, 0, 0, 0, -3, 2, Roshan }
    
    var ResellerID = "123456abcd";    //Data comes from Authentication 
    var SendOrReceive;
    var FullReceive = {};
    var FullSend = {};
    var HalfReceive = {};
    var HalfSend = {};
    var EmptyReceive = {};
    var EmptySend = {};
    

    //For Full Gas state
    if (etPrimaF > 0)
    {
        FullReceive["etPrimaF"] = etPrimaF 
    }
    else if (etPrimaF < 0)
    {
        FullSend["etPrimaF"] = etPrimaF
    }

    if (etKamakhyaF > 0)
    {
        FullReceive["etKamakhyaF"] = etKamakhyaF
    }
    else if (etKamakhyaF < 0)
    {
        FullSend["etKamakhyaF"] = etKamakhyaF
    }

    if (etSuvidhaF > 0)
    {
        FullReceive["etSuvidhaF"] = etSuvidhaF
    }
    else if (etSuvidhaF < 0)
    {
        FullSend["etSuvidhaF"] = etSuvidhaF
    }

    if (etOthersF > 0)
    {
        FullReceive["etOthersF"] = etOthersF
    }
    else if (etOthersF < 0)
    {
        FullSend["etOthersF"] = etOthersF
    }

    //For Half Gas State
    if (etPrimaH > 0)
    {
        HalfReceive["etPrimaH"] = etPrimaH 
    }
    else if (etPrimaH < 0)
    {
        HalfSend["etPrimaH"] = etPrimaH
    }

    if (etKamakhyaH > 0)
    {
        HalfReceive["etKamakhyaH"] = etKamakhyaH
    }
    else if (etKamakhyaH < 0)
    {
        HalfSend["etKamakhyaH"] = etKamakhyaH
    }

    if (etSuvidhaH > 0)
    {
        HalfReceive["etSuvidhaH"] = etSuvidhaH
    }
    else if (etSuvidhaH < 0)
    {
        HalfSend["etSuvidhaH"] = etSuvidhaH
    }

    if (etOthersH > 0)
    {
        HalfReceive["etOthersH"] = etOthersH
    }
    else if (etOthersH < 0)
    {
        HalfSend["etOthersH"] = etOthersH
    }

    //For Empty Gas State
    if (etPrimaE > 0)
    {
        EmptyReceive["etPrimaE"] = etPrimaE 
    }
    else if (etPrimaE < 0)
    {
        EmptySend["etPrimaE"] = etPrimaE
    }

    if (etKamakhyaE > 0)
    {
        EmptyReceive["etKamakhyaE"] = etKamakhyaE
    }
    else if (etKamakhyaE < 0)
    {
        EmptySend["etKamakhyaE"] = etKamakhyaE
    }

    if (etSuvidhaE > 0)
    {
        EmptyReceive["etSuvidhaE"] = etSuvidhaE
    }
    else if (etSuvidhaE < 0)
    {
        EmptySend["etSuvidhaE"] = etSuvidhaE
    }

    if (etOthersE > 0)
    {
        EmptyReceive["etOthersE"] = etOthersE
    }
    else if (etOthersE < 0)
    {
        EmptySend["etOthersE"] = etOthersE
    }

    console.log(FullReceive);
    console.log(FullReceive);
    // console.log(Object.Keys(FullReceive));
    console.log(FullSend);
    console.log(HalfReceive);
    console.log(HalfSend);
    console.log(EmptyReceive);
    console.log(EmptySend);

    //Function for checking empty array.
    function isObjectEmpty(x) {
        return Object.keys(x).length === 0;
    }

    //For FullReceive
    if (isObjectEmpty(FullReceive) == false)
    {
            var Regular_Prima_check = FullReceive["etPrimaF"]
            var Regular_Kamakhya_check = FullReceive["etKamakhyaF"]
            var Regular_Suvidha_check = FullReceive["etSuvidhaF"]
            var Regular_Others_check = FullReceive["etOthersF"]

            if(Regular_Prima_check == 0)
            {
                Regular_Prima = 0
            }
            else
            {
                Regular_Prima = Regular_Prima_check
            }

            if(Regular_Kamakhya_check == 0)
            {
                Regular_Kamakhya = 0
            }
            else
            {
                Regular_Kamakhya = Regular_Kamakhya_check
            }

            if(Regular_Suvidha_check == 0)
            {
                Regular_Suvidha = 0
            }
            else
            {
                Regular_Suvidha = Regular_Suvidha_check
            }

            if(Regular_Others_check == 0)
            {
                Regular_Others = 0
            }
            else
            {
                Regular_Others = Regular_Others_check
            }

        const data = new Stock({
            ResellerID:"123456",
            Gas_state:"Full",
            Regular_Prima:Regular_Prima,
            Regular_Kamakhya:Regular_Kamakhya,
            Regular_Suvidha:Regular_Suvidha,
            Regular_Others:Regular_Others,
            SendOrReceive:"Receive",
            Entryby:Entryby
        })

        const fullreceiveinfo = data.save();

        res.status(200).json({
            sucess:true,
            message:"Stock Updated.",
            data : fullreceiveinfo
        })
    }

    //For FullSend
    if (isObjectEmpty(FullSend) == false)
    {
            var Regular_Prima_check = FullSend["etPrimaF"]
            var Regular_Kamakhya_check = FullSend["etKamakhyaF"]
            var Regular_Suvidha_check = FullSend["etSuvidhaF"]
            var Regular_Others_check = FullSend["etOthersF"]

            if(Regular_Prima_check == 0)
            {
                Regular_Prima = 0
            }
            else
            {
                Regular_Prima = Regular_Prima_check
            }

            if(Regular_Kamakhya_check == 0)
            {
                Regular_Kamakhya = 0
            }
            else
            {
                Regular_Kamakhya = Regular_Kamakhya_check
            }

            if(Regular_Suvidha_check == 0)
            {
                Regular_Suvidha = 0
            }
            else
            {
                Regular_Suvidha = Regular_Suvidha_check
            }

            if(Regular_Others_check == 0)
            {
                Regular_Others = 0
            }
            else
            {
                Regular_Others = Regular_Others_check
            }

        const data = new Stock({
            ResellerID:"123456",
            Gas_state:"Full",
            Regular_Prima:Regular_Prima,
            Regular_Kamakhya:Regular_Kamakhya,
            Regular_Suvidha:Regular_Suvidha,
            Regular_Others:Regular_Others,
            SendOrReceive:"Send",
            Entryby:Entryby
        })

        const fullsendinfo = data.save();

        res.status(200).json({
            sucess:true,
            message:"Stock Updated.",
            data : fullsendinfo
        })
    }

    //For HalfReceive
    if (isObjectEmpty(HalfReceive) == false)
    {
            var Regular_Prima_check = HalfReceive["etPrimaH"]
            var Regular_Kamakhya_check = HalfReceive["etKamakhyaH"]
            var Regular_Suvidha_check = HalfReceive["etSuvidhaH"]
            var Regular_Others_check = HalfReceive["etOthersH"]

            if(Regular_Prima_check == 0)
            {
                Regular_Prima = 0
            }
            else
            {
                Regular_Prima = Regular_Prima_check
            }

            if(Regular_Kamakhya_check == 0)
            {
                Regular_Kamakhya = 0
            }
            else
            {
                Regular_Kamakhya = Regular_Kamakhya_check
            }

            if(Regular_Suvidha_check == 0)
            {
                Regular_Suvidha = 0
            }
            else
            {
                Regular_Suvidha = Regular_Suvidha_check
            }

            if(Regular_Others_check == 0)
            {
                Regular_Others = 0
            }
            else
            {
                Regular_Others = Regular_Others_check
            }

        const data = new Stock({
            ResellerID:"123456",
            Gas_state:"Half",
            Regular_Prima:Regular_Prima,
            Regular_Kamakhya:Regular_Kamakhya,
            Regular_Suvidha:Regular_Suvidha,
            Regular_Others:Regular_Others,
            SendOrReceive:"Receive",
            Entryby:Entryby
        })

        const halfreceiveinfo = data.save();

        res.status(200).json({
            sucess:true,
            message:"Stock Updated.",
            data : halfreceiveinfo
        })
    }

    //For HalfSend
    if (isObjectEmpty(HalfSend) == false)
    {
            var Regular_Prima_check = HalfSend["etPrimaH"]
            var Regular_Kamakhya_check = HalfSend["etKamakhyaH"]
            var Regular_Suvidha_check = HalfSend["etSuvidhaH"]
            var Regular_Others_check = HalfSend["etOthersH"]

            if(Regular_Prima_check == 0)
            {
                Regular_Prima = 0
            }
            else
            {
                Regular_Prima = Regular_Prima_check
            }

            if(Regular_Kamakhya_check == 0)
            {
                Regular_Kamakhya = 0
            }
            else
            {
                Regular_Kamakhya = Regular_Kamakhya_check
            }

            if(Regular_Suvidha_check == 0)
            {
                Regular_Suvidha = 0
            }
            else
            {
                Regular_Suvidha = Regular_Suvidha_check
            }

            if(Regular_Others_check == 0)
            {
                Regular_Others = 0
            }
            else
            {
                Regular_Others = Regular_Others_check
            }

        const data = new Stock({
            ResellerID:"123456",
            Gas_state:"Half",
            Regular_Prima:Regular_Prima,
            Regular_Kamakhya:Regular_Kamakhya,
            Regular_Suvidha:Regular_Suvidha,
            Regular_Others:Regular_Others,
            SendOrReceive:"Send",
            Entryby:Entryby
        })

        const halfsendinfo = data.save();

        res.status(200).json({
            sucess:true,
            message:"Stock Updated.",
            data : halfsendinfo
        })
    }

    //For EmptyReceive
    if (isObjectEmpty(EmptyReceive) == false)
    {
            var Regular_Prima_check = EmptyReceive["etPrimaE"]
            var Regular_Kamakhya_check = EmptyReceive["etKamakhyaE"]
            var Regular_Suvidha_check = EmptyReceive["etSuvidhaE"]
            var Regular_Others_check = EmptyReceive["etOthersE"]

            if(Regular_Prima_check == 0)
            {
                Regular_Prima = 0
            }
            else
            {
                Regular_Prima = Regular_Prima_check
            }

            if(Regular_Kamakhya_check == 0)
            {
                Regular_Kamakhya = 0
            }
            else
            {
                Regular_Kamakhya = Regular_Kamakhya_check
            }

            if(Regular_Suvidha_check == 0)
            {
                Regular_Suvidha = 0
            }
            else
            {
                Regular_Suvidha = Regular_Suvidha_check
            }

            if(Regular_Others_check == 0)
            {
                Regular_Others = 0
            }
            else
            {
                Regular_Others = Regular_Others_check
            }

        const data = new Stock({
            ResellerID:"123456",
            Gas_state:"Empty",
            Regular_Prima:Regular_Prima,
            Regular_Kamakhya:Regular_Kamakhya,
            Regular_Suvidha:Regular_Suvidha,
            Regular_Others:Regular_Others,
            SendOrReceive:"Receive",
            Entryby:Entryby
        })

        const emptyreceiveinfo = data.save();

        res.status(200).json({
            sucess:true,
            message:"Stock Updated.",
            data : emptyreceiveinfo
        })
    }

    //For EmptySend
    if (isObjectEmpty(EmptySend) == false)
    {
            var Regular_Prima_check = EmptySend["etPrimaE"]
            var Regular_Kamakhya_check = EmptySend["etKamakhyaE"]
            var Regular_Suvidha_check = EmptySend["etSuvidhaE"]
            var Regular_Others_check = EmptySend["etOthersE"]

            if(Regular_Prima_check == 0)
            {
                Regular_Prima = 0
            }
            else
            {
                Regular_Prima = Regular_Prima_check
            }

            if(Regular_Kamakhya_check == 0)
            {
                Regular_Kamakhya = 0
            }
            else
            {
                Regular_Kamakhya = Regular_Kamakhya_check
            }

            if(Regular_Suvidha_check == 0)
            {
                Regular_Suvidha = 0
            }
            else
            {
                Regular_Suvidha = Regular_Suvidha_check
            }

            if(Regular_Others_check == 0)
            {
                Regular_Others = 0
            }
            else
            {
                Regular_Others = Regular_Others_check
            }

        const data = new Stock({
            ResellerID:"123456",
            Gas_state:"Empty",
            Regular_Prima:Regular_Prima,
            Regular_Kamakhya:Regular_Kamakhya,
            Regular_Suvidha:Regular_Suvidha,
            Regular_Others:Regular_Others,
            SendOrReceive:"Send",
            Entryby:Entryby
        })

        const emptysendinfo = data.save();

        res.status(200).json({
            sucess:true,
            message:"Stock Updated.",
            data : emptysendinfo
        })
    }

        
});

//Pofit Investment Calculation

// router.get('/profit-loss-investment'),async function(req,res){
 
//     res.status(500).json({error:e});
// }

//Gas-Cylinder Sold

router.get('/gas-cylinder-Sold',async function(req,res)
{
    var Gas_Sold=0
    var Cylinder_Sold=0
    var gasAmount=0
    var cylinderAmount=0
    await ResellerStock.find()
    .then(function(resultSold){
        if(!resultSold){
           return res.status(200).json({success : false, message:"unable to Load data"});
        }
        for (i in resultSold)
        {
            Gas_Sold += resultSold[i].Regular_Prima + resultSold[i].Regular_Kamakhya + resultSold[i].Regular_Suvidha + resultSold[i].Regular_Others
            Cylinder_Sold += resultSold[i].Sold_Prima + resultSold[i].Sold_Kamakhya + resultSold[i].Sold_Suvidha + resultSold[i].Sold_Others
        }
        gasAmount = Gas_Sold*1350
        cylinderAmount = Cylinder_Sold*700
        console.log("Gas Sold : ", Gas_Sold)
        console.log("Cylinder_Sold:",Cylinder_Sold)
        res.status(200).json({Gas_Sold : Gas_Sold, Cylinder_Sold:Cylinder_Sold,success:true, message:"data", gasAmount:gasAmount,cylinderAmount:cylinderAmount});
    })
    .catch(function(e){
        res.status(500).json({error:e});
    })

})

//For Next Order
router.get('/nextOrder',async function(req,res){
    // res.status(500).json({message:"hitted"});
    var res_rec_prima=0
    var res_rec_kamakhya=0 
    var res_rec_suvidha=0
    var res_send_prima=0
    var res_send_kamakhya=0
    var res_send_suvidha=0
    var com_rec_prima=0
    var com_rec_kamakhya=0
    var com_rec_suvidha=0
    var com_send_prima=0
    var com_send_kamakhya=0
    var com_send_suvidha=0
    var prima_total=0
    var kamakhya_total=0 
    var suvidha_total=0

    //received 
    //reseller stock
    await ResellerStock.find({SendOrReceive:"Receive"})
    .then(async function(resReceivedStock){
        if(!resReceivedStock){
           return res.status(500).json({success:false, message:"Could not load data"});
        }
        for(i in resReceivedStock){
            res_rec_prima += resReceivedStock[i].Regular_Prima + resReceivedStock[i].Leak_Prima + resReceivedStock[i].Sold_Prima; //working
            res_rec_kamakhya += resReceivedStock[i].Regular_Kamakhya + resReceivedStock[i].Leak_Kamakhya + resReceivedStock[i].Sold_Kamakhya; //working
            res_rec_suvidha += resReceivedStock[i].Regular_Suvidha + resReceivedStock[i].Leak_Suvidha + resReceivedStock[i].Sold_Suvidha; //working
        }
        // console.log("res_rec_prima:  "+ res_rec_prima);
        // console.log("res_rec_kamkhya:  "+ res_rec_kamakhya);
        // console.log("res_rec_suvidha:  "+ res_rec_suvidha);
    }).catch(function(e){
        res.status(500).json({error:e});
    })
    //company stock received
    await CompanyStock.find({SendOrReceive:"Receive"})
    .then(function(comReceivedStock){
        if(!comReceivedStock){
            return res.status(500).json({success:false, message:"Could not load data"});
        }
        for(i in comReceivedStock){
            com_rec_prima += comReceivedStock[i].Regular_Prima + comReceivedStock[i].Leak_Prima + comReceivedStock[i].Sold_Prima;
            com_rec_kamakhya += comReceivedStock[i].Regular_Kamakhya + comReceivedStock[i].Leak_Kamakhya + comReceivedStock[i].Sold_Kamakhya;
            com_rec_suvidha += comReceivedStock[i].Regular_Suvidha + comReceivedStock[i].Leak_Suvidha + comReceivedStock[i].Sold_Suvidha;
        }
        // console.log("com_rec_prima:  "+ com_rec_prima);
        // console.log("com_rec_kamakhya:  "+ com_rec_kamakhya);
        // console.log("com_rec_suvidha:  "+ com_rec_suvidha);
    }).catch(function(e){
        res.status(500).json({error:e});
    })

    // reseller stock send
    await ResellerStock.find({SendOrReceive:"Send"})
    .then(async function(resSendStock){
        if(!resSendStock){
           return res.status(500).json({success:false, message:"Could not load data"});
        }
        for(i in resSendStock){
            res_send_prima += resSendStock[i].Regular_Prima + resSendStock[i].Leak_Prima + resSendStock[i].Sold_Prima;
            res_send_kamakhya += resSendStock[i].Regular_Kamakhya + resSendStock[i].Leak_Kamakhya + resSendStock[i].Sold_Kamakhya;
            res_send_suvidha += resSendStock[i].Regular_Suvidha + resSendStock[i].Leak_Suvidha + resSendStock[i].Sold_Suvidha;
        }
        // console.log("res_send_prima:  "+ res_send_prima);
        // console.log("res_send_kamakhya:  "+ res_send_kamakhya);
        // console.log("res_send_suvidha:  "+ res_send_suvidha);
    }).catch(function(e){
        res.status(500).json({error:e});
    })

    // company stock send
    await CompanyStock.find({SendOrReceive:"Send"})
    .then(function(comSendStock){
        if(!comSendStock){
            return res.status(500).json({success:false, message:"Could not load data"});
        }
        for(i in comSendStock){
            com_send_prima += comSendStock[i].Regular_Prima + comSendStock[i].Leak_Prima + comSendStock[i].Sold_Prima;
            com_send_kamakhya += comSendStock[i].Regular_Kamakhya + comSendStock[i].Leak_Kamakhya + comSendStock[i].Sold_Kamakhya;
            com_send_suvidha += comSendStock[i].Regular_Suvidha + comSendStock[i].Leak_Suvidha + comSendStock[i].Sold_Suvidha;
        }
        // console.log("com_send_prima:  "+ com_send_prima);
        // console.log("com_send_kamakhya:  "+ com_send_kamakhya);
        // console.log("com_send_suvidha:  "+ com_send_suvidha);
    }).catch(function(e){
        res.status(500).json({error:e});
    })
    prima_total = (res_rec_prima-res_send_prima)+(com_rec_prima-com_send_prima)
    kamakhya_total = (res_rec_kamakhya-res_send_kamakhya)+(com_rec_kamakhya-com_send_kamakhya)
    suvidha_total = (res_rec_suvidha-res_send_kamakhya)+(com_rec_suvidha-com_send_suvidha)
    // console.log("prima_total:  "+ prima_total);
    // console.log("kamakhya_total:  "+ kamakhya_total);
    // console.log("suvidha_total:  "+ suvidha_total);
    if(prima_total<10){
       return res.status(200).json({success:true, nextOrder:"prima", left:prima_total})
    }
    else if(kamakhya_total<10){
        return res.status(200).json({success:true, nextOrder:"kamakhya", left:kamakhya_total})
    }
    else if(suvidha_total<10){
        return res.status(200).json({success:true, nextOrder:"suvidha", left:suvidha_total})
    }
    else{
        return res.status(200).json({success:false, message:"Stock is full"})
    }
})

router.get('/bestSelling',async function(req,res){
    var Prima_BestSelling=0
    var Kamakhya_BestSelling = 0
    var Suvidha_BestSelling=0
    await ResellerStock.find({SendOrReceive : "Send"})
    .then(function(resultBestSelling){
        for(i in resultBestSelling)
        {
            Prima_BestSelling += resultBestSelling[i].Regular_Prima 
            Kamakhya_BestSelling += resultBestSelling[i].Regular_Kamakhya 
            Suvidha_BestSelling += resultBestSelling[i].Regular_Suvidha 
        }
        console.log("Prima: " + Prima_BestSelling)
        res.status(200).json({Prima_BestSelling:Prima_BestSelling,Kamakhya_BestSelling:Kamakhya_BestSelling,Suvidha_BestSelling:Suvidha_BestSelling, success:true,messgae:"Value Received"})
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })
})

router.get('/profit-loss-investment', async function(req, res){
    var res_receive_amount = 0
    var res_send_amount = 0
    var com_receive_amount = 0
    var com_send_amount = 0
    var total_receive = 0
    var total_send = 0
    var profit_loss = 0

    // reseller received amount CP reseller
    await ResellerStock.find({SendOrReceive:"Receive"})
    .then(async function(resReceivedAmount){
        if(!resReceivedAmount){
           return res.status(500).json({success:false, message:"Could not load data"});
        }
        for(i in resReceivedAmount){
            res_receive_amount += resReceivedAmount[i].Amount
        }
        // res.status(500).json({success:true, message:res_receive_amount});
    }).catch(function(e){
        res.status(500).json({error:e});
    })

    // SP reseller
    await ResellerStock.find({SendOrReceive:"Send"})
    .then(async function(resSendAmount){
        if(!resSendAmount){
           return res.status(500).json({success:false, message:"Could not load data"});
        }
        for(i in resSendAmount){
            res_send_amount += resSendAmount[i].Amount
        }
        // res.status(500).json({success:true, message:res_send_amount});
    }).catch(function(e){
        res.status(500).json({error:e});
    })

    // company CP
    await CompanyStock.find({SendOrReceive:"Receive"})
    .then(async function(comReceivedAmount){
        if(!comReceivedAmount){
           return res.status(500).json({success:false, message:"Could not load data"});
        }
        for(i in comReceivedAmount){
            com_receive_amount += comReceivedAmount[i].Amount
        }
        // res.status(500).json({success:true, message:com_receive_amount});
    }).catch(function(e){
        res.status(500).json({error:e});
    })

    // SP company
    await CompanyStock.find({SendOrReceive:"Send"})
    .then(async function(comSendAmount){
        if(!comSendAmount){
           return res.status(500).json({success:false, message:"Could not load data"});
        }
        for(i in comSendAmount){
            com_send_amount += comSendAmount[i].Amount
        }
        // res.status(500).json({success:true, message:com_send_amount});
    }).catch(function(e){
        res.status(500).json({error:e});
    })

    total_receive = res_receive_amount + com_receive_amount
    total_send = res_send_amount + com_send_amount
    profit_loss = total_receive - total_send

    if(profit_loss>0){
        return res.status(200).json({success:true, profitLossAmount:profit_loss, profitLoss:"Profit",investment:total_receive})
    }else if(profit_loss<0){
        return res.status(200).json({success:true, profitLossAmount:profit_loss, profitLoss:"Loss", investment:total_receive})
    }else{
        return res.status(200).json({success:true, profitLossAmount:profit_loss, profitLoss:"Neutral", investment:total_receive})
    }
});
module.exports = router;