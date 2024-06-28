export const sendMessage =async(req,res)=>{
    console.log("Message send",req.params.id);

    try{

    }catch(error){
        console.log("Error in SendMessage controller",error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}