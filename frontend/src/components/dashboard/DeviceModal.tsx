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
        fileType: FileTypes.EXCEL,
    });

    const isEdit = Boolean(device);

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
            toast.error("Please fill all fields correctly.");
            return;
        }

        try {
            if (!isEdit) {
                await addDevice({
                    name: formData.name,
                    deviceType: formData.deviceType,
                    fileType: formData.fileType,
                });
                toast.success("Device added successfully!");
            } else if (device?.deviceID) {
                await updateDevice({
                    name: formData.name,
                    deviceType: formData.deviceType,
                    fileType: formData.fileType,
                    deviceId: device._id,
                });
                toast.success("Device updated successfully!");
            } else {
                toast.error("Invalid device ID. Try again.");
            }

            setFormData({
                name: "",
                deviceType: DeviceTypes.TEMPERATURE,
                fileType: FileTypes.EXCEL,
            });

            onDeviceAdded();
            onClose();
        } catch {
            toast.error("Something went wrong. Try again later.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl relative animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl font-bold text-gray-400 hover:text-gray-700"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    {isEdit ? "Edit Device" : "Add New Device"}
                </h2>

                <div className="space-y-4">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Device Name"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700"
                    />

                    <select
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700"
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
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700"
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

                <div className="mt-6 flex justify-between">
                    {isEdit && (
                        <button
                            onClick={() =>
                                navigate(`/process-data?device=${device?._id}`)
                            }
                            className="rounded-lg border-2 border-slate-700 px-6 py-2 text-slate-900 hover:bg-slate-700 hover:text-white transition duration-300"
                        >
                            Process Data
                        </button>
                    )}

                    <button
                        onClick={handleSubmit}
                        className="ml-auto rounded-lg bg-slate-900 px-6 py-2 text-white hover:bg-slate-800 transition duration-300"
                    >
                        {isEdit ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeviceModal;
