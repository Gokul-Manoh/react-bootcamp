import React from "react";
import "./LoginPage.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";

export function LoginPage({ onLogin }) {
  // use state to store the login credentials

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
        console.log("Login successful:", email);

        // Here you would typically store the user data and redirect
      } catch (error) {
        setErrors({ form: "Login failed. Please try again." });
      }
    }
  };

  return (
    <div>
      <p>Please login to your account</p>
    </div>
  );
}
