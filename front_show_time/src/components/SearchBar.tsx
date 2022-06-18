
import React from 'react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Button, Col, Form, Card, CardImg} from "react-bootstrap";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import TypeData from '../types/api.types';
import TextField from '@material-ui/core/TextField';

import { InputBase } from '@material-ui/core';

const searchUrl = 'http://localhost:3030/concerts';

export default function SearchBar () {

    type Results = {
        value: string[];
        artist: string[];
        date: string[];
        options: "";
        query: string[];
    }

    //     set search parameters
    //     search concerts by artist and date
const [searchParam] = useState(["artist", "date"]);
const [items, setItems] = useState<any>(); //set all data
const [noItems, setNoItems] = useState(false);
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);


const [isLoading, setIsLoading] = useState(false);
const [options, setOptions] = useState([]);

const [concerts, setConcerts] = useState<Array<TypeData>>([]);

     //     set search query 
const [q, setQ] = useState("");

const [query, setQuery] = useState("");

const changeHandler = (e: any) => {
    e.preventDefault();
    if (e.target.value.trim() === "") setNoItems(false);

    setQuery(e.target.value);
};
// const inputRef = useRef();
// if (inputRef.current) inputRef.current.value = "";




const getConcerts = (query: any) => {
  setIsLoading(true);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`${searchUrl}?q=${query}+in:concerts=10&per_page=50`, {
    method: 'GET',
    redirect: 'follow'
  })
    .then(response => response.json())
    .then(({items}) => {
      const options = items.map((i: any) => ({
        id: i.id,
        artist: i.artist,
        date: i.date
      }));
      setOptions(options);
      setIsLoading(false);
    });
  // console.log(i)
  //.then(setConcerts(false));
}

const filterBy = ([]) => true; 

return (

<div>
    <Col xs={4}>
    <Form.Control placeholder="Search"  />
    </Col>
    <button type="button" className="btn btn-warning"></button>
 <div className="col-md-4">
 <Fragment >
  <Form.Group >
    <AsyncTypeahead filterBy={['artist', 'date']}
      id="async-typeahead-single"
      labelKey="search"
      onChange={undefined}
      // options={options}
      placeholder="Choose an artist or date of event..."
      options={[]} 
      isLoading={false} 
      onSearch={getConcerts} 
      renderInput={(params) => {
        return <><InputBase></InputBase><span> {options} </span></>;
      }}
        />
  </Form.Group>
  </Fragment>
   </div> 
   <Link to={("/")}><Button type="button" className="btn btn-warning">
    <svg width="15px" height="15px">
        <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
    </svg>
   </Button></Link>
</div>

)


}