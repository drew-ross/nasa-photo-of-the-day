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
  const [formattedDate, setFormattedDate] = useState(null);

  const dateFormatter = () => {
    setFormattedDate(() => {
      let dateString = '';
      let startDateString = String(startDate);
      let dateStringArr = startDateString.split(' ');
      let extraZero = '-'
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
      dateString += dateStringArr[3]
      months.forEach((month, index) => {
        if(startDateString.includes(month)) {
          if (index + 1 < 10) {
            extraZero = '-0';
          }
          dateString += `${extraZero}${index + 1}`
        }
      })
      console.log(dateStringArr[2])
      dateString += ('-' + dateStringArr[2]);
      return dateString;
    })
  }

  useEffect(dateFormatter, [startDate])

  useEffect(() => {
    if(formattedDate !== null) {
      axios.get(`${BASE_URL}apod?api_key=${API_KEY}&date=${formattedDate}`)
      .then(response => setNasaData(response.data))
    }
  }, [formattedDate]);

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
