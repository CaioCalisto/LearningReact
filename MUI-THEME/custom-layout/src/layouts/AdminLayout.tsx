import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AdminLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
