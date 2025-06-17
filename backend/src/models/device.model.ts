import mongoose,{Document,Schema} from "mongoose";
import { DeviceType, FileType } from "../utils/device.enums";

export interface IDevice extends Document {
    name: string;
    deviceType: DeviceType;
    fileType: FileType;
    deviceID: string;
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
    }
},{timestamps:true})

const Device = mongoose.model<IDevice>('Device',deviceSchema);
export default Device;