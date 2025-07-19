interface HeadingProps {
    title: string;
}

const Headings = ({ title }: HeadingProps) => {
    return (
        <div className="inline-block text-2xl md:text-3xl font-extrabold text-white px-6 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:brightness-110">
            {title}
        </div>
    );
};

export default Headings;
