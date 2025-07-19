import { useState, useEffect } from "react";
import clsx from "clsx";

const features = [
  {
    title: "ANOMALY VISUALIZATION",
    points: [
      "Displays anomalies using charts, graphs, heatmaps, and dashboards.",
      "Highlights unusual patterns for quick identification.",
      "Allows zooming and inspection of specific data points.",
    ],
  },
  {
    title: "MULTI-DATA SOURCE INTEGRATION",
    points: [
      "Combines data from sensors, actuators, and APIs.",
      "Centralizes data for unified anomaly detection.",
      "Enables a complete view of the IoT environment.",
    ],
  },
  {
    title: "MACHINE LEARNING MODEL CUSTOMIZATION",
    points: [
      "Lets users tailor models for specific use cases.",
      "Supports tuning algorithms and parameters.",
      "Adapts to evolving data patterns over time.",
    ],
  },
  {
    title: "SECURITY ASSESSMENT",
    points: [
      "Detects vulnerabilities and potential threats.",
      "Enhances system protection alongside anomaly detection.",
      "Improves device and data integrity.",
    ],
  },
  {
    title: "PREDICTIVE ANALYTICS",
    points: [
      "Uses trends to forecast potential anomalies.",
      "Helps prevent issues before they occur.",
      "Improves reliability through data-driven actions.",
    ],
  },
];

const FeatureSwiper = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[1800px] mx-auto px-2 md:px-4 xl:px-6 overflow-hidden">
      <div className="relative h-[200px] md:h-[20px] lg:h-[340px] xl:h-[360px] 2xl:h-[380px] flex items-center justify-center">
        {features.map((feature, idx) => {
          const isActive = idx === current;
          const isLeft = idx === (current - 1 + features.length) % features.length;
          const isRight = idx === (current + 1) % features.length;

          return (
            <div
              key={idx}
              className={clsx(
                "absolute transition-all duration-700 ease-in-out rounded-3xl border shadow-xl bg-white/90 backdrop-blur-xl",
                "top-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] px-4 sm:px-6 md:px-8 py-10",
                isActive &&
                  "left-1/2 -translate-x-1/2 z-30 scale-105 opacity-100 shadow-2xl",
                isLeft &&
                  "left-[2%] z-20 scale-90 opacity-30 blur-sm",
                isRight &&
                  "right-[2%] z-20 scale-90 opacity-30 blur-sm",
                !isActive && !isLeft && !isRight && "hidden"
              )}
              style={{
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                {feature.title}
              </h2>
              <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg px-2 sm:px-4 md:px-6 leading-relaxed">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-1 text-slate-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mt-12 mb-6 flex justify-center gap-2">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={clsx(
              "h-2.5 w-2.5 rounded-full transition-all duration-300",
              i === current ? "bg-slate-700 scale-110 shadow" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSwiper;
