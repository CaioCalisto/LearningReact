import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function PublicLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ minHeight: "100vh"}}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
