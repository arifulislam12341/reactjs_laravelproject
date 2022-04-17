import React, { useState, userEffect } from "react";
import axios from "axios";
import { Form, Button, } from "react-bootstrap";

import { useHistory } from "react-router-dom";



const Login = () => {
    let history = useHistory();

    let [token, setToken] = useState("");
    let [email, setName] = useState("");
    let [password, setPassword] = useState("");

    const loginSubmit = () => {
        var obj = { email: email, password: password };
        axios.post("http://127.0.0.1:8000/api/loginSubmit", obj)
            .then(resp => {


                var token = resp.data;
                console.log(token);
                var user = { userId: token.userid, access_token: token.token };
                localStorage.setItem('email', JSON.stringify(user));
                console.log(localStorage.getItem('user'));
                if (token.token != null) {
                    window.sessionStorage.setItem("token", "exists");
                    // req.session.user = token.token;
                    window.sessionStorage.setItem("email", obj.email);
                    alert("Login successful");
                    history.push("/ServiceProviderInformation");
                }

            }).catch(err => {
                console.log(err);
            });


    }

    return (
        <div>
            <h1 >Login</h1>
            <form>
                <b>Email:</b><br></br><input type="text" value={email} onChange={(e) => setName(e.target.value)}></input> <br></br>
                <b>Password:</b><br></br><input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

            </form>
            {/* <button onClick={loginSubmit}>Login</button> */}
            <br></br>
            <Button variant="success" type="submit" onClick={loginSubmit}>
                LOGIN
            </Button>

        </div>
        // <Form>
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setName(e.target.value)} />

        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //     </Form.Group>

        //     <Button variant="primary" type="submit" onClick={loginSubmit}>
        //         Submit
        //     </Button>
        // </Form>

    )
}
export default Login; 