import {useState} from "react";
import toast from "react-hot-toast";
import { userAuthContext } from "../context/AuthContext";


const useSignup = () => {
    const [loading ,setLoading] = useState(false);
    const {setAuth} = userAuthContext()

    const signup = async({fullname,username,password,confirmPassword,gender})=>{
        const success = handleInputError({fullname,username,password,confirmPassword,gender});

        if(!success){
            return ;
        }


        try{
            const res = await fetch("/api/auth/signup",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullname,username,password,confirmPassword,gender})
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            //localstorage

            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuth(data)

        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading,signup}
};

export default useSignup;

function handleInputError({fullname,username,password,confirmPassword,gender}){
    if(!fullname || !username || !password || !confirmPassword ||!gender){
      toast.error("Please fill all the fields");
      return false;
    }

    if(password !== confirmPassword){
        toast.error("Password and Confirm Password does not match");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters long");
        return false;
    }
    return true;
}