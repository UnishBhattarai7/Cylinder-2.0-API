const express = require('express');
const router2 = express.Router();
const Member = require('../Models/Member');
const bcryptjs = require('bcryptjs');
const {check, validationResult} = require('express-validator');

const date = require('date-and-time');


router2.post('/admin/profile/addMember',[
    check('Firstname', 'Enter First Name').not().isEmpty(),
    check('Lastname', 'Enter Last Name').not().isEmpty(),
    check('Status', 'Who are  you?').not().isEmpty(),
    check('Phonenumber', 'Enter your phonenumber').not().isEmpty(),
    check('Address', 'Enter your address').not().isEmpty(),
    check('Comission', 'What comission should be given?').not().isEmpty(),
],
async function(req,res)
{
    console.log(req.body)
    const errors = validationResult(req);

    if(errors.isEmpty())
    {
        const firstname = req.body.Firstname
        const lastname = req.body.Lastname
        const status = req.body.Status
        const phonenumber = req.body.Phonenumber
        const address = req.body.Address
        const comission = req.body.Comission

        const username = firstname + lastname 
        const password =  await bcryptjs.hash(Math.floor(Math.random() * (100000000 - 10000000) + 10000000) + firstname, 10);
        
        const accountCreated = date.format(new Date(),date.compile('YYYY/MM/DD hh:mm:ss'));

        const data = new Member({Firstname : firstname, Lastname : lastname, Status : status, Phonenumber : phonenumber,
             Address : address, Comission : comission, Username : username, Password : password })
        data.save()
        .then(function(result)
        {
            res.status(201).json({message: "Member Added successfully !!", success:true, username : username, password : password});
        })
        .catch(function(e)
        {
            res.status(500).json({message: e})
        });
    }
    else
    {
        res.status(400).json(errors.array());
    }
})

module.exports = router2;