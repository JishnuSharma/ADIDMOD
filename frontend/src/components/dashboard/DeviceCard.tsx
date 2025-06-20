import { Device } from "../../types/device";

export type DeviceCardProps = {
    device: Device;
    onClick: () => void;
};

const DeviceCard = ({ device, onClick }: DeviceCardProps) => {
    return (
        <div
            onClick={onClick}
            className="w-80 bg-white shadow-md rounded-2xl hover:scale-105 transform transition duration-300 cursor-pointer overflow-hidden border border-gray-200"
        >
            <div>
                <img
                    className="w-full h-44 object-cover"
                    src={'/images/device/humidity.jpg'}
                    alt={device.deviceId}
                />
            </div>
            <div className="p-4 flex flex-col gap-3 text-gray-800">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{device.name}</h2>
                    <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-md font-medium">
                        {device.deviceId}
                    </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="bg-slate-50 px-2 py-1 rounded-full">
                        {device.deviceType}
                    </span>
                    <span className="bg-slate-50 px-2 py-1 rounded-full">
                        {device.fileType.toUpperCase()}
                    </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>{device.date.toLocaleDateString()}</span>
                    <span>
                        {device.time.toLocaleTimeString([], {
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
