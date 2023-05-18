import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
