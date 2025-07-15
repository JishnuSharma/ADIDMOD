import { useEffect, useState } from "react";
import ProcessingInfo from "../components/processdata/ProcessingInfo";
import Headings from "../components/shared/Headings";
import ProcessingForm from "../components/processdata/ProcessingForm";
import ProcessedResults from "../components/processdata/ProcessedResults";
import { useQueryParam } from "../hooks/useQueryParams";
import { getPreviousProcessedData } from "../api/processed.api";

const ProcessData = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [previousData, setPreviousData] = useState(null);
    const deviceId = useQueryParam("device");

    useEffect(() => {
        if (!deviceId) return;

        const fetchData = async () => {
            const data = await getPreviousProcessedData(deviceId);
            setPreviousData(data.process);
        };

        fetchData();
    }, [deviceId]);

    if (!deviceId) return null;

    return (
        <div>
            <div className="flex justify-between items-center mt-6 px-10">
                <Headings title="PROCESS DATA" />

                <div
                    className="bg-slate-200 p-3 rounded-2xl hover:bg-slate-400 hover:text-white transition duration-500 text-slate-800 flex items-center gap-2 group cursor-pointer"
                    onClick={() => setShowInstructions(true)}
                >
                    <span>Processing Instructions</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="24"
                        height="24"
                    >
                        <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 4c10.5 0 19 8.5 19 19s-8.5 19-19 19S6 35.5 6 25 14.5 6 25 6zm0 7a3 3 0 100 6 3 3 0 000-6zm-2 10h4v14h-4V23z" />
                    </svg>
                </div>
            </div>

            <div className="flex justify-between items-center w-[95%] mx-auto mt-6 flex-col">
                <div className="w-full text-center text-2xl text-slate-800 font-bold">
                    UPLOAD DATA
                </div>
                <div className="w-full">
                    <ProcessingForm
                        deviceId={deviceId}
                        previousData={previousData}
                    />
                </div>
            </div>

            <div className="flex flex-wrap w-[90%] mx-auto gap-5 mt-9">
                <ProcessedResults />
            </div>

            <ProcessingInfo
                isVisible={showInstructions}
                onClose={() => setShowInstructions(false)}
            />
        </div>
    );
};

export default ProcessData;
