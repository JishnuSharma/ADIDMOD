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

const ProcessedResults = ({results}:ProcessedResultsProps) => {
    return (
        <div className="w-full">
            <div className="w-full text-center text-2xl text-slate-800 font-bold">
                PROCESSED RESULTS
            </div>
            <div>
                <div className="flex justify-around mt-8">
                    <div className="w-[250px] text-center">
                        <div className="rounded-tl-xl rounded-tr-xl px-4 py-2 bg-slate-400 text-white">
                            Total Number of Readings
                        </div>
                        <div className="text-slate-700 bg-slate-200 text-center rounded-bl-xl rounded-br-xl px-4 py-2">
                            {results.total_readings}
                        </div>
                    </div>
                    <div className="w-[250px] text-center">
                        <div className="rounded-tl-xl  bg-slate-400 text-white rounded-tr-xl px-4 py-2">
                            Total Number of Anomalies
                        </div>
                        <div className="bg-slate-200 text-slate-700 text-center rounded-bl-xl rounded-br-xl px-4 py-2">
                            {results.total_anomalies}
                        </div>
                    </div>
                    <div className="w-[250px] text-center">
                        <div className="rounded-tl-xl  bg-slate-400 text-white rounded-tr-xl px-4 py-2">
                            Percentage of Anomalies
                        </div>
                        <div className="bg-slate-200 text-slate-700 text-center rounded-bl-xl rounded-br-xl px-4 py-2">
                            {results.percentage_anomalies}%
                        </div>
                    </div>
                    <div className="w-[250px] text-center">
                        <div className="rounded-tl-xl  bg-slate-400 text-white rounded-tr-xl px-4 py-2">
                            Device Status
                        </div>
                        <div className="bg-slate-200 text-slate-700 text-center rounded-bl-xl rounded-br-xl px-4 py-2">
                            {results.feedback}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="mt-10">
                        Anomaly Plot
                    </div>
                    <div>

                    </div>
                    <img src={results.image_url} className="h-[500px]" alt="Anomaly Plot" />
                </div>
            </div>
        </div>
    );
};

export default ProcessedResults;
