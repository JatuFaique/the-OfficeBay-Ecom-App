import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const [showSignUp, setShowSignUp] = useState(true);
  const [authState, authDispatch] = useAuth();
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const field = event.target.name;
    setFormData({ ...formData, [field]: event.target.value });
  };

  const signUpToggle = () => {
    setShowSignUp(!showSignUp);
    console.log(showSignUp);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    // const { email, password } = formData;
    try {
      authDispatch({
        type: "REQUEST_LOGIN",
      });
      const res = await axios.post("/api/auth/login", formData);

      if (res.status == 200 || res.status == 201) {
        localStorage.setItem("token", res.data.encodedToken);
        const token = localStorage.getItem("token");
        const email = res.data.foundUser.email;
        const userInfo = { email, token };
        authDispatch({
          type: "SUCCESS_LOGIN",
          payload: userInfo,
        });
        navigate("/");
      }
    } catch (error) {
      console.log("login failed", error.response.data.errors);
      authDispatch({
        type: "FAILED_LOGIN",
        payload: error.response.data.errors,
      });
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      authDispatch({
        type: "REQUEST_SIGNUP",
      });
      const res = await axios.post("/api/auth/signup", formData);

      if (res.status == 200 || res.status == 201) {
        localStorage.setItem("token", res.data.encodedToken);
        const token = localStorage.getItem("token");
        // console.log(res.data);
        const email = res.data.createdUser.email;
        const userInfo = { email, token };
        authDispatch({
          type: "SIGNUP_SUCCESS",
          payload: userInfo,
        });
        console.log("uiui");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showSignUp ? (
        <main class="auth-container">
          <div class="auth-box p-1">
            <p>Please Sign in</p>
            <form onSubmit={handleSignIn} className="userForm">
              <section class="input-box ">
                <div class="input-field">
                  <input
                    name="email"
                    id="email-field"
                    type="text"
                    pattern=".*\S.*"
                    required
                    onChange={handleOnChange}
                  />
                  <label for="email-field" class="placeholder">
                    Enter Email
                  </label>
                  {authState.errorMessage ? (
                    <span class="error-message" aria-live="polite">
                      The email is invalid
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </section>
              <section>
                <div class="input-field">
                  <input
                    id="email-field"
                    name="password"
                    type="text"
                    pattern=".*\S.*"
                    required
                    onChange={handleOnChange}
                  />
                  <label for="password-field" class="placeholder">
                    Password
                  </label>
                  {authState.errorMessage ? (
                    <span class="error-message" aria-live="polite">
                      Invalid Credentials
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </section>
              <button class="btn-prim" type="submit">
                Sign In
              </button>
            </form>
            <button class="btn-secd" onClick={signUpToggle}>
              Create a New Account
            </button>
          </div>
        </main>
      ) : (
        <main class="auth-container">
          <div class="auth-box p-1">
            <form className="userForm" onSubmit={handleSignUp}>
              <p>Please Sign Up</p>
              <section class="input-box ">
                <div class="input-field">
                  <input
                    id="email-field"
                    type="text"
                    pattern=".*\S.*"
                    required
                    name="firstname"
                    onChange={handleOnChange}
                  />
                  <label for="email-field" class="placeholder">
                    First Name
                  </label>
                </div>
              </section>
              <section class="input-box ">
                <div class="input-field">
                  <input
                    id="email-field"
                    type="text"
                    pattern=".*\S.*"
                    required
                    name="lastname"
                    onChange={handleOnChange}
                  />
                  <label for="email-field" class="placeholder">
                    Last Name
                  </label>
                </div>
              </section>
              <section class="input-box ">
                <div class="input-field">
                  <input
                    id="email-field"
                    type="text"
                    pattern=".*\S.*"
                    required
                    name="email"
                    onChange={handleOnChange}
                  />
                  <label for="email-field" class="placeholder">
                    Enter Email
                  </label>
                </div>
              </section>
              <section>
                <div class="input-field">
                  <input
                    id="email-field"
                    type="text"
                    pattern=".*\S.*"
                    required
                    name="password"
                    onChange={handleOnChange}
                  />
                  <label for="password-field" class="placeholder">
                    Password
                  </label>
                </div>
              </section>
              <button class="btn-prim" type="submit">
                Sign Up
              </button>
            </form>
            <button class="btn-secd" onClick={signUpToggle}>
              Already have an account, Sign In
            </button>
          </div>
        </main>
      )}
    </>
  );
}

export default Login;
