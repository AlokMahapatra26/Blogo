import  User from "../models/user.model.js"
import bcrypt from "bcrypt"

export const signup = async (req,res) => {
    const {username , email, password} = req.body;

    try{

        // Checking if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists!' });
        }

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
    }catch(err){
        console.log(err)
        return res.status(500).json({message: err.message})
    }
 
}

export const signin = (req,res) => {
    res.send("hello from auth controller ")
}

