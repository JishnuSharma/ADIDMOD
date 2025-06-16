import { Link, NavLink, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../../utils/auth";

const navLinks = [
    { name: "Home", path: "/", protected: false },
    { name: "About Us", path: "/about", protected: false },
    { name: "Dashboard", path: "/dashboard", protected: true },
    { name: "My Profile", path: "/profile", protected: true },
];

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div className="bg-slate-500 flex items-center justify-between px-6 py-4">
            <div className="text-4xl text-white font-bold">ADIDMOD</div>

            <div className="ml-auto flex items-center gap-4">
                <nav className="flex gap-4">
                    {navLinks
                        .filter((link) => isLoggedIn() || !link.protected)
                        .map((link) => (
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
                </nav>

                {!isLoggedIn() ? (
                    <Link
                        to="/get-started"
                        className="bg-slate-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-slate-600 transition duration-200"
                    >
                        Get Started
                    </Link>
                ) : (
                    <button
                        className="bg-slate-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-slate-600 transition duration-200 cursor-pointer"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
