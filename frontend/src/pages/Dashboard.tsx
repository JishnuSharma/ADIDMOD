import { useState } from "react";
import DeviceCard from "../components/dashboard/DeviceCard";
import DeviceModal from "../components/dashboard/DeviceModal";
import Headings from "../components/shared/Headings";
import SearchBar from "../components/dashboard/SearchBar";
import { deviceData } from "../data/devices";
import { Device } from "../types/device";

const Dashboard = () => {
    const [devices, setDevices] = useState<Device[]>(deviceData);
    const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (device: Device) => {
        setSelectedDevice(device);
        setIsModalOpen(true);
    };

    const handleAddClick = () => {
        setSelectedDevice(null); 
        setIsModalOpen(true);
    };

    const handleSave = (device: Device) => {
        setDevices((prevDevices) => {
            const exists = prevDevices.some(
                (d) => d.deviceId === device.deviceId
            );
            if (exists) {
                return prevDevices.map((d) =>
                    d.deviceId === device.deviceId ? device : d
                );
            } else {
                return [...prevDevices, device];
            }
        });
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-start items-center mt-6 px-10">
                <Headings title="DEVICE DASHBOARD" />
            </div>

            <div className="flex justify-between items-center w-[95%] mx-auto mt-6">
                <div className="text-2xl">
                    <b>Total Devices:</b> {devices.length}
                </div>
                <div className="flex gap-10 items-center">
                    <SearchBar />
                    <button
                        onClick={handleAddClick}
                        className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition duration-300 cursor-pointer"
                    >
                        Add New Device
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap w-[90%] mx-auto gap-5 mt-9">
                {devices.map((device) => (
                    <DeviceCard
                        key={device.deviceId}
                        device={device}
                        onClick={() => handleCardClick(device)}
                    />
                ))}
            </div>

            <DeviceModal
                isOpen={isModalOpen}
                onClose={() => {
                    setSelectedDevice(null);
                    setIsModalOpen(false);
                }}
                onSave={handleSave}
                device={selectedDevice ?? undefined}
            />
        </div>
    );
};

export default Dashboard;
