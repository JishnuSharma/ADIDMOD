import { useState, useEffect } from "react";
import { Device, DeviceType, FileType } from "../../types/device";
import { DeviceTypes, FileTypes } from "../../types/device";

type DeviceModalProps = {
    device?: Device;
    onClose: () => void;
    isOpen: boolean;
    onSave: (device: Device) => void;
};

const DeviceModal = ({ device, onClose, isOpen, onSave }: DeviceModalProps) => {
    const [formData, setFormData] = useState<Device>({
        deviceId: "",
        name: "",
        deviceType: "TEMPERATURE" as DeviceType,
        fileType: "excel" as FileType,
        date: new Date(),
        time: new Date(),
    });

    useEffect(() => {
        if (device) {
            setFormData(device);
        } else {
            setFormData({
                deviceId: "",
                name: "",
                deviceType: "TEMPERATURE" as DeviceType,
                fileType: "excel" as FileType,
                date: new Date(),
                time: new Date(),
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

    const handleSubmit = () => {
        if (!formData.name || !formData.deviceType || !formData.fileType) return;

        const finalDevice: Device = {
            ...formData,
            deviceId: formData.deviceId || crypto.randomUUID(),
            date: device?.date || new Date(),
            time: device?.time || new Date(),
        };

        onSave(finalDevice);
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

                <div className="mt-6 text-right">
                    <button
                        onClick={handleSubmit}
                        className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition duration-300"
                    >
                        {isEdit ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeviceModal;
