import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossorigin="anonymous"
        ></link>
      </head>
      <div
        class="w-75 mx-auto"
        style={{
          padding: "20px",
          marginTop: "100px",
          backgroundColor: "#c5c6d0",
          borderRadius: "10px",
        }}
      >
        <h2>Admin Login</h2>
        <br />
        <br />
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <br />
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <Link to="/admin-panel">
                <button
                  type="button"
                  class="btn btn-success mt-4"
                  style={{ paddingLeft: "100px", paddingRight: "100px" }}
                >
                  Login
                </button>
              </Link>
            </div>
            <div class="col">
              <Link to="/">
                <button
                  type="button"
                  class="btn btn-info mt-4"
                  style={{ paddingLeft: "100px", paddingRight: "100px" }}
                >
                  Return
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
