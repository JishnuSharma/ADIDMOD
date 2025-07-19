import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/user.api";
import { useUser } from "../../context/UserContext";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", protected: false },
  { name: "About Me", path: "/about", protected: false },
  { name: "Dashboard", path: "/dashboard", protected: true },
  { name: "My Profile", path: "/profile", protected: true },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser, loading } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      toast.success("Successfully logged out!");
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="bg-slate-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl font-bold">ADIDMOD</div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks
            .filter((link) => !link.protected)
            .map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg px-4 py-1 rounded-lg transition ${
                    isActive ? "bg-slate-700" : "hover:bg-slate-600"
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
                    `text-lg px-4 py-1 rounded-lg transition ${
                      isActive ? "bg-slate-700" : "hover:bg-slate-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

          {!loading && user ? (
            <button
              onClick={handleLogout}
              className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/get-started"
              className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 font-semibold"
            >
              Get Started
            </Link>
          )}
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            {navLinks
              .filter((link) => !link.protected || (user && !loading))
              .map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg transition ${
                      isActive ? "bg-slate-700" : "hover:bg-slate-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            {!loading && user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full text-left bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 font-semibold"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/get-started"
                onClick={() => setMenuOpen(false)}
                className="block bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 font-semibold"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
