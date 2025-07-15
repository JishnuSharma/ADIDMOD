import mongoose,{Document,Schema, Types} from "mongoose";
import { FileType } from "../utils/device.enums";

export interface IProcess extends Document {
    fileType: FileType;
    deviceId: Types.ObjectId;
    maximumValue: number;
    minimumValue: number;
    acceptablePercentage: number;
    filePath: string;
}

const processSchema = new Schema<IProcess>({
    fileType: {
        type: String,
        enum: Object.values(FileType),
        required: true,
    },
    deviceId: {
        type: Schema.Types.ObjectId,
        ref: "Device",
        required: true,
    },
    maximumValue: {
        type: Number,
        required: true,
    },
    minimumValue: {
        type: Number,
        required: true,
    },
    acceptablePercentage: {
        type: Number,
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    }
},{timestamps:true})

processSchema.set("toJSON", {
    transform: function (doc, ret) {
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
    }
});

const Process = mongoose.model<IProcess>('Process',processSchema);

export default Process;