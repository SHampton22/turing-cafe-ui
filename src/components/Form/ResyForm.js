import React, {  useEffect, useState } from 'react'
import './ResyForm.css'

export default function ResyForm({addResy}) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [number, setNumber] = useState(null)

  const submitResy = event => {
    event.preventDefault()
    const newResy = {
      name,
      date,
      time,
      number
    }
    addResy(newResy)
    clearForm()
  }

  const clearForm = () => {
    setName('')
    setDate('')
    setTime('')
    setNumber(null)
  }

  return (
    <form className='resy-form'>
      <input
        placeholder='Name'
        title='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder='Date (mm/dd)'
        title='date'
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        placeholder='Time'
        title='time'
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <input
        placeholder='Number of guests'
        title='number'
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button className='submit-button' onClick={event => submitResy(event)}>Make Reservation</button>
    </form>
  )
}