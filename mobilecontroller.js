const Mobile = require("../models/mobiledata")


const createMobile = async(req,res)=>{
    const {name,price,color} = req.body
    try{
    const anb = await Mobile.create({name,price,color})
    return  res.status(201).json({
        anb})
    }catch(error){
        res.status(400).send(error);
    }
}

// const updateMobile = async(req,res)=>{

// }
const updateMobile = async (req, res) => {
    const { id } = req.params;
    const { name, price, color } = req.body;
  
    try {
      const updatedMobile = await Mobile.findByIdAndUpdate(
        id,
        { name, price, color },
        { new: true, runValidators: true }
      );
  
      if (!updatedMobile) {
        return res.status(404).send('Mobile not found');
      }
  
      return res.status(200).json({
        updatedMobile
      });
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
//   module.exports = {
//     createMobile,
//     updateMobile
//   };
  
module.exports = {createMobile,updateMobile}