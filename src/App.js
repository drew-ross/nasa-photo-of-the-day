import React, { useEffect, useState } from 'react';
import './App.css';
import { API_KEY, BASE_URL } from './constants/index';
import axios from 'axios';
import ImageContainer from './components/ImageContainer'
import Header from './components/Header'

function App() {

  const [nasaData, setNasaData] = useState(null);
  useEffect(() => {
    axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
      .then(response => setNasaData(response.data))
  }, []);

  return (
    <div className="App">
      <Header />
      {
        nasaData && <ImageContainer nasaData={nasaData}/>
      }
    </div>
  );
}

export default App;
