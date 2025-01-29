import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext.js";
function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setuser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        placeholder="username"
        onChange={(e) => setusername(e.target.value)}
        type="text"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
