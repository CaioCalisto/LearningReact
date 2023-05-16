import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Dashboard() {
  var authenticated = localStorage.getItem('authenticated')

  if (authenticated === "false") {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
}

export default Dashboard;
