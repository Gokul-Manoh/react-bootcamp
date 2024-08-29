import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

function App() {
  // Define usestate value to check if the user is logged in and to store the username
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Move this to state to trigger re-render
  // let isLoggedIn = false
  let userName = "";

  // Function to handle login
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    userName = name;
    console.log("User logged in: ", name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  // Function to handle logout

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Container>
        {/* Add condition to check if the user is logged in and redirect to homepage or push the user to login page */}
        {!isLoggedIn && <LoginPage onLogin={handleLogin} />}
        {isLoggedIn && <HomePage handleLogout={handleLogout} />}
        {/* Routing to be added here */}
      </Container>
    </Router>
  );
}

export default App;
