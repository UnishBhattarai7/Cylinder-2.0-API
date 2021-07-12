const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const {check, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//route for adding new member to the system
router.post('/newMember',async function(req,res)
{
    const {first_name, last_name, phone_number, address, comission_percent} = req.body;
    const username = first_name+last_name
    const password =  Math.floor(Math.random() * (100000000 - 10000000) + 10000000) + first_name
    const hpassword = await bcryptjs.hash(password, 10)
    
    const alreadyExist = await User.findOne({username:username})
    if(alreadyExist){
      return res.status(500).json({succes:false, message:"The employee you trying to add is already exist."})
    }

    const data = new User({
      first_name:first_name,
      last_name:last_name,
      phone_number:phone_number,
      address : address,
      comission_percent : comission_percent,
      username : username,
      password : hpassword,
    });
    const member = await data.save()
    if(!member){
      return res.status(500).json({sucess:false, message:"Could not add New Member"})
    }
    res.status(200).json({password:password, success:true, message: "New member "+first_name+" has been added to the system", user:member})
});


router.post('/login',function(req,res)
{
    User.findOne({username:req.body.username})
    .then(function(user)
    {
        if(user){
            bcryptjs.compare(req.body.password, user.password,function(err,cresult)
            {
                if(cresult == false)
                {
                    return res.status(401).json({message: "Username or Password Incorrect."})
                }
                // const token = jwt.sign({AdminID: adminDetails._id}, 'secretkey')
                res.status(200).json({message: "Login Success", success:true, user:user})
            })
        }else{
           return res.status(200).json({message: "UserNot available", success:false})
        }
    })
    .catch()
});


//change password API
router.put('/changePassword', async function (req, res) {

    console.log("change password")

    const username = req.body.username
    const password = req.body.password
    const new_password = await bcryptjs.hash(req.body.new_password, 10)

    User.findOne({ username: username })
        .then(function (memberDetails) {
            if (memberDetails === null) {
                return res.status(401).json({ message: "Invalid Username", success: false })
            }
            bcryptjs.compare(password, memberDetails.password, function (err, result) {
                if (result === false) {
                    return res.status(401).json({ message: "Username or Password does not match.", success: false})
                }
                else
                {
                    User.findOneAndUpdate({username : username}, 
                        {password : new_password, change_password:false})
                    .then(function(result){
                        res.status(200).json({success : true, message : "Password Changed."})
                    })
                    .catch(function(err){
                        res.status(500).json({message : err, success: false})
                    })
                }
            })
        })
        .catch()
})

//Showing list of Member
router.get('/memberList',async function(req,res)
{
    await Member.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status().json({
                success:false, 
                message:"There are no any member registered."})
        };
        res.status(200).json({
            success:true, 
            message:"List of Registered Member: ", 
            list:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});


//Showing Member Details
router.get('/memberList/:id', async function(req,res)
{
    const id = req.params.id;
    await Member.findOne({_id : id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true, 
            message:"Details of " + result.username, 
            info:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});

module.exports = router;
