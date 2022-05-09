import axios from "axios";
import React from "react";
import { useState } from "react";

function Login() {
  const [showSignUp, setShowSignUp] = useState(true);
  const [formData, setFormData] = useState({});

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
      const res = await axios.post("/api/auth/login", formData);
      console.log("ii", res.data);
      if (res.status == 200 || res.status == 201) {
        localStorage.setItem("token", res.data.encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", formData);
      console.log("ii", res.data);
      if (res.status == 200 || res.status == 201) {
        localStorage.setItem("token", res.data.encodedToken);
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
