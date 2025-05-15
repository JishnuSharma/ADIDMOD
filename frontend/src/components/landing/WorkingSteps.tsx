const steps = [
    {
        id: 1,
        step: "Register yourself on the platform",
    },
    {
        id: 2,
        step: "Add your respective IOT devices to the environment",
    },
    {
        id: 3,
        step: "Upload the device's data in the specified format with the required parameters",
    },
    {
        id: 4,
        step: "Explore the indepth analysis along with visual insights",
    },
];

const WorkingSteps = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-[98%] mx-auto mt-10">
      {steps.map((step) => (
        <div
          key={step.id}
          className="flex items-center shadow-lg bg-purple-700 rounded-tl-[50px] rounded-bl-[50px] rounded-tr-xl rounded-br-xl overflow-hidden min-w-[220px] max-w-[350px] h-25 transition-transform hover:scale-105 duration-300 cursor-pointer"
        >
          <div className=" ">
            <div className="bg-white text-purple-700 border-2 border-purple-700 w-25 h-25 rounded-full flex items-center justify-center text-3xl font-extrabold shadow-md">
              {step.id}
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center text-white text-base font-semibold px-4 text-center">
            {step.step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkingSteps;
