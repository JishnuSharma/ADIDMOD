const ProcessingForm = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="bg-white shadow-md rounded-lg w-[90%] p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label
              htmlFor="deviceFile"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Device File
            </label>
            <input
              type="file"
              id="deviceFile"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:border-slate-700 focus:outline-none file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100"
            />
          </div>

          <div>
            <label htmlFor="dataType" className="block text-sm font-medium text-gray-700 mb-2">
              Select Data Type
            </label>
            <select
              id="dataType"
              className="cursor-pointer w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
            >
              <option value="boolean">Boolean</option>
              <option value="numeric">Numeric</option>
            </select>
          </div>

          <div>
            <label htmlFor="maxValue" className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Value
            </label>
            <input
              type="number"
              id="maxValue"
              placeholder="Enter Maximum Value"
              className="cursor-pointer w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div>
            <label htmlFor="minValue" className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Value
            </label>
            <input
              type="number"
              id="minValue"
              placeholder="Enter Minimum Value"
              className="cursor-pointer w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="percentage1" className="block text-sm font-medium text-gray-700 mb-2">
              Acceptable Percentage
            </label>
            <input
              type="number"
              id="percentage1"
              placeholder="Enter Acceptable Percentage"
              className="cursor-pointer w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="percentage2" className="block text-sm font-medium text-gray-700 mb-2">
              Acceptable Percentage
            </label>
            <input
              type="number"
              id="percentage2"
              placeholder="Enter Acceptable Percentage"
              className="cursor-pointer w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:border-slate-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="cursor-pointer bg-slate-600 text-white px-6 py-2 rounded-md hover:bg-slate-700 transition"
          >
            Process
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProcessingForm;
