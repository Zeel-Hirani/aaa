const mongoose = require("mongoose");

const DBconnect = async()=>{
   try{
       const abc = await mongoose.connect(process.env.MONGODB_URL)
       ;
       console.log( `DataBase SUCCESSFULLY${abc.connection.host}`);
    // console.log(`${abc.connection.host}db successfully`);
   }catch(error){
        console.log("DB error",error);
   }
}

module.exports = DBconnect;