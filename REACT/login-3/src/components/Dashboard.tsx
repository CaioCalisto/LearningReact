import React,  { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { loggedUser, level } = useAuth();

  // nao funciona, por que ??
  console.log('logged ' + loggedUser + ', level ' + level)

  return (
    <>
      {level === "admin" ? (
        <h1>Allowed to see this content</h1>
      ) : (
        <h1>Not allowed</h1>
      )}
    </>
  );
}

export default Dashboard;
