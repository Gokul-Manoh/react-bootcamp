import React from "react";
import "./LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function LoginPage({ onLogin }) {
  // use state to store the login credentials

  const handleLogin = () => {
    // Check the validity of the credentials
    onLogin("johnd")
  };

  return (
    <div>
      <h3 className="mt-4">Login</h3>
      <form>
        <input type="email" placeholder="Username" />
        <br/>
        <br/>
        <input type="password" placeholder="Password" />
        <br/>
        <br/>
        <button
          onClick={handleLogin}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
