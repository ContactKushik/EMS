import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const authData = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Check if a user is already logged in on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser.role);
      setLoggedInUserData(
        storedUser.role === "admin"
          ? { name: storedUser.name }
          : storedUser.data
      );
    }
  }, []);

  const handleLogin = (email, password) => {
    // Check if the login is for an admin user
    const adminUser = authData.admin.find(
      (a) => a.email === email && a.password === password
    );

    if (adminUser) {
      // Set admin user in state and local storage
      setUser("admin");
      setLoggedInUserData({ name: adminUser.name });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", name: adminUser.name })
      );
    } else {
      // Check if the login is for an employee user
      const employeeUser = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employeeUser) {
        // Set employee user in state and local storage
        setUser("employee");
        setLoggedInUserData(employeeUser);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employeeUser })
        );
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDashboard changeUser={setUser} data={loggedInUserData} />}
      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;
