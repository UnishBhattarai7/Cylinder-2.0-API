const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/user");
const bcryptjs = require('bcryptjs');
const crypto = require("crypto");

//To get the file name extension line .jpg,.png
const path = require("path");
const { json } = require("express");

exports.newMember = asyncHandler(async (req, res, next) => {
    const {first_name, last_name, status, phone_number, address, comission} = req.body;
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
      status:status,
      phone_number:phone_number,
      address : address,
      comission : comission,
      username : username,
      password : hpassword,
    });
    const member = await data.save()
    if(!member){
      return res.status(500).json({sucess:false, message:"C"})
    }
    res.status(200).json({message: member})
    
  });