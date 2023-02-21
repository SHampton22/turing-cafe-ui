const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => {
    if (!response.ok) {
      throw new Error('error', response.text)
    }
    return response.json()
  })
}

const postReservation = () => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
    .then(response => {
      if (!response.ok) {
        throw new Error('error', response.text)
      }
      return response.json()
    })
  })
}

export {fetchReservations, postReservation}