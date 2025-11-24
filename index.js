const express= require("express");
const {logReqRes} = require('./middlewares');
const userRouter= require("./routes/user");
const {connectMongoDb}= require('./connection');
const app=express();
const PORT=8000;

//Connection to MONGOdb
connectMongoDb('mongodb://127.0.0.1:27017/my_db1').then(()=> {console.log("MongoDb Connected")});
//middlewares ---- putting the form data in the body below
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(logReqRes('log.txt'));

app.use("/api/users", userRouter);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));