const ProcessedResults = () => {
    return (
        <div className="w-full">
            <div className="w-full text-center text-2xl text-purple-800 font-bold">
                PROCESSED RESULTS
            </div>
            <div>
                <div className="flex justify-around mt-8">
                    <div className="w-[250px] text-center">
                        <div className="rounded-tl-xl rounded-tr-xl px-4 py-2 bg-purple-400 text-white">
                            Total Number of Readings
                        </div>
                        <div className="text-purple-700 bg-purple-200 text-center rounded-bl-xl rounded-br-xl px-4 py-2">
                            20k
                        </div>
                    </div>
                    <div className="w-[250px] text-center">
                        <div className="rounded-tl-xl  bg-purple-400 text-white rounded-tr-xl px-4 py-2">
                            Total Number of Anomalies
                        </div>
                        <div className="bg-purple-200 text-purple-700 text-center rounded-bl-xl rounded-br-xl px-4 py-2">
                            10k
                        </div>
                    </div>
                    <div className="w-[250px] text-center">
                        <div className="rounded-tl-xl  bg-purple-400 text-white rounded-tr-xl px-4 py-2">
                            Percentage of Anomalies
                        </div>
                        <div className="bg-purple-200 text-purple-700 text-center rounded-bl-xl rounded-br-xl px-4 py-2">
                            50%
                        </div>
                    </div>
                    <div className="w-[250px] text-center">
                        <div className="rounded-tl-xl  bg-purple-400 text-white rounded-tr-xl px-4 py-2">
                            Device Status
                        </div>
                        <div className="bg-purple-200 text-purple-700 text-center rounded-bl-xl rounded-br-xl px-4 py-2">
                            Poor
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="mt-10">
                        Anomaly Plot
                    </div>
                    <div>

                    </div>
                    <img src="images/anomaly_plot.png" className="h-[500px]" alt="Anomaly Plot" />
                </div>
            </div>
        </div>
    );
};

export default ProcessedResults;
