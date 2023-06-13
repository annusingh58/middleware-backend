import encrypt from"encryptjs";

export const checkpin=async(req,res,next)=>{
    try{
        const {email,pin} =req.body;
        if(!email)return res.send("email is required in middleware");
        if(!pin) return res.send("pin is required in middleware");


        const response =await Users.find({email}).exec();
        if(!response.length) return res.send("User not found");
        
        var scretkey="pin";
        var decipher=encrypt.decrypt(response[0].pin,scretkey,256)
        
        
        if(decipher==pin){
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


















