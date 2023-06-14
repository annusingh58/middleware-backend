import encrypt from "encryptjs";
import Users from '../modals/user.js'
export const checkpin=async(req,res,next)=>{
    try{
        const {email,pin} =req.body;
        if(!email)return res.send("email is required in middleware");
        if(!pin) return res.send("pin is required in middleware");


        const response =await Users.find({email}).exec();
                // console.log(response)

        if(!response.length) return res.send("User not found");
        
        var scretkey="kundu";
        var decipher=encrypt.decrypt(response[0].pin,scretkey,256);
        console.log(decipher,"decipher ");
        
        if(decipher===pin){
            next();
        }
        else{
            return res.send("pin not matched");
        }

    }
    catch(error){
        res.send(error)
    }
}


















