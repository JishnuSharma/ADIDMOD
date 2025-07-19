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
        <div className="min-h-screen px-5 py-10 sm:px-12">
            <div className="max-w-[90%] mx-auto">
                <Headings title="Device Dashboard" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
                    <div className="text-lg font-medium text-gray-800">
                        Total Devices:{" "}
                        <span className="font-semibold text-slate-900">
                            {devices.length}
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                        />
                        <button
                            onClick={() => openModal()}
                            className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition w-full sm:w-auto"
                        >
                            + Add New Device
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                    {devices.length > 0 ? (
                        devices.map((device) => (
                            <DeviceCard
                                key={device.deviceID}
                                device={device}
                                onClick={() => openModal(device)}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-32 text-lg text-gray-500">
                            No Devices Found
                        </div>
                    )}
                </div>
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
