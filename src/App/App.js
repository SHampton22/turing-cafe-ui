import React, {  useEffect, useState } from 'react';
import { fetchReservations } from '../ApiCalls/api';
import Resy from '../components/Resy';
import './App.css';

function App()  {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetchReservations()
    .then(data => setReservations(data))
    .catch(error => console.log(error))
  }, [])
  
   const displayReservations = reservations.map(resy => {
    return <Resy 
              key={resy.id}
              name={resy.name}
              date={resy.date}
              time={resy.time}
              number={resy.number}
            />
   })
  
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {displayReservations}
        </div>
      </div>
    )
  
}

export default App;
