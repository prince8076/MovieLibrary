import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the user from local storage
    localStorage.removeItem("user");

    // Optionally, you can also clear other session data or tokens here
    // For example: localStorage.removeItem('token');

    // Redirect to the login page
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
