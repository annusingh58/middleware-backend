import Users from '../modals/user.js';
import encrypt from 'encryptjs';


export const register = async(req,res) =>{
    try{
        const {Username,Useremail,UserPassword,Userconfirmpassword,Userpin,Userpancard,Useraddress,Usernumber} = req.body;
        if(!Username) return res.send("Username is required");
        if(!Useremail) return res.send("Useremail is required");
        if(!UserPassword) return res.send("UserPassword is required");
        if(!Userconfirmpassword) return res.send("Userconfirmpassword is required");
        if(!Userpin) return res.send("Userpin is required");
        if(!Userpancard) return res.send("Userpancard is required");
        if(!Useraddress) return res.send("Useraddress is required");
        if(!Usernumber) return res.send("Usernumber is required");


            
        if(UserPassword.length<=8){
            return res.send("user password should be 8 digit")
        }

        if(Userconfirmpassword.length<=8){
            return res.send("Userconfirmpassword should be 8 digit")
 
        }
        if(UserPassword!=Userconfirmpassword){
            return res.send(" password and confirm password not match")

        }


        const response =await Users.find ({email:Users}).exec();
        if(response.length){
            return res.send("email exit");
        }

        var secretkey ="asmman";
        var plaintext=UserPassword;
        var cipherText =encrypt.encrypt(plaintext,secretkey,256);
        
        var secretkeypin="kundu";
        var plaintextpin=Userpin;
        var cipherTextpin=encrypt.encrypt(plaintextpin,secretkeypin,256);


        const user= new Users({
            name:Username,
            email :Useremail,
            pin:Userpin,
            address:Useraddress,
            pancard:Userpancard,
            number:Usernumber,
            password:cipherText,
            pin:cipherTextpin
        });
        await user.save();
        return res.send("registeration successfully");

    }
catch (error){
    res.send(error);
}


}


export const changename =async(req,res)=>{
    try{

        const{_id,Username} =req.body;
        if (!_id) return res.send("user id is required");
        if(!Username)return res.send("user name is required");

         const data=await Users.findOneAndUpdate({_id},{name:Username}).exec();

         await data .save();
         return res.send("name updated");

    }
    catch(error){
        return res.send(error);
    }
}




export const changenumber =async(req,res)=>{
    try{

        const{_id,Usernumber} =req.body;
        if (!_id) return res.send("user id is required");
        if(!Usernumber)return res.send("user number is required");

         const data=await Users.findOneAndUpdate({_id},{number:Usernumber}).exec();

         await data .save();
         return res.send("number update");

    }
    catch(error){
        return res.send(error);
    }
}

 
export const changeaddress =async(req,res)=>{
    try{
        const {_id,Useraddress}=req.body;
        if(!_id) return res.send("user id is required");
        if(!Useraddress) return res.send("user address is required");
         const data=await Users.findOneAndUpdate({_id},{address:Useraddress}).exec();

         await data.save();
         return res.send("updated new address")


    }
    catch(error){
        return res.send(error);
    }
}

export const changepancard =async(req,res)=>{
    try{

        const{_id,Userpancard} =req.body;
        if (!_id) return res.send("user id is required");
        if(!Userpancard)return res.send("Userpancard is required");

         const data=await Users.findOneAndUpdate({_id},{pancard:Userpancard}).exec();

         await data .save();
         return res.send("pancard update");

    }
    catch(error){
        return res.send(error);
    }
}
