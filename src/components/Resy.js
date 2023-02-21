import React from 'react'

export default function Resy({name, date, time, number}) {

  return (
    <div>
      <p>{name}</p>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}