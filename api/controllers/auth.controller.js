import  User from "../models/user.model.js"
import bcrypt from "bcrypt"
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
    const {username , email, password} = req.body;

    if(!username || !email || !password || username === "" || email === "" || password === ""){
        next(errorHandler(400 , "All fields are required"))
    }

    try{

        // Hash the password
        const saltRounds = 8; // Number of salt rounds for hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        });
        await newUser.save();
        res.status(200).json({message : "Signup Successfully"})
    }catch(error){
        next(error)
    }
 
}

export const signin = (req,res) => {
    res.send("hello from auth controller ")
}

