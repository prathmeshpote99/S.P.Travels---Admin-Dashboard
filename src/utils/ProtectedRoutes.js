/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  // Check if user is logged in
  function checkUserToken() {
    if (token === null || token === "" || token === undefined) {
      setLoggedIn(false);
      navigate("/login");
    }
    setLoggedIn(true);
  }

  useEffect(() => {
    checkUserToken();
  }, [loggedIn]);

  return <>{loggedIn ? children : null}</>;
};

export default ProtectedRoutes;
