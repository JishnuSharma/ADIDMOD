import { DeviceTypes, FileTypes } from "../../types/enums";

export interface DeviceCardProps {
    name: string;
    deviceId: string;
    fileType: FileTypes;
    deviceType: DeviceTypes;
    date: Date;
    time: Date;
    imageUrl?: string;
    onClick?: () => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({
    name,
    deviceId,
    deviceType,
    fileType,
    date,
    time,
    imageUrl,
    onClick, // ✅ destructured here
}) => {
    return (
        <div
            onClick={onClick}
            className="w-80 bg-white shadow-md rounded-2xl hover:scale-105 transform transition duration-300 cursor-pointer overflow-hidden border border-gray-200"
        >
            <div>
                <img
                    className="w-full h-44 object-cover"
                    src={imageUrl}
                    alt={deviceId}
                />
            </div>
            <div className="p-4 flex flex-col gap-3 text-gray-800">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-md font-medium">
                        {deviceId}
                    </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="bg-purple-50 px-2 py-1 rounded-full">
                        {deviceType}
                    </span>
                    <span className="bg-purple-50 px-2 py-1 rounded-full">
                        {fileType.toUpperCase()}
                    </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>{date.toLocaleDateString()}</span>
                    <span>
                        {time.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DeviceCard;
