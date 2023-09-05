import { useEffect, useState } from "react";
import "../assets/css/admin.css";
import Footer from "../components/admin/Footer";
import NavBar from "../components/admin/NavBar";
import SideBar from "../components/admin/SideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import { toast } from "react-toastify";

const AdminLayout = (props) => {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    const storedSidebarState = localStorage.getItem("sidebarState");
    console.log(storedSidebarState);
    if (storedSidebarState === "closed") {
      setSidebarOpen(false);
    }
  }, []);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    localStorage.setItem("sidebarState", !sidebarOpen ? "open" : "closed");
  };

  const showErrorToast = () => {
    toast.error("This is an error message", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className="admin-app">
      <SideBar isOpen={sidebarOpen} />
      <div className="main-content">
        <NavBar onSidebarToggle={handleSidebarToggle} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default AdminLayout;
