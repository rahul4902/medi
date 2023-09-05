import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import "./assets/css/common.css";
import AdminLayout from "./layouts/AdminLayout";
import FrontLayout from "./layouts/FrontLayout";
import Home from "./components/Home";
import AdminLogin from "./components/admin/Login";
import AdminRegister from "./components/admin/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateAdminRoute from "./helper/PrivateAdminRoute";

function App() {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      // Show a custom install button or similar UI element
    });

    // On user interaction (e.g., clicking install button), call deferredPrompt.prompt()
  }, []);

  const showSuccessToast = () => {
    toast.success("This is a success message", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <div>
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
      </div>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            {/* <Route
              path="/admin/*"
              element={
                <AdminLayout>
                  <Outlet />
                </AdminLayout>
              }
            /> */}
            <Route
              path="/*"
              element={
                <FrontLayout>
                  <Home />
                </FrontLayout>
              }
            />
            <Route
              path="/admin/*"
              element={
                <PrivateAdminRoute
                  element={
                    <AdminLayout>
                      <Outlet />
                    </AdminLayout>
                  }
                />
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
