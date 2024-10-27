import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Call the parent component's handleLogin function with the entered email and password.
    console.log("Form submitted");
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <h1 className="text-center mb-10 text-xl font-semibold">🏢EMS SYSTEM</h1>
        <h2 className="text-2xl font-semibold text-center mb-10">Login</h2>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={submitHandler}
        >
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="mt-5 outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-5 outline-none bg-transparent text-white border-none bg-emerald-600 text-xl py-2 px-5 rounded-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
