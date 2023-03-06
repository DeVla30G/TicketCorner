import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Button, Navbar, Col, Container, Form, Row, Nav, NavDropdown, InputGroup, Card, CardImg} from "react-bootstrap";
import Sidebar from './SideBar';
import '../style/Home.css';
import '../style/ConcertPage.css';
import NavBar from './NavBar';
import TypeData from '../types/api.types';


export const Type = () =>{

    const [types, setTypes] = useState<Array<TypeData>>([]);

  
    // fetch all concerts from data
    useEffect(() => {

      const [concerts, setConcerts] = useState<Array<TypeData>>([]);

      const getConcerts = () => {
    
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost:3030/concerts/type", {
          method: 'GET',
          redirect: 'follow'
        })
          .then(response => response.json())
          .then(result => setConcerts(result))
          .catch(error => console.log('error', error));
      }
       getConcerts();

      //setTypes(true);
      const getTypes = () => {
    
        var WhatYouClick = `${concerts/*.type*/}`;
      
        fetch(`http://localhost:3030/concerts/type/${WhatYouClick}`, {
          method: 'GET',
          redirect: 'follow'
        })
          .then(response => response.json())
          .then(result => setTypes(result))
          .catch(error => console.log('error', error));
      }
  getTypes()
    // console.log(concerts)
    //.then(setConcerts(false));
}, []);


return (
<div>

    <Container fluid >
    {types.map((types : any)=>{ return ( 
      <Card style={{ width: '18rem' }} className='card-wrap' >
        <CardImg variant="top" src="../images/ziggy-marley-SLIDE-multiple-220422.jpg" ></CardImg>
        <Card.Body>
      <Card.Title className='concert-title'> {types.tour} </Card.Title>
      <Card.Text className='artist'> {types.artist} </Card.Text>
      <h5> {types.date} </h5>
      The last Concert of {types.artist}.
         It's spectacular <br/>
      <h6> ${types.price} </h6>
      <Link to={{pathname: `/concert/${types._id}`}}>  <Button variant="primary">Show event</Button>  </Link>
      </Card.Body>
      </Card>) })}
    </Container>
</div>
)
}

export default Type;