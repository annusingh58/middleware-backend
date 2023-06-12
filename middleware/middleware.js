import { captureRejections } from "stream";

export const checkpin=async(req,res,next)=>{
    try{
        const {userId,pin} =req.body;
        if(!userId)return res.send("UserId is required in middleware");
        if(!pin) return res.send("pin is required in middleware");


        const response =await Users.find({userId}).exec();
        if(user.pin==current.pin){
            next()
        }
        else{
            return req.send("pin not matched");
        }

    }


    catch(error){
        res.send(error)
    }
}













