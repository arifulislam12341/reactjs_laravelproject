import React, { useState, useEffect } from "react";
import axios from "axios";

const ServiceProviderInfo = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/serviceproviderInfo")
            .then(resp => {
                var a = window.sessionStorage.getItem("token");
                console.log(a);
                if (a == "exists") {
                    console.log(resp.data);
                    setProducts(resp.data);
                }

            }).catch(err => {
                console.log(err);
                console.log("not found");
            });
    }, []);


    return (
        <div>
            <h1> Service Provider Details:</h1>
            <ul>
                {
                    products.map(p => (
                        <li key={p.id}> id: {p.id} Name: {p.name} <br></br> Email: {p.email} <br></br> Password: {p.password} <br></br> Phone No: {p.phoneno} <br></br>Service Type: {p.servicetype} </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ServiceProviderInfo; 