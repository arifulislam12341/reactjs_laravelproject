import React, { useState, userEffect } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Registration = () => {
    //let [token, setToken] = useState("");
    let history = useHistory();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phoneno, setPhone] = useState("");
    let [servicetype, setServicetype] = useState("");
    let [address, setAddress] = useState("");


    const registrationSubmit = () => {
        var obj = { name: name, email: email, password: password, phoneno: phoneno, servicetype: servicetype, address: address };
        axios.post("http://127.0.0.1:8000/api/serviceproviderRegistration", obj)
            .then(resp => {
                // var token = resp.data;
                // console.log(token);
                // var user = { userId: token.userid, access_token: token.token };
                // localStorage.setItem('email', JSON.stringify(user));
                // console.log(localStorage.getItem('user'));
                alert("Registration successful");
                history.push("/");
            }).catch(err => {
                console.log(err);
                alert(err);
            });


    }

    return (
        <div>
            <h1>Registration</h1>
            <form>
                <b>Name:</b><br></br><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
                <b>Email:</b><br></br><input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
                <b>Password:</b> <br></br><input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
                <b>Phone:</b><br></br> <input type="text" value={phoneno} onChange={(e) => setPhone(e.target.value)}></input><br></br>
                <b>setServicetype:</b> <br></br><input type="text" value={servicetype} onChange={(e) => setServicetype(e.target.value)}></input><br></br>
                <b>Address:</b><br></br> <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input><br></br>

            </form>
            {/* <button onClick={registrationSubmit}>Signin</button> */}
            <br></br>
            <Button variant="success" type="submit" onClick={registrationSubmit}>
                REGISTER
            </Button>

        </div>

    )
}
export default Registration; 