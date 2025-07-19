import { useState } from "react";

export interface IProcessedResult {
    feedback: string;
    image_url: string;
    percentage_anomalies: number;
    total_anomalies: number;
    total_readings: number;
}

interface ProcessedResultsProps {
    results: IProcessedResult;
}

const ProcessedResults = ({ results }: ProcessedResultsProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-full space-y-10">
            <div className="text-center text-2xl text-slate-800 font-bold">
                PROCESSED RESULTS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ResultCard title="Total Readings" value={results.total_readings} />
                <ResultCard title="Total Anomalies" value={results.total_anomalies} />
                <ResultCard
                    title="Anomaly Percentage"
                    value={`${results.percentage_anomalies}%`}
                />
                <ResultCard title="Device Status" value={results.feedback} />
            </div>

            <div className="text-center">
                <div className="text-lg font-semibold text-slate-700 mb-4">
                    Anomaly Plot
                </div>
                <div
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer w-full max-w-4xl mx-auto border rounded-lg overflow-hidden"
                >
                    <img
                        src={results.image_url}
                        alt="Anomaly Plot"
                        className="w-full object-contain"
                    />
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg shadow-xl p-4 max-w-5xl w-full">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-white bg-slate-700 rounded-full px-3 py-1 text-sm hover:bg-slate-800"
                        >
                            Close
                        </button>
                        <img
                            src={results.image_url}
                            alt="Full View"
                            className="w-full h-auto object-contain rounded"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const ResultCard = ({ title, value }: { title: string; value: string | number }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
        <div className="bg-slate-500 text-white font-semibold text-center py-3">
            {title}
        </div>
        <div className="bg-slate-100 text-slate-800 text-center py-4 text-xl font-medium">
            {value}
        </div>
    </div>
);

export default ProcessedResults;
