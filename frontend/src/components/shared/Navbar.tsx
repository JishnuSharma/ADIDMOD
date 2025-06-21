import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/user.api";
import { useUser } from "../../context/UserContext";

const navLinks = [
    { name: "Home", path: "/", protected: false },
    { name: "About Us", path: "/about", protected: false },
    { name: "Dashboard", path: "/dashboard", protected: true },
    { name: "My Profile", path: "/profile", protected: true },
];

const Navbar = () => {
    const navigate = useNavigate();
    const { user, setUser, loading } = useUser();

    const handleLogout = async () => {
        try {
            await logoutUser();
            setUser(null);
            navigate("/");
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    return (
        <div className="bg-slate-500 flex items-center justify-between px-6 py-4">
            <div className="text-4xl text-white font-bold">ADIDMOD</div>

            <div className="ml-auto flex items-center gap-4">
                <nav className="flex gap-4">
                    {navLinks
                        .filter((link) => !link.protected)
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

                    {!loading &&
                        user &&
                        navLinks
                            .filter((link) => link.protected)
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

                {!loading && user ? (
                    <button
                        onClick={handleLogout}
                        className="bg-slate-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-slate-600 transition duration-200 cursor-pointer"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/get-started"
                        className="bg-slate-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-slate-600 transition duration-200"
                    >
                        Get Started
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
