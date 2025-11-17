//CONTROLLERS contain functions which we will attach to our Routes..
const User = require('../models/user.js');

async function handlegetAllUsers(req, res) {
    const allDBUsers= await User.find({});
    return res.json(allDBUsers);
}

async function handlegetUserbyId(req,res) {
    const findUser= await User.findById(req.params.id);  //id is generated itself in every entry of user in database
    if(!findUser) return res.status(404).json({error: "User Not Found"});
    return res.json(findUser);
}

async function handleCreateuser(req,res) {
    const body=req.body;    
    if (               //all these keys are passed from Postman through POST method
        !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title 
    ) {  
        return res.status(400).json({ msg: "All fields req.."});
    }
    const createUser= await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    })
    console.log("Result", createUser);
    return res.status(201).json({status: "success"});
}

async function handleDeleteUser(req,res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({"status":"SUCCESS"});
}
module.exports= {
    handlegetAllUsers,
    handlegetUserbyId,
    handleCreateuser,
    handleDeleteUser,
}

