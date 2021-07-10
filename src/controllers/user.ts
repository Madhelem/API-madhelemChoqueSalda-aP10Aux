import User, { IUser } from "../models/user";
import { Request, Response } from "express";
import Post, { IPost } from "../models/post";
import { createToken } from "../libs/serviceToken";
import Image, { IImage } from "../models/image";

/*import{transporter} from "../libs/nodemailer"*/
import nodemailer = require("nodemailer");
import image from "../models/image";
class UserControllers {
    public async index(req: Request, res: Response) {

        const users = await User.find({});    
        res.json({ message: "all users", users });  
       
    }

    public async profile(req: Request, res: Response) {
        const { id }= req.params;
        
        const findUser = await User.findById(id);
        res.json({message: "my profile", findUser });

    }
    
    public async SignUp(req: Request, res: Response) {
        const { fullname , username, email, nick, password,dateReg} = req.body;   
        const nUser = new User(req.body);
        nUser.password = await nUser.encryptPassword(password); 
        await nUser.save();
        res.json({ message: "user registered", nUser });
        res.status(101).end();
    }
    
    public async Login(req: Request, res: Response ){
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email });

        //si es usuario existe
        if (foundUser) {
            if(foundUser.matchPassword(password)){
                const token = createToken(foundUser.id);     
                return res.json({ messsage: "logedIn successfully", foundUser, token});
            }
            res.json({ messsage: "Invalid password"});        
        }
        res.json({ messsage: "Invalid email"});
    }


    public async Edit(req: Request, res: Response) {
        const { id } = req.params;            
        const { fullname , username, email, nick, password,dateReg } = req.body;
        const eUser = await User.findByIdAndUpdate(id, req.body);
        res.json({ message: "Usuario actualizado" });
    
    }
    public async sendEmail(req: Request, res: Response) {
      
        
        console.log("primera fase");
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 25,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'seminariodesistemas.99@gmail.com', // generated ethereal user
              pass: '2021', // se modifico por seguridad
            },
            tls: {
                rejectUnauthorized: false},
          });
        
          /*transporter.verify().then(()=>{
              console.log('Ready for send emails ');
          });*/
        console.log("prueba2");

           //console.log(req.file);
        
        let mivariable = '<img src="https://i.pinimg.com/originals/e8/ba/8d/e8ba8d6419a12d8089568ca00ffcd170.jpg"/>'
        let info = await transporter.sendMail({
            from: '"Madhelem Choque Saldaña  😎🤓" <seminariodesistemas.99@gmail.com>', // sender address
            to:'logatsudesu@gmail.com', // list of receivers
            subject: "This is my test for the assignmen ✔", // Subject line
            text:"msknksdnvjsnvsdnksdksadksakakas", // plain text body
            html: mivariable, // html body
          });
          console.log("message send", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          res.json({message:"correo enviado"});
    
    }
    public async Delete(req: Request, res: Response) {
        const { id } = req.params;
        const dUser = await User.findByIdAndDelete(id);
        res.json({ message: "Usuario eliminado" });
    }
    
}
export const userControllers = new UserControllers ();
    