import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
// import react, axios useState and UseEffect
// import GalleryList to display our troll data
// import Header and Footer


function App() {
  const [trolls, setTrolls] = useState([]);
  // Run some code ONE TIME when this component
  // "mounts" on the DOM:
  useEffect(() => {
    fetchTrolls();
  }, []); // Empty Array

  const fetchTrolls = () => {
    // Ask our server the troll data:
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('in GET /gallery', response)
      // Set troll React state variable
      const trolls = response.data;
      setTrolls(trolls);
    }).catch((error) => {
      console.log('fetchTrolls error:', error);
    })
  }
// return the header, GalleryList will go through the array of
// troll data and send back each GalleryItem
// and then the footer
    return (
      <div className="App">
        <Header />
        <div className="grid-container">
          <GalleryList trolls={trolls} fetchTrolls={fetchTrolls}/>
        </div>
        <Footer />
      </div>
    );
}

export default App;
