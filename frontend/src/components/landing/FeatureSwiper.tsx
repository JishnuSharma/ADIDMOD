import { useState, useEffect } from 'react';

const features = [
  {
    title: 'ANOMALY VISUALIZATION',
    points: [
      'Anomaly visualization is a crucial feature that provides users with intuitive graphical representations of detected anomalies.',
      'Visualizations can include charts, graphs, heatmaps, or dashboards that highlight unusual data patterns, making it easier for users to spot anomalies at a glance.',
      'Interactive elements within the visualizations allow users to zoom in, explore specific data points, and investigate the root causes of anomalies.',
    ],
  },
  {
    title: 'MULTI-DATA SOURCE INTEGRATION',
    points: [
      'In many IoT ecosystems, data originates from various sources, such as sensors, actuators, and external APIs. Multi-data source integration ensures that your anomaly detection system can handle diverse data types seamlessly.',
      'This feature enables users to consolidate data from different IoT devices and systems into a single platform for comprehensive anomaly detection.',
      'It allows for a holistic view of the entire IoT environment, making it possible to detect anomalies that might otherwise go unnoticed when analyzing individual data sources.',
    ],
  },
  {
    title: 'MACHINE LEARNING MODEL CUSTOMIZATION',
    points: [
      'Customization is a powerful feature that empowers users to adapt anomaly detection models to their specific IoT use cases.',
      'Users can fine-tune machine learning algorithms, adjust model parameters, and incorporate domain knowledge to improve detection accuracy.',
      'Customization flexibility ensures that the system can evolve and adapt to changing data patterns and user requirements over time.',
    ],
  },
  {
    title: 'SECURITY ASSESSMENT',
    points: [
      'Beyond anomaly detection, security assessment features provide an added layer of protection for IoT devices and networks.',
      'These features identify vulnerabilities and potential security threats within the IoT ecosystem, helping organizations proactively address security concerns.',
      'By addressing security issues early, the overall safety and integrity of IoT devices and data are upheld.',
    ],
  },
  {
    title: 'PREDICTIVE ANALYTICS',
    points: [
      'Predictive analytics takes anomaly detection a step further by forecasting potential anomalies based on historical data trends.',
      'This feature enables users to anticipate and prevent issues before they occur, reducing downtime and minimizing potential disruptions.',
      'It empowers organizations to make data-driven decisions and implement preventive measures, ultimately improving the reliability and efficiency of their IoT operations.',
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
    <div className="w-2/4 max-w-5xl mx-auto px-4 py-12 relative">
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 p-8"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-800">
                  {feature.title}
                </h2>
                <ul className="text-left max-w-2xl mx-auto space-y-4 text-gray-700 text-base md:text-lg list-disc list-inside">
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-slate-600 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSwiper;
