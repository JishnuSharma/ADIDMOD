const AuthorInfo = () => {
    return (
        <div className="mt-10 flex items-center justify-center bg-purple-100 w-[80%] rounded-2xl border-8 border-purple-600">
            <div className="w-1/3 p-10 cursor-pointer hover:scale-105 transition duration-400">
                <img
                    src="/images/jish-boi.png"
                    alt="Author Info"
                    className="rounded-xl"
                />
            </div>
            <div className="w-1/2 text-xl text-justify">
                <div className="text-[60px] font-bold text-purple-800">
                    Jishnu Sharma
                </div>
                <div className="text-purple-950">
                    I'm an Associate Software Developer with 1.5 years of
                    hands-on experience in building full-stack web applications.
                    I specialize in the MERN stack and have contributed to
                    scalable system development, focusing on clean code,
                    performance optimization, and seamless user experiences. I
                    enjoy collaborating with teams, mentoring interns, and
                    tackling real-world problems through technology. I'm also
                    passionate about continuous learning—currently deepening my
                    skills in state management, backend architecture with
                    Node.js and TypeScript, and modern frontend tools like
                    Tailwind CSS. My goal is to grow into a well-rounded
                    developer capable of delivering impactful software
                    solutions.
                </div>
            </div>
        </div>
    );
};

export default AuthorInfo;
