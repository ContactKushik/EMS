import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    setLocalStorage(); // Initialize local storage only if it's empty
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  const updateEmployees = (updatedEmployees) => {
    setUserData((prevData) => ({
      ...prevData,
      employees: updatedEmployees,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...userData, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
