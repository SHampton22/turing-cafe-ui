import React from 'react'
import './Resy.css'

export default function Resy({name, date, time, number}) {

  return (
    <div className='resy-card'>
      <p>{name}</p>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className='cancel-button'>Cancel</button>
    </div>
  )
}