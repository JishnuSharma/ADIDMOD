import { useState } from "react";
import DeviceCard, {
    DeviceCardProps,
} from "../components/dashboard/DeviceCard";
import EditDeviceModal from "../components/dashboard/DevicePopup";
import Headings from "../components/shared/Headings";
import SearchBar from "../components/dashboard/SearchBar";

const deviceData = [
    {
        name: "Temp Sensor A1",
        deviceId: "DEV-001",
        deviceType: "Temperature",
        fileType: "csv",
        date: new Date("2025-05-20"),
        time: new Date("2025-05-20T10:15:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Humidity Sensor X2",
        deviceId: "DEV-002",
        deviceType: "Humidity",
        fileType: "excel",
        date: new Date("2025-05-21"),
        time: new Date("2025-05-21T14:30:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Smoke Detector Z9",
        deviceId: "DEV-003",
        deviceType: "Smoke",
        fileType: "csv",
        date: new Date("2025-05-18"),
        time: new Date("2025-05-18T08:00:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Motion Tracker M5",
        deviceId: "DEV-004",
        deviceType: "Motion",
        fileType: "excel",
        date: new Date("2025-05-19"),
        time: new Date("2025-05-19T09:45:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Infrared Sensor T7",
        deviceId: "DEV-005",
        deviceType: "Infrared",
        fileType: "csv",
        date: new Date("2025-05-17"),
        time: new Date("2025-05-17T11:20:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Pressure Monitor B2",
        deviceId: "DEV-006",
        deviceType: "Pressure",
        fileType: "excel",
        date: new Date("2025-05-15"),
        time: new Date("2025-05-15T12:30:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Temp Sensor C3",
        deviceId: "DEV-007",
        deviceType: "Temperature",
        fileType: "csv",
        date: new Date("2025-05-14"),
        time: new Date("2025-05-14T13:00:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Humidity Sensor D4",
        deviceId: "DEV-008",
        deviceType: "Humidity",
        fileType: "excel",
        date: new Date("2025-05-13"),
        time: new Date("2025-05-13T15:45:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Smoke Detector E5",
        deviceId: "DEV-009",
        deviceType: "Smoke",
        fileType: "csv",
        date: new Date("2025-05-12"),
        time: new Date("2025-05-12T16:10:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
    {
        name: "Motion Tracker F6",
        deviceId: "DEV-010",
        deviceType: "Motion",
        fileType: "excel",
        date: new Date("2025-05-11"),
        time: new Date("2025-05-11T18:25:00"),
        imageUrl: "/images/device/humidity.jpg",
    },
] as const satisfies DeviceCardProps[];

const Dashboard = () => {
    const [devices, setDevices] = useState<DeviceCardProps[]>(deviceData);
    const [selectedDevice, setSelectedDevice] =
        useState<DeviceCardProps | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (device: DeviceCardProps) => {
        setSelectedDevice(device);
        setIsModalOpen(true);
    };

    const handleSave = (updated: DeviceCardProps) => {
        setDevices((prev) =>
            prev.map((d) => (d.deviceId === updated.deviceId ? updated : d))
        );
    };
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
                    <div className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition duration-400 cursor-pointer">
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
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
};

export default Dashboard;
