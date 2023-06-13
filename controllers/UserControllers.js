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


export const changenumber =async(req,res)=>{
    try{

        const{_id,Usernumber} =req.body;
        if (!_id,Usernumber) return res.send("-id is required");
        if(!Usernumber)return res.send("number is required");
        const response = await Usernumber.find({_id}).exec();

        console.log(response)

        if(!response.length) return res.send("user not found here")
         const update=await Users.findOneAndUpdate({_id},{Usernumber}).exec();

         await update .save();
         return res.send("number updates");

    }
    catch(error){
        return res.send(error);
    }
}