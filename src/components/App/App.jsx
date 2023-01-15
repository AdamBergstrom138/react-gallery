import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem'; //do I need this?
import LikeButton from '../LikeButton/LikeButton';

function App() {
  const [trolls, setTrolls] = useState([]);

  // Run some code ONE TIME when this component
  // "mounts" on the DOM:
  useEffect(() => {
    fetchTrolls();
  }, []); // Empty Array here is the stop sign 🛑

  const fetchTrolls = () => {
    // Ask our server for the creatures data:
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('in GET /gallery', response)
      // Set our creatures React state variable to
      // have the value of our array of creature objects:
      const trolls = response.data;
      setTrolls(trolls);
    }).catch((error) => {
      console.log('fetchTrolls error:', error);
    })
  }



  
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Gallery of My Life</h1> */}
          <h1 className="App-title">Gallery of Trolls</h1>
        </header>
        <p>Gallery goes here</p>
        <div className="grid-container">
          <GalleryList trolls={trolls} fetchTrolls={fetchTrolls}/>
          {/* <LikeButton trolls={trolls} fetchTrolls={fetchTrolls} /> */}
        </div>
      </div>
    );
}

export default App;
