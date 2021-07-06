const express = require('express');
const router2 = express.Router();
const AddMember = require('../Models/AddMember');
const {check, validationResult} = require('express-validator');


router2.post('/admin/profile/addMember',[
    check('Firstname', 'Enter First Name').not().isEmpty(),
    check('Lastname', 'Enter Last Name').not().isEmpty(),
    check('Status', 'Who are  you?').not().isEmpty(),
    check('Phonenumber', 'Enter your phonenumber').not().isEmpty(),
    check('Profitfromeachcylinder', 'What profit should be given?').not().isEmpty(),
],
function(req,res)
{
    console.log(req.body)
    const errors = validationResult(req);

    if(errors.isEmpty())
    {
        const firstname = req.body.Firstname
        const lastname = req.body.Lastname
        const status = req.body.Status
        const phonenumber = req.body.Phonenumber
        const profitfromeachcylinder = req.body.Profitfromeachcylinder

        const data = new AddMember({Firstname : firstname, Lastname : lastname, Status : status, Phonenumber : phonenumber,
             Profitfromeachcylinder : profitfromeachcylinder})
        data.save()
        .then(function(result)
        {
            res.status(201).json({message: "Member Added successfully !!", success:true, data:result});
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