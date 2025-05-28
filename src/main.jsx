import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Main layout
import App from "./App";

// Pages
import Dashboard from "./page/dashboard/Dashboard";
import Analytics from "./page/analytics/Analytics";
import Transaction from "./page/transaction/Transaction";
import MyInvestment from "./page/MyInvestment/MyInvestment";
import ChatBot from "./page/ChatBot/ChatBot";
import Reports from "./page/report/Reports";
import Help from "./page/help/Help";
import FAQ from "./page/help/FAQ";
import Support from "./page/help/Support";

// User-related pages
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import ChangePassword from "./UserMenu/ChangePassword/ChangePassword";
import RecentActivities from "./UserMenu/RecentActivities/RecentActivities";

// Authentication
import Login from "./page/login/login";
import ForgotPassword from "./page/Forgot Password/Forgot Password";

// Load Tidio live chat script
const loadTidio = () => {
  const script = document.createElement("script");
  script.src = "//code.tidio.co/1l6f1hwpsfikpjt48mdzflzh394vfe2s.js";
  script.async = true;
  document.body.appendChild(script);
};

// Route protection wrapper
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="myInvestment" element={<MyInvestment />} />
        <Route path="ChatBot" element={<ChatBot />} />
        <Route path="reports" element={<Reports />} />

        {/* Help Pages */}
        <Route path="help" element={<Help />} />
        <Route path="help/faq" element={<FAQ />} />
        <Route path="help/support" element={<Support />} />

        {/* User Settings */}
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="recent-activities" element={<RecentActivities />} />

        {/* Redirect on logout */}
        <Route path="logout" element={<Navigate to="/login" />} />
      </Route>
    </>
  )
);

// App wrapper that waits for Tidio to load
function AppWithTidio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTidio();
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%", fontSize: "20px" }}>
        Loading...
      </div>
    );
  }

  return (
    <RouterProvider 
      router={router} 
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    />
  );
}

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithTidio />
  </React.StrictMode>
);
