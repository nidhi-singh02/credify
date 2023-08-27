import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post } from "../../utils/apiService";
import "./LoginPage.css";
function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("govt");

  const handleLoginClick = () => {
    // handleLogin(userType);
    toast.info(`WORK IN PROGRESS!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleGenerateDID = () => {
    const postData = {
      username: username,
      password: password,
      did: email,
      persona: userType == "govt" ? "Program Manager" : "Volunteer",
    };

    post("/v1/users", postData)
      .then((response) => {
        toast.success(`${response.message} for ${response.user}`, {
          position: "top-right",
          autoClose: 3000,
        });
        console.log("POST response:", response);
        handleLogin(userType);
      })
      .catch((error) => {
        toast.error(`Error:${error.message} `, {
          position: "top-right",
          autoClose: 3000,
        });
        console.error("Error posting data:", error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">Welcome to Credify</h1>
        <p>A trusted, transparent and self-sovereign identities for sourcing credible volunteers</p>
        <div className="user-type-options">
          <label>
            <input
              type="radio"
              value="govt"
              checked={userType === "govt"}
              onChange={() => setUserType("govt")}
            />
            Program Manager
          </label>
          <label>
            <input
              type="radio"
              value="volunteer"
              checked={userType === "volunteer"}
              onChange={() => setUserType("volunteer")}
            />
            Volunteer
          </label>
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleGenerateDID}>Generate DID</button>
        <button onClick={handleLoginClick}>Connect Using Your Wallet?</button>
      </div>
    </div>
  );
}

export default LoginPage;
