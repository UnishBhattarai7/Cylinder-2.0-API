const crypto = require("crypto"); //to generate the token and hash it
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name : {
        type : String,
        required : [true,'Enter first name'],
        trime:true
    },
    last_name : {
        type : String,
        required : [true,'Enter last name'],
        trim : true,
    },
    phone_number : {
        type : String,
        required : [true, 'Enter Phone number'],
        unique : true
    },
    username:{
        type: String,
        required : true,
    },
    address : {
        type : String,
        required : [true, 'Address Required']
    },
    status : {
        type : String,
        enum : ['Admin','Employee'],
        default:'Employee'
    },
    isActive:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password : {
        type : String,
        required : true,
    },
    comission_percent: {
        type : String,
        required : true
    },
    change_password : {
        type : Boolean,
        default:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
    });


UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };

  //Match user entered password to hashed password in database
  UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

  //Generate and hash password token
  UserSchema.methods.getResetPasswordToken = function () {
    //Generate the token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    //set expire time to 10 minutes
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  
    return resetToken;
  };

module.exports = mongoose.model("User", UserSchema);