const Hero = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <img
                src="/images/hero-landing.jpg"
                alt="Hero"
                className="w-full h-full object-cover filter"
            />

            <div className="absolute inset-0 bg-purple-950/70"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    Hola Amigos!
                </h1>
                <p className="mt-4 text-white max-w-3xl leading-relaxed drop-shadow-sm text-xl font-bold">
                    Unlock the power of your IoT data with our smart anomaly
                    detection platform. Effortlessly upload your data, and let
                    our AI-driven system spot issues before they become
                    problems.
                </p>
                <div className="flex gap-10 mt-3">
                    <div className="text-xl bg-gray-300/40 px-4 py-1 rounded-full font-bold text-white border-2">
                        Accurate
                    </div>
                    <div className="text-xl bg-gray-300/40 px-4 py-1 rounded-full font-bold text-white border-2">
                        Fast
                    </div>
                    <div className="text-xl bg-gray-300/40 px-4 py-1 rounded-full font-bold text-white border-2">
                        Reliable
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
