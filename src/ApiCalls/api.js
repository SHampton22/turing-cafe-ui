const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => {
    if (!response.ok) {
      throw new Error('error', response.text)
    }
    return response.json()
  })
}

export {fetchReservations}