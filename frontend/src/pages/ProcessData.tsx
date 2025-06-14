import { useState } from "react";
import ProcessingInfo from "../components/processdata/ProcessingInfo";
import Headings from "../components/shared/Headings";
import ProcessingForm from "../components/processdata/ProcessingForm";
import ProcessedResults from "../components/processdata/ProcessedResults";

const ProcessData = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    return (
        <div>
            <div className="flex justify-between items-center mt-6 px-10">
                <Headings title="PROCESS DATA" />

                <div className="bg-slate-200 p-3 rounded-2xl hover:bg-slate-400 hover:text-white transition duration-500 text-slate-800 flex items-center gap-2 group cursor-pointer" onClick={() => setShowInstructions(true)}>
                    <span>Processing Instructions</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 50 50"
                        className="fill-current text-slate-800 group-hover:text-white transition duration-300"
                    >
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                    </svg>
                </div>
            </div>
            <div className="flex justify-between items-center w-[95%] mx-auto mt-6 flex-col">
                <div className="w-full text-center text-2xl text-slate-800 font-bold">
                    UPLOAD DATA
                </div>
                <div className="w-full">
                    <ProcessingForm/>
                </div>
            </div>
            <div className="flex flex-wrap w-[90%] mx-auto gap-5 mt-9">
                <ProcessedResults/>
            </div>

            <ProcessingInfo isVisible={showInstructions} onClose={() => setShowInstructions(!showInstructions)}/>
        </div>
    );
};

export default ProcessData;
