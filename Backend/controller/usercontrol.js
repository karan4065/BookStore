import User from "../model/user.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (user) {
        return res.status(400).json({ message: "User already exists" });  
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const createdUser = new User({
        fullname,
        email,
        password: hashedPassword,
      });
  
      await createdUser.save();
      res.status(201).json({
        message: "User created successfully",
        user: {
          _id: createdUser._id,
          fullname: createdUser.fullname,
          email: createdUser.email,
        },
      });
    } catch (error) {
      console.log("error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!user || !passwordMatch){
          return res.status(400).json({message: "Invalid Username or Password"});
        }else{
          res.status(201).json({message:"Login Successful",
                user:{
                _id:user._id,
                email:user.email,
                fullname:user.fullname,
            },
            });
        }
    } catch (error) {
        console.error(error);
    }
}