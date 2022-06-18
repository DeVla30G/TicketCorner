import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";






export const Login = () => {


  //const LoggedIn = sessionStorage.getItem && sessionStorage.getItem.length;

  const [email, setEmail] = React.useState<string>();
  const [pwd, setPassword] = React.useState<string>();

  const Submit = () => {
    if (!email) {
      alert('wrong mail');
      return;
    }
    if (!pwd || !pwd.length) {
      alert('please enter a password');
      return;
    }

    axios.post('login', {email, pwd }).then(
      ({data}) => {
        console.log({data})
        sessionStorage.setItem('token', data.jwt);
        sessionStorage.setItem('user', data);
        window.location.reload();
        <Link to="account"></Link>
      },
      (err) => alert(' error'))
  }



  //if (LoggedIn) {
    //return <Navigate replace to="/account" />
  //}
  return (
    <Container>
      <Row >
        <Col lg={{ span: 6, offset: 4 }} className="login" >
          <h1>LOGIN</h1>
          <br/>
          <br/>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="warning" onClick={() => Submit()}>Login</Button>
            <br/>
            <br/>
            <p>If not member yet, please signup :</p>
            <Link to="register">Register</Link>
          </Form>
        </Col>

      </Row>
    </Container>
  )
  }


export default Login;
