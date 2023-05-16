import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Dashboard() {
  var authenticated = localStorage.getItem('authenticated')

  if (authenticated === "true") {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
}

export default Dashboard;
