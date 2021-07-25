import React from "react";
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./style.css";
import "./bootstrap.min.css";
import register_image from "./images/register.jpeg";
import { userData } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/user",
        {
          email: Email,
          password: Password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.user);
        if (res.data.isAuth === 1) {
          // dispatch(userData(res.data.user));
          setIsAuth(true);
        }
      })

      .catch((e) => {
        console.log(e);
        alert(e);
      });
  };
  return (
    <>
      <div className="content" style={{ height: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img src={register_image} alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 contents">
              <div className=" justify-content-center">
                <div className="mb-4">
                  <h3>
                    Sign In to <strong>Chat App</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form onSubmit={submitForm} method="post">
                  <div className="form-group first">
                    {/* <label htmlFor="username">Username</label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group last mb-4">
                    {/* <label htmlFor="password">Password</label> */}
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Remember me</span>
                      <input type="checkbox" defaultChecked="checked" />
                      <div className="control__indicator" />
                    </label>
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <input
                    type="submit"
                    value="Log In"
                    className="btn text-white btn-block btn-primary"
                    style={{
                      backgroundColor: "#7269ef",
                      borderColor: "#7269ef",
                      cursor: "pointer",
                    }}
                    // onClick={submitForm}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAuth ? <Redirect to="/dashboard" /> : false}
    </>
  );
}

export default Login;
