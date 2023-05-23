import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, Routes } from "react-router-dom";
import Friends from "./pages/Friends";

const NavMenu = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
      </ul>
    </nav>
  );
};

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavMenu />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/friends" element={<Friends />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
