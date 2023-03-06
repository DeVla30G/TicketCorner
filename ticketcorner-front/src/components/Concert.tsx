import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Button, Card, CardImg } from "react-bootstrap";
import TypeData from '../types/api.types';
import { render } from '@testing-library/react';

export default function Concert () {

  const [concerts, setConcerts] = useState<Array<TypeData>>([]);

  
// fetch all concerts from data
  useEffect(() => {
    //setConcerts(true);
    const getConcerts = () => {

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3030/concerts",
        {
          method: 'GET',
          redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => setConcerts(result))
        .catch(error => console.log('error', error));
    }
    getConcerts()
    console.log(concerts);
    //.then(setConcerts(false));
  }, []);

    return ( 
      <>
    
   {Array.isArray(concerts) && concerts.map((concert : any)=>{ return (
      <Card style={{ width: '18rem' }} className='card-wrap' >
        <CardImg variant="top" src="../images/show.png" ></CardImg>
        <Card.Body>
      <Card.Title className='concert-title'> {concert.artist} </Card.Title>
      <Card.Text className='artist'> {concert.tour} </Card.Text>
      <h5> {concert.date} </h5>
      <h6> ${concert.price} </h6>
      <Link to={{pathname: `/concert/${concert._id}`}}>  
        <Button variant="primary">Show event</Button>  
      </Link>
      </Card.Body>
      </Card>) })}
     
      </>
      
    );
  }