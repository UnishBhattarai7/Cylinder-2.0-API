const express = require('express');
const router2 = express.Router();
const Member = require('../Models/Member');
const bcryptjs = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const date = require('date-and-time');
const jwt = require('jsonwebtoken');

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
        const password =  Math.floor(Math.random() * (100000000 - 10000000) + 10000000) + firstname
        const hpassword = await bcryptjs.hash(password, 10)

        const accountCreated = date.format(new Date(),date.compile('YYYY/MM/DD hh:mm:ss'));

        Member.findOne({ Username: username })
        .then(function (userDetails) {
            if (userDetails === null) {
                const data = new Member({Firstname : firstname, Lastname : lastname, Status : status, Phonenumber : phonenumber,
                    Address : address, Comission : comission, Username : username, Password : hpassword, accountCreated: accountCreated })
               data.save()
               .then(function(result)
               {
                   res.status(201).json({message: "Member Added successfully !!", success:true, username : username, password : password});
               })
               .catch(function(e)
               {
                   res.status(500).json({message: e})
               });
            }else{
                return res.status(401).json({ message: "Username already exist.", success: false })
            }
        })
        .catch(function(e){
            res.status(500).json({message: e})
        })
    }
    else
    {
        res.status(400).json(errors.array());
    }
})

router2.post('/login',[
    check('Username', 'Enter Username').not().isEmpty(),
    check('Password', 'Enter Password').not().isEmpty(),
],function(req,res)
{
    Member.findOne({Username:req.body.Username})
    
    .then(function(memberDetails){
        if(memberDetails === null)
        {
            return res.status(401).json({message: "Unauthorised Member !!!"})
        }
        bcryptjs.compare(req.body.Password, memberDetails.Password,function(err,cresult)
        {
            if(cresult == false)
            {
                return res.status(401).json({message: "Username or Password Incorrect."})
            }
            if(memberDetails.isfirst == true)
            {
                return res.status(401).json({message: "Please change your default password.", success: false})
            }
            const token = jwt.sign({MemberID : memberDetails._id}, 'secretkey')

            return res.status(200).json({message: "Login Success", token:token, Usertype : memberDetails.Usertype, success:true})
            
            /* Member.updateOne({Username: req.body.Username})
            .then(async function(res)
            {
                await Member.updateOne({Username: req.body.Username},{$set:{isfirst:false}}, {new:true})
                
            })
            .catch(function(e){
                res.status(500).json({message: e})
            }) */
        })
    })
    .catch(function(e){
        res.status(500).json({message: e})
    })
})

router2.put('/changepassword', async function (req, res) {

    const username = req.body.Username
    const password = req.body.Password
    const Npassword = await bcryptjs.hash(req.body.Npassword, 10)

    Member.findOne({ Username: username })
        .then(function (memberDetails) {
            if (memberDetails === null) {
                return res.status(401).json({ message: "Invalid Username", success: false })
            }
            bcryptjs.compare(password, memberDetails.Password, function (err, result) {
                if (result === false) {
                    return res.status(401).json({ message: "Username or Password does not match."})
                }
                else
                {
                    Member.findOneAndUpdate({Username : username}, 
                        {Password : Npassword, isfirst:false})
                    .then(function(result){
                        res.status(200).json({success : true, message : "Password Changed."})
                    })
                    .catch(function(err){
                        res.status(500).json({message : err})
                    })
                }
            })
        })
        .catch()
})

module.exports = router2;