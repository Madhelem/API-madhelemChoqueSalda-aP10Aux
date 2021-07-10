import { Schema, Document, model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
    fullname: string;
    username: string;
    email: string;
    nick: string;
    password: string;
    dateReg: Date;

    encryptPassword(password: string): any;
    matchPassword(password: string): any;
 
}

const userSchema = new Schema<IUser>({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nick: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateReg: {
        type: Date,
        default: Date.now(),
    },
});
  


//para cifrar la contraseña

userSchema.methods.encryptPassword = async (password: 
    string) => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt); 
};
    
    //para comparar la contraseña
userSchema.methods.matchPassword = async function 
(password: string) {
    return await bcrypt.compare(password, this.password); 
};

    
export default model<IUser>("User", userSchema);