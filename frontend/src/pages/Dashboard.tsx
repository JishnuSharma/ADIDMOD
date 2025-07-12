import { useEffect, useState } from "react";
import { getDevices } from "../api/device.api";
import { Device } from "../types/device";

import DeviceCard from "../components/dashboard/DeviceCard";
import DeviceModal from "../components/dashboard/DeviceModal";
import Headings from "../components/shared/Headings";
import SearchBar from "../components/dashboard/SearchBar";
import { useDebounce } from "../hooks/useDebounce";

const Dashboard = () => {
    const [devices, setDevices] = useState<Device[]>([]);
    const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedQuery = useDebounce(searchQuery, 300);

    const loadDevices = async (query?: string) => {
        const data = await getDevices(query);
        setDevices(data);
    };

    useEffect(() => {
        loadDevices(debouncedQuery);
    }, [debouncedQuery]);

    const openModal = (device?: Device) => {
        setSelectedDevice(device ?? null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedDevice(null);
        setIsModalOpen(false);
    };

    const handleDeviceAdded = async () => {
        await loadDevices();
        closeModal();
    };

    return (
        <div>
            <div className="flex justify-start items-center mt-6 px-10">
                <Headings title="DEVICE DASHBOARD" />
            </div>

            <div className="flex justify-between items-center w-[95%] mx-auto mt-6">
                <div className="text-2xl font-semibold">
                    Total Devices: {devices.length}
                </div>
                <div className="flex gap-10 items-center">
                    <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    <button
                        onClick={() => openModal()}
                        className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition duration-300"
                    >
                        Add New Device
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap w-[90%] mx-auto gap-5 mt-9">
                {devices.length > 0 ? (
                    devices.map((device) => (
                        <DeviceCard
                            key={device.deviceID}
                            device={device}
                            onClick={() => openModal(device)}
                        />
                    ))
                ) : (
                    <div className="w-full text-xl text-center py-[200px]">No Devices Found</div>
                )}
            </div>

            <DeviceModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onDeviceAdded={handleDeviceAdded}
                device={selectedDevice ?? undefined}
            />
        </div>
    );
};

export default Dashboard;
