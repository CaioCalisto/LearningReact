import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import MainLayout from "./layouts/MainLayout";
import RequireAuth from "./components/RequireAuth";

const ROLES = {
  Admin: "admin",
  User: "user",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
