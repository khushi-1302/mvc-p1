const express= require("express");
// const fs=require('fs');
// const mongoose=require('mongoose');
// const users= require("./MOCK_DATA.json");

const {logReqRes} = require('./middlewares');
const userRouter= require("./routes/user");

const {connectMongoDb}= require('./connection');

const app=express();
const PORT=8000;

//Connection to MONGOdb
connectMongoDb('mongodb://127.0.0.1:27017/my_db1').then(()=> {console.log("MongoDb Connected")});
// mongoose.connect('mongodb://127.0.0.1:27017/my_db1') //got this from mongosh in cmd
// .then(()=> console.log("MongoDB Connected"))
// .catch(()=> console.log("Not Connected", err));

//Schema
// const userSchema= new mongoose.Schema({
//     firstName: {
//         type: String, required:true
//     },
//     lastName: {
//         type: String, required:false
//     },
//     email: {
//         type: String, required:true, unique:true
//     },
//     gender: {
//         type: String, required:false,
//     },
//     jobTitle: {
//         type: String, required:false,
//     },
// }, {timestamps: true});

// const User=mongoose.model('user', userSchema);//now using this User we can perform all operations


//middlewares ---- putting the form data in the body below
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
// app.use((req,res,next) => {         
//     console.log("Hello from middleware");
//     next();
app.use(logReqRes('log.txt'));

//ROUTES
// app.get("/api/users", async (req,res) => { //FINDING ALL USERS IN DB
//     const allDBUsers= await User.find({});
//     return res.json(allDBUsers);
// });

// app.get("/api/users/:id", async (req, res) => { //FINDING USER BY ID IN DB
//     // const id= Number(req.params.id);
//     // const user= users.find((user)=> user.id === id); 
//     const findUser= await User.findById(req.params.id);  //id is generated itself in every entry of user in database
//     return res.json(findUser); 
// });

// app.post("/api/users", async(req, res) => { //CREATING A USER IN DB
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

// app.delete("/api/users/:id", async (req, res) => { //DELETING A USER FROM DB
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({"status":"SUCCESS"});
// })

app.use("/api/users", userRouter);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));