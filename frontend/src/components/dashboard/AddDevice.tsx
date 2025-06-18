import React, { useEffect, useState } from "react";
import { AddDeviceModalProps, AddDeviceProps } from "./types";

const AddDeviceModal: React.FC<AddDeviceModalProps> = ({
    isOpen,
    onClose,
    onSave,
}) => {
    const [formState, setFormState] = useState<AddDeviceProps | null>(null);

    useEffect(() => {
        if (isOpen) {
            setFormState(
                {
                    name: "",
                    deviceType: "Temperature",
                    fileType: "excel",
                }
            );
        }
    }, [isOpen]);

    if (!isOpen || !formState) return null;

    const handleChange = <K extends keyof AddDeviceProps>(
        field: K,
        value: AddDeviceProps[K]
    ) => {
        setFormState((prev) => (prev ? { ...prev, [field]: value } : null));
    };

    const handleCancel = () => {
        setFormState(null);
        onClose();
    };

    const handleSubmit = () => {
        if (formState) {
            onSave(formState);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-lg">
                <button
                    onClick={handleCancel}
                    className="absolute top-3 right-3 cursor-pointer text-gray-600 text-2xl hover:text-gray-800 transition"
                    aria-label="Close Modal"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4">Add Device</h2>

                <label className="block mb-4">
                    <span className="font-semibold">Device Name</span>
                    <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
                    />
                </label>

                <label className="block mb-4">
                    <span className="font-semibold">Device Type</span>
                    <select
                        value={formState.deviceType}
                        onChange={(e) =>
                            handleChange(
                                "deviceType",
                                e.target.value as AddDeviceProps["deviceType"]
                            )
                        }
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
                    >
                        {[
                            "Temperature",
                            "Humidity",
                            "Smoke",
                            "Motion",
                            "Infrared",
                            "Pressure",
                        ].map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="block mb-4">
                    <span className="font-semibold">File Type</span>
                    <select
                        value={formState.fileType}
                        onChange={(e) =>
                            handleChange(
                                "fileType",
                                e.target.value as AddDeviceProps["fileType"]
                            )
                        }
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
                    >
                        <option value="excel">EXCEL</option>
                        <option value="csv">CSV</option>
                    </select>
                </label>

                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 rounded border cursor-pointer border-gray-400 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded bg-slate-700 cursor-pointer text-white hover:bg-slate-800 transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddDeviceModal;
