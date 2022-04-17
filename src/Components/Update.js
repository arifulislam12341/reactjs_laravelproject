import React, { useState, userEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, } from "react-bootstrap";
import axios from "axios";

const Update = () => {

    //let [token, setToken] = useState("");
    let history = useHistory();
    let [name, setName] = useState("");
    // let [email, setEmail] = useState("");
    // let [password, setPassword] = useState("");
    let [phoneno, setPhone] = useState("");
    let [servicetype, setServicetype] = useState("");
    let [address, setAddress] = useState("");
    var a = window.sessionStorage.getItem("token");

    const updateSubmit = () => {
        if (a == "exists") {
            var email = window.sessionStorage.getItem("email");
            console.log("your email is", email);
            var obj = { name: name, email: email, phoneno: phoneno, servicetype: servicetype, address: address };
            axios.post("http://127.0.0.1:8000/api/serviceproviderUpdate", obj)
                .then(resp => {

                    alert("Update Successful", a);
                    axios.get("http://127.0.0.1:8000/api/email",)
                    history.push("/ServiceProviderInformation");
                    // history.push("/Registration");

                }).catch(err => {
                    console.log(err, email);
                    alert(err,);
                });


        }
    }


    return (
        <div>
            <h2>Update Serviceprovider</h2>
            <form>
                <b>Enter  Name:</b><br></br> <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
                <b>Enter Phone:</b> <br></br> <input type="text" value={phoneno} onChange={(e) => setPhone(e.target.value)}></input><br></br>
                <b>SetServicetype:</b> <br></br><input type="text" value={servicetype} onChange={(e) => setServicetype(e.target.value)}></input><br></br>

                <b>Enter Address:</b> <br></br> <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input><br></br>


            </form >
            {/* <button onClick={updateSubmit}>Update </button> */}
            <br></br>
            <Button variant="success" type="submit" onClick={updateSubmit}>
                UPDATE
            </Button>
        </div >

    )

}

export default Update; 
