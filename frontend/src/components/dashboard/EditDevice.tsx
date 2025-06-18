import React, { useEffect, useState } from "react";
import { DeviceCardProps, EditDeviceModalProps } from "./types";

const EditDeviceModal: React.FC<EditDeviceModalProps> = ({
  device,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formState, setFormState] = useState<DeviceCardProps | null>(null);
  const [originalState, setOriginalState] = useState<DeviceCardProps | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (device) {
      setFormState({ ...device });
      setOriginalState({ ...device });
      setIsEditing(false);
    }
  }, [device]);

  if (!isOpen || !formState) return null;

  const handleChange = <K extends keyof DeviceCardProps>(
    field: K,
    value: DeviceCardProps[K]
  ) => {
    setFormState((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  const handleCancel = () => {
    setFormState(originalState);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (formState) {
      onSave(formState);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-gray-600 text-2xl hover:text-gray-800 transition"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Device" : "Device Details"}
        </h2>
        <label className="block mb-4">
          <span className="font-semibold">Device Name</span>
          <input
            type="text"
            disabled={!isEditing}
            value={formState.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
          />
        </label>
        <label className="block mb-4">
          <span className="font-semibold">Device Type</span>
          <select
            disabled={!isEditing}
            value={formState.deviceType}
            onChange={(e) => handleChange("deviceType", e.target.value as DeviceCardProps["deviceType"])}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
          >
            {["Temperature", "Humidity", "Smoke", "Motion", "Infrared", "Pressure"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          <span className="font-semibold">File Type</span>
          <select
            disabled={!isEditing}
            value={formState.fileType}
            onChange={(e) => handleChange("fileType", e.target.value as DeviceCardProps["fileType"])}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
          >
            <option value="excel">EXCEL</option>
            <option value="csv">CSV</option>
          </select>
        </label>

        <div className="flex justify-end gap-4 mt-6">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded border cursor-pointer border-gray-400 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-slate-700 cursor-pointer text-white hover:bg-slate-800 transition"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex justify-between w-full">
              <button
                className="px-4 py-2 rounded bg-slate-700 cursor-pointer text-white hover:bg-slate-800 transition"
                onClick={() => console.log("Process Data Clicked")}
              >
                Process Data
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 rounded border cursor-pointer border-gray-400 hover:bg-gray-100 transition"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditDeviceModal;