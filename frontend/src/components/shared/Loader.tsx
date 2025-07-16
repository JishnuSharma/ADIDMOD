const Loader = ({className}:{className?:string}) => {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <div className={`h-12 w-12 border-4 border-gray-300 border-t-slate-900 rounded-full animate-spin`} />
    </div>
  );
};

export default Loader;
