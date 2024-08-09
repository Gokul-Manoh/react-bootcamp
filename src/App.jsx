import React from "react";
import { Header } from "./components/Header";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

function App() {
  // Define usestate value to check if the user is logged in and to store the username

  // Move this to state to trigger re-render
  let isLoggedIn = false
  let userName = ""

  // Function to handle login
  const handleLogin = (name) => {
    isLoggedIn = true
    userName = name
  };

  // Function to handle logout

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <Container>
        {/* Add condition to check if the user is logged in and redirect to homepage or push the user to login page */}
        <LoginPage onLogin={handleLogin} />
        <HomePage /> 
      {/* Routing to be added here */}
      </Container>
    </Router>
  );
}

export default App;
