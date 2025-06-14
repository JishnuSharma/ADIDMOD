const SearchBar = () => {
    return (
        <div className="flex items-center">
            <input
                className="py-2 px-4 border-1 border-slate-300 rounded-tl-4xl rounded-bl-4xl min-w-sm"
                placeholder="Search Devices"
                type="text"
            />
            <div className="bg-slate-400 border-1 cursor-pointer hover:bg-slate-500 transition duration-500 hover:border-slate-500 border-slate-400 py-3 px-5 rounded-tr-4xl rounded-br-4xl min-w-2.5">
                <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchBar;
