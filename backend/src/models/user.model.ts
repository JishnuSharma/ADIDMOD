import mongoose,{Document,Schema} from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profession?: string;
    phone?:string;
    location?:string;
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
    },
    phone: {
        type: String,
    },
    location: {
        type: String,
    }
},{timestamps: true});

userSchema.set("toJSON", {
    transform: function (doc, ret) {
        delete ret.__v;
        delete ret.createdAt;
        delete ret.password;
        delete ret.updatedAt;
    }
});

const User = mongoose.model<IUser>('User',userSchema);
export default User;
