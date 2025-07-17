import mongoose,{Document,Schema, Types} from "mongoose";
import { FileType } from "../utils/device.enums";

export interface IProcess extends Document {
    fileType: FileType;
    deviceId: Types.ObjectId;
    userId: Types.ObjectId;
    maximumValue: number;
    minimumValue: number;
    acceptablePercentage: number;
    filePath: string;
    totalReadings?: number;
    totalAnomalies?: number;
    percentageAnomalies?: number;
    deviceStatus?: string;
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
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
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
    },
    totalReadings: {
        type: Number,
    },
    totalAnomalies: {
        type: Number,
    },
    percentageAnomalies: {
        type: Number,
    },
    deviceStatus: {
        type: String,
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