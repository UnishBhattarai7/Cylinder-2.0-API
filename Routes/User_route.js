const express = require('express');
const router1 = express.Router();
const User = require('../Models/User');
const {check, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

router1.post('/sign_up',[
    check('Phonenumber', "Phone Number Required").not().isEmpty(),
    check('Password', "Password Required").not().isEmpty(),
    check('Usertype', "Who are you?").not().isEmpty(),
],
function(req,res)
{
    console.log(req.body)
    const errors = validationResult(req);

    if(errors.isEmpty())
    {
        const fullname = req.body.Fullname
        const phonenumber = req.body.Phonenumber
        const password = req.body.Password
        const usertype = req.body.Usertype

        bcryptjs.hash(password, 10, function(err, hash)
        {
            const data = new User({Fullname : fullname, Phonenumber : phonenumber, Password : hash, Usertype : usertype});
            data.save()
            .then(function(result)
            {
                res.status(201).json({message: "Member Registered !!", success:true, data:result});
            })
            .catch(function(e)
            {
                res.status(500).json({message: e})
            });
        })
    }
    else
    {
        res.status(400).json(errors.array());
    }
})



module.exports = router1;
