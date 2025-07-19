import { Device } from "../../types/device";

export type DeviceCardProps = {
    device: Device;
    onClick: () => void;
};

const DeviceCard = ({ device, onClick }: DeviceCardProps) => {
    const createdAt = new Date(device.createdAt);

    return (
        <div
            onClick={onClick}
            className="w-80 bg-white shadow-sm rounded-2xl hover:shadow-lg hover:-translate-y-1 transform transition duration-300 cursor-pointer border border-gray-200 overflow-hidden"
        >
            <div className="relative">
                <img
                    className="w-full h-44 object-cover"
                    src={"/images/device/humidity.jpg"}
                    alt={device.deviceID}
                />
                <div className="absolute top-3 right-3 bg-white/80 text-xs text-slate-700 px-2 py-0.5 rounded-md font-medium backdrop-blur">
                    {device.deviceID}
                </div>
            </div>

            <div className="p-4 flex flex-col gap-3 text-slate-800">
                <h2 className="text-lg font-semibold truncate">
                    {device.name}
                </h2>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="px-2 py-1 bg-slate-100 rounded-full">
                        {device.deviceType}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 rounded-full">
                        {device.fileType.toUpperCase()}
                    </span>
                </div>

                <div className="text-xs text-slate-500 flex justify-between">
                    <span>{createdAt.toLocaleDateString()}</span>
                    <span>
                        {createdAt.toLocaleTimeString([], {
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
