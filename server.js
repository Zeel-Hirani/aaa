const express = require('express')
const app = express();
const path = require('path');

const { createServer } = require("node:http");
const connectDB = require("./config/dbconnect")
const server = createServer(app);
const dotenv = require("dotenv");
dotenv.config();

const UserRoutes = require("./routes/userRouter")
const MobileRoutes = require("./routes/mobileRouter")

app.use(express.json());
app.use("/api/",UserRoutes)
app.use("/api/",MobileRoutes)



connectDB();
app.get("/",(req,res)=>{
res.json("hhhhhhhhhh")
})
const PORT = process.env.PORT ;
server.listen(PORT, console.log("searver start"));