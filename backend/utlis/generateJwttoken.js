import jwt from "jsonwebtoken";

const generateTokeAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    })
    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict" ,//csrf attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development" 
    })
}

export default generateTokeAndSetCookie;