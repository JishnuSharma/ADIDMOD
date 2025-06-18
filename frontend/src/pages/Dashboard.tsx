import { useState } from "react";
import DeviceCard from "../components/dashboard/DeviceCard";
import EditDeviceModal from "../components/dashboard/EditDevice";
import Headings from "../components/shared/Headings";
import SearchBar from "../components/dashboard/SearchBar";
import AddDeviceModal from "../components/dashboard/AddDevice";
import { DeviceCardProps } from "../components/dashboard/types";
import { deviceData } from "../data/devices";

const Dashboard = () => {
    const [devices, setDevices] = useState<DeviceCardProps[]>(deviceData);
    const [selectedDevice, setSelectedDevice] =
        useState<DeviceCardProps | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleCardClick = (device: DeviceCardProps) => {
        setSelectedDevice(device);
        setIsEditModalOpen(true);
    };

    const handleDeviceUpdate = (updated: DeviceCardProps) => {
        setDevices((prev) =>
            prev.map((d) => (d.deviceId === updated.deviceId ? updated : d))
        );
    };

    const handleAddDevice = (data:any) => {
        console.log(data);
    }

    return (
        <div>
            <div className="flex justify-start items-center mt-6 px-10">
                <Headings title="DEVICE DASHBOARD" />
            </div>
            <div className="flex justify-between items-center w-[95%] mx-auto mt-6">
                <div className="text-2xl">
                    <b>Total Devices:</b> 29
                </div>
                <div className="flex gap-10 items-center">
                    <div>
                        <SearchBar/>
                    </div>
                    <div onClick={() => setIsAddModalOpen(true)} className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition duration-400 cursor-pointer">
                        Add New Device
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-[90%] mx-auto gap-5 mt-9">
                {devices.map((device) => (
                    <DeviceCard
                        key={device.deviceId}
                        {...device}
                        onClick={() => handleCardClick(device)}
                    />
                ))}
            </div>
            <EditDeviceModal
                device={selectedDevice}
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleDeviceUpdate}
            />
            <AddDeviceModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSave={handleAddDevice}
            />
        </div>
    );
};

export default Dashboard;
