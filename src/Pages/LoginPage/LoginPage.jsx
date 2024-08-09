import React from "react";
import "./LoginPage.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";

export function LoginPage({ onLogin }) {
  // use state to store the login credentials

  const handleLogin = () => {
    // Check the validity of the credentials
    onLogin("johnd")
  };

  return (
    <MDBContainer className="gradient-form">
      <MDBRow>
        <MDBCol md="5" className="mb-5">
          <div className="d-flex justify-content-center flex-column ms-md-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">EKart</h4>
            </div>

            <p>Please login to your account</p>

            <MDBInput
              wrapperClass="mb-4"
              placeholder="Username/Email Address"
              id="txtusername"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Password"
              id="txtpassword"
              type="password"
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <button
                className="mb-4 w-100 gradient-custom-2"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
