const Hero = () => {
    return (
        <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden px-4">
            <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden">
                <img
                    src="/images/hero-landing.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover brightness-75"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                        Unlock Smart Anomaly Detection
                    </h1>
                    <p className="mt-4 text-base md:text-lg max-w-2xl text-white/90 leading-relaxed font-medium">
                        Empower your IoT ecosystem with AI-driven analytics.
                        Upload data and get real-time insights to prevent
                        failures before they occur.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        {["Accurate", "Fast", "Reliable"].map((tag) => (
                            <span
                                key={tag}
                                className="text-sm md:text-base px-4 py-1.5 rounded-full font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
