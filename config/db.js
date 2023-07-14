const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology:true});
    console.log(`MongoDB connected to: ${conn.connection.host}`)
    
    return
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
