import { PointOfNeeds } from "../../data/needs"

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