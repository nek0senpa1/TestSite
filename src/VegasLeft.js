import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

function VegasLeft() {

    const [hotels, setHotels] = useState();
    const [error, setError] = useState();
    
    useEffect(() => {
    // fetch('http://localhost:8888/api/hotels/',
    // {
	// 	method: 'HEAD',
	// 	mode: 'no-cors',
	// 	header: {
	// 		'Access-Control-Allow-Origin': '*',
	// 	},
	// 	// withCredentials: true,
    //     // crossdomain: true,
    // })
        axios.get( 'http://localhost:8888/api/hotels')
        .then(res => {
            console.log(res)
            setHotels(res.data)
        })
        .catch(err => {
            console.log(err)
            setError(err)
        });
    }, []);


  return (
    <div className="App">
      <ul>
          <li>Item x</li>
          <li>Item x</li>
          <li>Item x</li>
          <li>Item x</li>
          <li>Item x</li>
          <li>Item x</li>
          <li>Item x</li>
          <li>Item x</li>
          <li>Item x</li>
          <li>Item x</li>
      </ul>
    </div>
  );
}

export default VegasLeft;
