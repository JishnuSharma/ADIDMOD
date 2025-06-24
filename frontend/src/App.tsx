import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Landing from "./pages/Landing";
import Footer from "./components/shared/Footer";
import About from "./pages/About";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import ProcessData from "./pages/ProcessData";
import PrivateRoute from "./components/routing/PrivateRoute";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <UserProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/get-started" element={<Authentication />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <MyProfile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/process-data"
                        element={
                            <PrivateRoute>
                                <ProcessData />
                            </PrivateRoute>
                        }
                    />
                </Routes>
                <Footer />
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
            />
        </UserProvider>
    );
}

export default App;
