import { PointOfNeeds } from "../../data/needs";

const NeedForMonitoring = () => {
    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-[95%] mx-auto">
            {PointOfNeeds.map((point) => (
                <div
                    key={point.index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200"
                >
                    <div className="bg-slate-800 text-white text-xl font-semibold px-6 py-4 rounded-t-2xl border-b border-slate-700">
                        {point.topic}
                    </div>
                    <div className="px-6 py-4 text-slate-800 text-base leading-relaxed">
                        {point.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NeedForMonitoring;
