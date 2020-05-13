import React, { useEffect, useState } from 'react';
import './App.css';
import { API_KEY, BASE_URL } from './constants/index';
import axios from 'axios';
import ImageContainer from './components/ImageContainer'
import Header from './components/Header'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {

  const [nasaData, setNasaData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
      .then(response => setNasaData(response.data))
  }, [startDate]);

  return (
    <div className="App">
      <Header />
      <div className='datePicker'>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </div>
      {
        nasaData && <ImageContainer nasaData={nasaData} />
      }
    </div>
  );
}

export default App;
