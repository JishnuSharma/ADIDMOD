import { useState, useEffect } from "react";
import { analyzeData, setProcessedData } from "../../api/processed.api";
import { IProcess } from "../../types/process";
import { toast } from "react-toastify";
import { IProcessedResult } from "./ProcessedResults";

type ProcessingFormProps = {
    deviceId: string;
    previousData: null | IProcess;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setProcessedResults: React.Dispatch<React.SetStateAction<IProcessedResult>>;
};

const ProcessingForm = ({
    deviceId,
    previousData,
    setIsLoading,
    setProcessedResults,
}: ProcessingFormProps) => {
    const [formData, setFormData] = useState({
        deviceFile: null as File | null,
        dataType: "boolean",
        maximumValue: 0,
        minimumValue: 0,
        acceptablePercentage: 0,
        deviceId: deviceId,
    });

    useEffect(() => {
        if (previousData) {
            setFormData((prev) => ({
                ...prev,
                dataType: previousData.dataType || "boolean",
                maximumValue: previousData.maximumValue ?? "",
                minimumValue: previousData.minimumValue ?? "",
                acceptablePercentage: previousData.acceptablePercentage ?? "",
                deviceId: previousData.deviceId || deviceId,
            }));
        }
    }, [previousData, deviceId]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]:
                type === "number" ? (value === "" ? "" : Number(value)) : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, deviceFile: file }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !formData.deviceFile ||
            !formData.acceptablePercentage ||
            !formData.dataType ||
            !formData.deviceId ||
            !formData.minimumValue ||
            !formData.maximumValue
        ){
            toast.error("All fields are required to start the analysis.")
            return;
        }

        setIsLoading(true);

        const {
            deviceFile,
            minimumValue,
            maximumValue,
            acceptablePercentage,
            dataType,
            deviceId,
        } = formData;

        const numericMin = Number(minimumValue);
        const numericMax = Number(maximumValue);
        const numericAccept = Number(acceptablePercentage);

        try {
            await setProcessedData({
                filePath: `/uploads/${deviceFile.name}`,
                dataType,
                maxValue: numericMax,
                minValue: numericMin,
                acceptablePercentage: numericAccept,
                deviceId,
            });

            const res = await analyzeData({
                deviceFile,
                minimumValue: numericMin,
                maximumValue: numericMax,
                acceptablePercentage: numericAccept,
                dataType,
            });

            if (!res.success) throw new Error("Analysis failed");

            setProcessedResults(res.data);
            toast.success("Data analysis completed successfully!");
        } catch (err) {
            console.error("Error:", err);
            toast.error("Something went wrong! Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl w-full p-4 space-y-6"
            >
                <h2 className="text-xl font-semibold text-gray-800">
                    Data Processing Configuration
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                        <label
                            htmlFor="deviceFile"
                            className="text-sm font-medium text-gray-700 mb-1"
                        >
                            Upload Device File
                        </label>
                        <input
                            type="file"
                            id="deviceFile"
                            onChange={handleFileChange}
                            className="w-full text-sm text-gray-700 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 focus:border-slate-700 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="dataType"
                            className="text-sm font-medium text-gray-700 mb-1"
                        >
                            Select Data Type
                        </label>
                        <select
                            id="dataType"
                            value={formData.dataType}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
                        >
                            <option value="boolean">Boolean</option>
                            <option value="numeric">Numeric</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="maximumValue"
                            className="text-sm font-medium text-gray-700 mb-1"
                        >
                            Maximum Value
                        </label>
                        <input
                            type="number"
                            id="maximumValue"
                            value={formData.maximumValue}
                            onChange={handleChange}
                            placeholder="Enter Maximum Value"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="minimumValue"
                            className="text-sm font-medium text-gray-700 mb-1"
                        >
                            Minimum Value
                        </label>
                        <input
                            type="number"
                            id="minimumValue"
                            value={formData.minimumValue}
                            onChange={handleChange}
                            placeholder="Enter Minimum Value"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="acceptablePercentage"
                            className="text-sm font-medium text-gray-700 mb-1"
                        >
                            Acceptable Percentage
                        </label>
                        <input
                            type="number"
                            id="acceptablePercentage"
                            value={formData.acceptablePercentage}
                            onChange={handleChange}
                            placeholder="Enter Acceptable Percentage"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="w-full bg-slate-700 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200"
                        >
                            Process
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProcessingForm;
