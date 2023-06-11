export const checkEmail = (req ,res,next) =>{
    try{
        const{email}=req.body;
        if(!email) return res.send("email is required in middleware");
        next();

    }
    catch(error){
        res.send(error);
    }
 }


 export const checkname =(req ,res,next)=>{
    try{
        

    }
    catch(error){
        res.send(error);
    }
 }