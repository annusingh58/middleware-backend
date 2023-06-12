import Users from '../modals/user.js';
import encrypt from 'encryptjs';


export const register = async(req,res) =>{
    try{
        const {Username,Useremail,UserPassword,Userconfirmpassword,Userpin,Userpancard,Useraddress} = req.body;
        if(!Username) return res.send("Username is required");
        if(!Useremail) return res.send("Useremail is required");
        if(!UserPassword) return res.send("UserPassword is required");
        if(!Userconfirmpassword) return res.send("Userconfirmpassword is required");
        if(!Userpin) return res.send("Userpin is required");
        if(!Userpancard) return res.send("Userpancard is required");
        if(!Useraddress) return res.send("Useraddress is required");

            
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