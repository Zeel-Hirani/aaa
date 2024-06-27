const User = require('../models/userdata')
const bcrypt = require('bcrypt');
const generateToken = require("../config/generateToken")
const Signup = async(req,res)=>{
    const {name,email,password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Please provide all the required fields" });
      }
    try {
        
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
          });
          return  res.status(201).json({
            newUser})
      } catch (error) {
        res.status(400).send(error);
      }
}

const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user1 = await User.findOne({email:email});
        if(!user1){
            return res.status(404).json({ message: "user not found please register" });

        }
        const matchPassword = await bcrypt.compare(password, user1.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid password" });
          }

        //   res.status(201).json({ message: "Login sucessfully",matchPassword });
          let token = await generateToken(user1._id);
          res.status(201).json({ message: "Login sucessfully",token,user1: {
            id: user1._id,
            name: user1.name,
            email: user1.email
          } });
          console.log(token);
        // await user1.save();
        // res.status(201).send(user1,"Login sucessfully");
    //    return res.status(200).json({ message: "Login sucessfully"},user1);

      } catch (error) {
        res.status(400).send(error);
      }
}
module.exports = {Signup,Login}