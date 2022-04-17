import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

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
        // <div>
        //     <h1> Service Provider Details:</h1>
        //     <ul>
        //         {
        //             products.map(p => (
        //                 <li key={p.id}> id: {p.id} Name: {p.name} <br></br> Email: {p.email} <br></br> Password: {p.password} <br></br> Phone No: {p.phoneno} <br></br>Service Type: {p.servicetype} </li>
        //             ))
        //         }
        //     </ul>
        // </div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>

                    <th> ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>PHONE NUMBER</th>
                    <th>SERVICETYPE  </th>

                    <th>ADDRESS</th>


                </tr>
            </thead>
            <tbody>
                {
                    products.map((p) => (
                        <tr>

                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>{p.password}</td>
                            <td>{p.phoneno}</td>
                            <td>{p.servicetype}</td>

                            <td>{p.address}</td>



                        </tr>
                    ))}
            </tbody>
        </Table>
    )
}
export default ServiceProviderInfo; 