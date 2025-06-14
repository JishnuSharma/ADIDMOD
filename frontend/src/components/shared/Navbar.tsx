import { Link, NavLink } from "react-router-dom";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Profile", path: "/profile" },
];

const Navbar = () => {
    return (
        <div className="bg-slate-500 flex justify-around px-2 py-4 items-center">
            <div className="text-4xl text-white font-bold">ADIDMOD</div>
            <div className="w-full md:w-2/5 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-white text-lg px-4 py-1 rounded-lg transition duration-200 ${
                                isActive
                                    ? "bg-slate-700"
                                    : "hover:bg-slate-600"
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            <Link
                to={"/get-started"}
                className="bg-slate-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-slate-600 hover:scale-104 transition duration-200"
            >
                Get Started
            </Link>
        </div>
    );
};

export default Navbar;
