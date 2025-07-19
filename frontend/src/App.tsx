import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import ProcessData from "./pages/ProcessData";
import PrivateRoute from "./components/routing/PrivateRoute";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./components/shared/Layout";

function App() {
    return (
        <UserProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/get-started"
                            element={<Authentication />}
                        />
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
                </Layout>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Router>
        </UserProvider>
    );
}

export default App;
