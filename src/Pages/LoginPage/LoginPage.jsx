import React, { useState } from "react";
import "./LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputField } from "../../components/InputField/InputField";

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      try {
        // const userData = await login(email, password);
        onLogin(email);
        console.log("Login successful:");

        // Here you would typically store the user data and redirect
      } catch (error) {
        setErrors({ form: "Login failed. Please try again." });
      }
    }
  };

  return (
    <div className="login-container">
      <p>Please login to your account</p>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <h2>Login</h2>
          <div>
            <InputField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              errorMsg={errors.email}
            />
          </div>
          <div>
            <InputField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              errorMsg={errors.password}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
