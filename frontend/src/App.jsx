import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

/* 🔹 Wrapper to control Header visibility */
function Layout() {
  const location = useLocation();

  // Hide header on dashboard
  const hideHeader = location.pathname === "/dashboard";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}
