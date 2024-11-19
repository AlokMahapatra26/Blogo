const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv')
const PORT = 3000;

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!!!"))
  .catch((err) => console.error("Database connection error:", err));


app.get("/" , (req,res)=>{
    res.status(200).json({
        "message" : "server is up and running"
    })
})

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})