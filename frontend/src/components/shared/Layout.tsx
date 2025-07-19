import { useLocation } from "react-router-dom";
import ProtectedFooter from "./ProtectedFooter";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { pathname } = useLocation();
    const isProtected = ["/dashboard", "/profile", "/process-data"].includes(
        pathname
    );

    return (
        <div className="min-h-screen flex flex-col text-gray-900">
            <Navbar />
            <main className="flex-1 px-4 sm:px-8 py-6">{children}</main>
            {isProtected ? <ProtectedFooter /> : <Footer />}
        </div>
    );
};

export default Layout;