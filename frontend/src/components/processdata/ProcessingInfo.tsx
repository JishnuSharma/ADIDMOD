import React from "react";

interface ProcessingInfoProps {
    isVisible: boolean;
    onClose: () => void;
}

const ProcessingInfo: React.FC<ProcessingInfoProps> = ({
    isVisible,
    onClose,
}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-1/2 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-3xl text-gray-500 hover:text-red-600 cursor-pointer"
                >
                    &times;
                </button>
                <h2 className="text-[24px] font-semibold text-purple-800 mb-4">
                    Processing Instructions
                </h2>
                <div className="max-h-[500px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-all-scroll">
                    <div>
                        <div className="w-full text-center text-[18px] text-purple-900">
                            Specifications to keep in mind
                        </div>
                        <div className="mt-5">
                            <div>
                              {"1) "}Format of data to be in the Excel/CSV File:
                            </div>
                            <table className="table-auto border w-full mt-4 text-sm border-gray-400">
                                <tbody>
                                    <tr className="border-b border-gray-300 font-semibold">
                                        <td className="px-4 py-2">Row No.</td>
                                        <td className="py-4">
                                            Time Stamp of Readings
                                        </td>
                                        <td>
                                            Values of Data Collected By Device
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-4">1</td>
                                        <td className="px-1 py-2">
                                            14-06-2025 10:00
                                        </td>
                                        <td>22.8</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-4">2</td>
                                        <td className="px-1 py-2">
                                            14-06-2025 10:15
                                        </td>
                                        <td>23.1</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-4">3</td>
                                        <td className="px-1 py-2">
                                            14-06-2025 10:30
                                        </td>
                                        <td>23.6</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-4">4</td>
                                        <td className="px-1 py-2">
                                            14-06-2025 10:45
                                        </td>
                                        <td>23.9</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-4">5</td>
                                        <td className="px-1 py-2">
                                            14-06-2025 11:00
                                        </td>
                                        <td>24.1</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-4">6</td>
                                        <td className="px-1 py-2">
                                            14-06-2025 11:15
                                        </td>
                                        <td>24.3</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-4">7</td>
                                        <td className="px-1 py-2">
                                            14-06-2025 11:30
                                        </td>
                                        <td>24.0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4">
                          {"2) "}The file format should be either <b>.csv</b> or <b>.xlsx</b>.
                        </div>
                        <div className="mt-4">
                          {"3) "}Correctly specify the format in which the data is collected by the IOT devices which can either be in Boolean Values or Numerical Values.
                        </div>
                        <div className="mt-4">
                          {"4) "}If the size of the data set is large, same will be reflected in the processing time of the dataset.
                        </div>
                        <div className="mt-4">
                          {"5) "}The size of the data set which is considered which is considered optimal for this usecase is from 10,000-20,000 readings
                        </div>
                        <div className="mt-4">
                          {"6) "}To ensure that the insights derived from the datasets are accurate, it would be recommended for the data to be clean of empty values and other noise which can imact the model performance.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessingInfo;
