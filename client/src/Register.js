import React, { useState } from "react";
import "./style.css";
import "./bootstrap.min.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import register_image from "./images/register.jpeg";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/register",
                {
                    name: name,
                    email: email,
                    password: password,
                },
                { withCredentials: true }
            )
            .then((res) => {
                if (res.data.isAuth === 1) {
                    setIsAuth(true);
                }
            })
            .catch((e) => console.log(e));
    };
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-2">
                            <img
                                src={register_image}
                                alt="Image"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-6 contents">
                            <div className=" justify-content-center">
                                <div className="mb-4">
                                    <h3>
                                        Welcome to <strong>NodeChat</strong>
                                    </h3>
                                    <h5>Register an account</h5>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet elit.
                                        Sapiente sit aut eos consectetur
                                        adipisicing.
                                    </p>
                                </div>
                                <form action="#" method="post">
                                    <div className="form-group first">
                                        {/* <label htmlFor="username">Username</label> */}
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group first">
                                        {/* <label htmlFor="username">Username</label> */}
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group last mb-4">
                                        {/* <label htmlFor="password">Password</label> */}
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="d-flex mb-5 align-items-center">
                                        <label className="control control--checkbox mb-0">
                                            <span className="caption">
                                                Remember me
                                            </span>
                                            <input
                                                type="checkbox"
                                                defaultChecked="checked"
                                            />
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
                                        defaultValue="Log In"
                                        className="btn text-white btn-block btn-primary"
                                        style={{
                                            backgroundColor: "#7269ef",
                                            borderColor: "#7269ef",
                                        }}
                                        onClick={submitForm}
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
