import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
const PORT = 3000;
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!!!"))
  .catch((err) => console.error("Database connection error:", err));

const app = express();  

// Middleware to parse JSON payloads and Routes
app.use(express.json());
app.use("/api/user" , userRoute)
app.use("/api/auth" , authRoute)

// Error handling
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
})


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})