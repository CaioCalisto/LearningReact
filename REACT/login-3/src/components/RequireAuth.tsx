import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type RequireAuthProps = {
  allowedRoles: string[];
};

function RequireAuth({ allowedRoles }: RequireAuthProps) {
  const { user } = useAuth();
  console.table(user)

  return allowedRoles.includes(user?.role) ? <Outlet /> : <h1>Not allowed</h1>;
}

export default RequireAuth;
