import React from 'react';
import { useParams } from "react-router-dom";
import {Button, Navbar, Col, Container, Form, Row, Nav, NavDropdown, InputGroup, Card, CardImg} from "react-bootstrap";
import '../style/Home.css';
import '../style/ConcertPage.css';
import NavBar from './NavBar';
import TypeData from '../types/api.types';

export const ConcertPage = () =>{


return (
<div>

    <Container fluid >
    <NavBar></NavBar>
    <Card style={{ width: '48rem' }} className='card-wrap'>
        <CardImg style={{ width: '18rem' }} className="img-concert" src="../images/ziggy-marley-SLIDE-multiple-220422.jpg"></CardImg>
        <Card.Body>
        
      <Card.Title className='concert-title'>  
      </Card.Title><Card.Text className='artist'> 
       </Card.Text>
       <h5> </h5>
      The last Concert of XYZ.
         It's spectacular <br/>
      <h6>Price: from 150 £ </h6>
      <Button variant="primary">Buy ticket</Button>
      </Card.Body>
    </Card>
    </Container>
    <Container >
         <Col xs={6} className='salle-wrap'>
             <CardImg className='salle' src="../images/PlanSalle_numéroté_vF.jpg"/>
         </Col>
    </Container>
</div>
)
}