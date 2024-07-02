import { useState } from "react";
import { userAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
    const {setAuth} = userAuthContext();
  const logout = async () => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if(data.error){
          throw new Error(data.error)
      }

      localStorage.removeItem("chat-user")
      setAuth(null)
    } catch (error) {
        toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  return {loading,logout}
};

export default useLogout;