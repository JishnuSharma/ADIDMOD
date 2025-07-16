import mongoose,{Document,Schema, Types} from "mongoose";
import { DeviceType, FileType } from "../utils/device.enums";
import User from "./user.model";

export interface IDevice extends Document {
    name: string;
    deviceType: DeviceType;
    fileType: FileType;
    deviceID: string;
    userId: Types.ObjectId;
}

const deviceSchema = new Schema<IDevice>({
    name:{
        type: String,
        required:  true,
    },
    deviceType:{
        type: String,
        enum: Object.values(DeviceType),
        required: true,
    },
    fileType:{
        type: String,
        enum: Object.values(FileType),
        required: true,
    },
    deviceID: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,

    }
},{timestamps:true})

deviceSchema.set("toJSON", {
    transform: function (doc, ret) {
        delete ret.__v;
        delete ret.updatedAt;
    }
});

const Device = mongoose.model<IDevice>('Device',deviceSchema);
export default Device;