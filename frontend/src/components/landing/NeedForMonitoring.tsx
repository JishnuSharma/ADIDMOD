
const PointOfNeeds = [
    {
        index:"pon1",
        topic: "Security",
        description: "Anomalies may indicate unauthorized access or cyberattacks, making continuous monitoring essential to prevent data breaches."
    },
    {
        index:"pon2",
        topic: "Data Integrity",
        description: "Detecting anomalies ensures data accuracy and prevents the compromise of sensitive information."
    },
    {
        index:"pon3",
        topic: "Operational Efficiency",
        description: "Monitoring helps optimize device performance, reduce downtime, and extend the lifespan of IoT devices."
    },
    {
        index:"pon4",
        topic: "Predictive Maintenance",
        description: "Identifying anomalies early allows for timely maintenance, reducing the risk of device failures and costly repairs."
    },
    {
        index:"pon5",
        topic: "Resource Optimization",
        description: "Anomaly detection helps optimize resource usage, leading to cost savings in terms of energy, bandwidth, and storage."
    },
    {
        index:"pon6",
        topic: "Safety Compliance",
        description: "Monitoring ensures adherence to safety regulations, especially in critical applications like healthcare and industrial automation."
    },
    {
        index:"pon7",
        topic: "Scalability",
        description: "As IoT ecosystems grow, monitoring becomes crucial to managing a large number of devices efficiently."
    },
    {
        index:"pon8",
        topic: "Proactive Issue Resolution",
        description: "Early anomaly detection enables proactive troubleshooting, reducing the impact of issues on operations."
    }
]

const NeedForMonitoring = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-6 w-full justify-around">
        {PointOfNeeds.map((point) => {
            return (
                <div className="bg-red-400 w-[700px] rounded-2xl cursor-pointer" key={point.index}>
                    <div className="bg-slate-700 rounded-tl-2xl rounded-tr-2xl text-lg font-bold text-white px-4 py-2 border-2 border-slate-500">
                        {point.topic}
                    </div>
                    <div className="px-4 py-2 text-slate-900 text-lg bg-slate-100">
                        {point.description}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default NeedForMonitoring