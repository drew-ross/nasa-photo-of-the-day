import React, { useEffect, useState } from 'react';
import './App.css';
import { API_KEY, BASE_URL } from './constants/index';
import axios from 'axios';
import ImageContainer from './components/ImageContainer'

function App() {

  const [nasaData, setNasaData] = useState(null);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=l8nibSn2W5RBux8ZWtLa4JMppgV9a2a7lNavHJiD`)
      .then(response => setNasaData(response.data))
  }, []);

  return (
    <div className="App">
      {
        nasaData && <ImageContainer nasaData={nasaData}/>
      }
    </div>
  );
}

export default App;
