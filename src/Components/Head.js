import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
    var a = window.sessionStorage.getItem("token");

    return (
        <div>

            <Link to="/">Login</Link>

            <br></br> <Link to="/Registration">Registration</Link><br></br>
            <Link to="/ServiceProviderInformation">Service Provider Information</Link> <br></br>
            <Link to="/update">Update</Link> <br></br>
            <Link to="/Delete">Delete</Link> <br></br>
            <Link to="/logout">Logout</Link>
        </div>
    )


}

export default Head;