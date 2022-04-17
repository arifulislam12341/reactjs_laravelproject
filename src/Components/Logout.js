import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, } from "react-bootstrap";
import axios from "axios";

const Logout = (props) => {
    let history = useHistory();
    const logout = () => {

        window.sessionStorage.setItem("token", "notexists");
        window.sessionStorage.setItem("email", "");
        history.push("/Registration");

    }


    return (
        <div>
            <h1> Logout</h1>
            {/* <button onClick={logout}> Logout</button> */}
            <br></br>
            <Button variant="warning" type="submit" onClick={logout}>
                LOGOUT
            </Button>
        </div>
    )
}
export default Logout; 