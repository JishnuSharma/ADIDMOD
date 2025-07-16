import { useState, useEffect } from "react";
import { Device } from "../../types/device";
import { DeviceTypes, FileTypes } from "../../types/device";
import { useUser } from "../../context/UserContext";
import { addDevice, updateDevice } from "../../api/device.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type DeviceModalProps = {
    device?: Device;
    onClose: () => void;
    isOpen: boolean;
    onDeviceAdded: () => void;
};

const DeviceModal = ({
    device,
    onClose,
    isOpen,
    onDeviceAdded,
}: DeviceModalProps) => {
    const { user } = useUser();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Partial<Device>>({
        name: "",
        deviceType: DeviceTypes.TEMPERATURE,
        fileType: "excel",
    });

    useEffect(() => {
        if (device) {
            setFormData(device);
        } else {
            setFormData({
                name: "",
                deviceType: DeviceTypes.TEMPERATURE,
                fileType: FileTypes.EXCEL,
            });
        }
    }, [device]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (
            !formData.name ||
            !formData.deviceType ||
            !formData.fileType ||
            !user
        ) {
            return;
        }

        if (!isEdit) {
            const payload = {
                name: formData.name,
                deviceType: formData.deviceType,
                fileType: formData.fileType,
            };
            await addDevice(payload);
            toast.success("Device added successfully!");
        } else if (device?.deviceID) {
            const payload = {
                name: formData.name,
                deviceType: formData.deviceType,
                fileType: formData.fileType,
                deviceId: device._id,
            };
            await updateDevice(payload);
            toast.success("Device updated successfully");
        } else {
            toast.error("Error updating device! Try again later");
        }

        setFormData({
            name: "",
            deviceType: DeviceTypes.TEMPERATURE,
            fileType: FileTypes.EXCEL,
        });

        onDeviceAdded();
        onClose();
    };

    if (!isOpen) return null;

    const isEdit = Boolean(device);

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold cursor-pointer"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    {isEdit ? "Edit Device" : "Add New Device"}
                </h2>

                <div className="space-y-4">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Device Name"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                    />

                    <select
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                    >
                        <option disabled value="">
                            Select Device Type
                        </option>
                        {Object.values(DeviceTypes).map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>

                    <select
                        name="fileType"
                        value={formData.fileType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                    >
                        <option disabled value="">
                            Select File Type
                        </option>
                        {Object.values(FileTypes).map((type) => (
                            <option key={type} value={type}>
                                {type.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-6 text-right flex justify-between">
                    {isEdit ? (<button onClick={() => navigate(`/process-data?device=${device?._id}`)} className="px-6 py-2 border-2 text-slate-900 border-slate-600 rounded-lg cursor-pointer hover:bg-slate-700 hover:text-white duration-300">
                        Process Data 
                    </button>) : <></>}
                    <button
                        onClick={handleSubmit}
                        className="bg-slate-900 ml-auto text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition duration-300 cursor-pointer"
                    >
                        {isEdit ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeviceModal;
