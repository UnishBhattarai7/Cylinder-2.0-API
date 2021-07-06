const jwt = require('jsonwebtoken');
const User = require('../Models/User')

module.exports.verifyUser = function(req,res,next)
{
    try
    {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const data = jwt.verify(token, 'secretkey');
        User.findOne({_id:data.UserID})
        .then(function(result)
        {
            console.log("user id: ", data.UserID)
            req.user = result;
            next();
        })
        .catch(function(result)
        {
           return res.status(403).json({error: "Auth failed."})
        })
    }
    catch(e)
    {
       return res.status(403).json({message: "Fail to authenticate User"});
    }
}

module.exports.verifyAdmin = function(req,res,next)
{
    if(!req.user)
    {
        return res.status(401).json({message: "User doesnot have access."})
    }
    else if(req.user.UserType!=="Admin")
    {
        return res.status(401).json({message: "Permission denied."})
    }
    next();
}