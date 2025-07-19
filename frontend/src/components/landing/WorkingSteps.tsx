const steps = [
    {
        id: 1,
        step: "Register on the platform.",
    },
    {
        id: 2,
        step: "Connect your IoT devices to the system.",
    },
    {
        id: 3,
        step: "Upload device data in the required format.",
    },
    {
        id: 4,
        step: "View detailed analysis and visual insights.",
    },
];

const WorkingSteps = () => {
    return (
        <div className="w-[95%] mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
                <div
                    key={step.id}
                    className="relative bg-slate-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-white text-center flex flex-col items-center justify-center"
                >
                    <div className="absolute -top-5 bg-white text-slate-800 border-4 border-slate-800 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                        {step.id}
                    </div>
                    <p className="mt-8 text-base font-medium">{step.step}</p>
                </div>
            ))}
        </div>
    );
};

export default WorkingSteps;
