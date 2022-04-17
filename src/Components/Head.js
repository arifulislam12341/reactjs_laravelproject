import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
    var a = window.sessionStorage.getItem("token");

    return (
        <div>

            <Link to="/">Login</Link>

            <Link to="/Registration">Registration</Link>
            <Link to="/ServiceProviderInformation">Service ProviderInformation</Link>

            <Link to="/update">Update</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )


}

export default Head;