const express= require("express");
const router= express.Router();
const {handlegetAllUsers, handlegetUserbyId, handleCreateuser, handleDeleteUser} = require("../controllers/user");


// router.get("/", async (req,res) => { //FINDING ALL USERS IN DB
//     const allDBUsers= await User.find({});
//     return res.json(allDBUsers);
// });
router.get("/", handlegetAllUsers);    //this will go to controllers

// router.get("/:id", async (req, res) => { //FINDING USER BY ID IN DB
//     // const id= Number(req.params.id);
//     // const user= users.find((user)=> user.id === id); 
//     const findUser= await User.findById(req.params.id);  //id is generated itself in every entry of user in database
//     return res.json(findUser); 
// });
router.get("/:id", handlegetUserbyId);

router.post("/", handleCreateuser);
// router.post("/", async(req, res) => { //CREATING A USER IN DB
//     const body=req.body;    
//     if (               //all these keys are passed from Postman through POST method
//         !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title 
//     ) {  
//         return res.status(400).json({ msg: "All fields req.."});
//     }
//     // users.push({...body, id: users.length +1});
//     // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error,data) => {
//     //     return res.status(200).json({status: "success", id: users.length});
//     // })
//     const createUser= await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         jobTitle: body.jobTitle
//     })
//     console.log("Result", createUser);
//     return res.status(201).json({status: "success"});
// });

// router.delete("/:id", async (req, res) => { //DELETING A USER FROM DB
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({"status":"SUCCESS"});
// })
router.delete("/:id", handleDeleteUser)

module.exports= router;