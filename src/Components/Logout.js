import React, { useState, useEffect } from "react";
import axios from "axios";

const Logout = (props) => {
    const logout = () => {

        window.sessionStorage.setItem("token", "notexists");
        window.sessionStorage.setItem("email", "");

    }


    return (
        <div>
            <h1> Logout</h1>
            <button onClick={logout}>Click here for Logout</button>

        </div>
    )
}
export default Logout; 