import { useState } from "react";
import { motion } from "framer-motion";

const AuthorInfo = () => {
    const [selected, setSelected] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mt-16 mx-auto flex flex-col md:flex-row items-center justify-center bg-slate-50 w-[90%] rounded-3xl border-8 border-slate-700 shadow-xl overflow-hidden ${
                selected ? "ring-4 ring-violet-400" : ""
            }`}
            onMouseDown={() => setSelected(true)}
            onMouseUp={() => setTimeout(() => setSelected(false), 1000)}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="md:w-1/3 w-full p-6 md:p-10 flex justify-center"
            >
                <img
                    src="/images/jish-boi.png"
                    alt="Author"
                    className="rounded-2xl w-full max-w-sm object-cover transition-transform duration-300"
                />
            </motion.div>
            <div className="md:w-2/3 w-full p-6 md:pr-12 text-lg leading-relaxed text-slate-800 select-text">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 transition-colors duration-300 hover:text-violet-600">
                    Jishnu Sharma
                </h2>
                <p>
                    Associate Software Developer with 1.5+ years of experience
                    building scalable full-stack web applications using the MERN
                    stack. Proficient in clean architecture, performance
                    optimization, and seamless UI/UX delivery. Collaborates
                    effectively with teams, mentors interns, and solves
                    real-world problems with robust solutions.
                </p>
                <p className="mt-3">
                    Actively advancing expertise in backend systems with Node.js
                    & TypeScript, state management, and modern frontend stacks
                    including Tailwind CSS. Committed to continuous learning and
                    evolving into a versatile developer capable of delivering
                    impactful software.
                </p>
            </div>
        </motion.div>
    );
};

export default AuthorInfo;
