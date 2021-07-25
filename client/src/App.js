import "./App.css";
import "./app.min.css";
import "./bootstrap.min.css";
import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
        </>
    );
}

export default App;
