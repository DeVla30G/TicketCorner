import React, { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import Concert from "./Concert";
import { REACT_APP_BASE_URL } from "../shared/config";

export const TypeNav = () => {

    useEffect(() => {
    
        const getType = () => {
 //axios.get(´${process.env.REACT_APP_BASE_URL}/concerts/type´)
        }
    })

    return (
        <>
        <Navbar bg="light" expand="lg">
            <h1>Rock{/*concert.type*/}</h1>
          </Navbar>
        </>
    )
}

export default TypeNav;