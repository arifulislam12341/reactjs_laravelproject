import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Delete = (props) => {
    let history = useHistory();
    var a = window.sessionStorage.getItem("token");
    if (a == "notexists") {
        alert("Kindly login first")
        history.push("/");
    }

    const deletePress = () => {
        var email = window.sessionStorage.getItem("email");
        console.log(email);
        var obj = { email: email };
        if (email != "") {
            axios.post("http://127.0.0.1:8000/api/serviceproviderDelete", obj)
                .then(resp => {

                    alert("Account Deleted");
                    window.sessionStorage.setItem("email", "");

                    history.push("/");
                }).catch(err => {
                    console.log(err);
                    alert(err);
                });
        }



    }


    return (
        <center>
            <div>


                <h3>DELETE YOUR ACCOUNT</h3>
                {/* <button onClick={deletePress}>Delete</button> */}
                <br></br>
                <Button variant="danger" type="submit" onClick={deletePress}>
                    DELETE
                </Button>

            </div>
        </center>
    )
}
export default Delete; 