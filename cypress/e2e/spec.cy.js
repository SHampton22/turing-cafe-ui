describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'example'})
    cy.visit('http://localhost:3000')
  });

  it('should see the title of the application', () => {
   cy.get('h1').contains('Turing Cafe Reservations')
  })

  it('should see the reservation form', () => {
    cy.get('.resy-form')
   })

  it('should see all reservations', () => {
    cy.get('.resy-container').find('.resy-card').should('have.length', 9)
   })

  it('should be able to make a reservation and have it display', () => {
    cy.get('input[title="name"]')
    .type('Sarah').should('have.value', 'Sarah')
    .get('input[title="date"]')
    .type('02/21').should('have.value', '02/21')
    .get('input[title="time"]')
    .type('7:45').should('have.value', '7:45')
    .get('input[title="number"]')
    .type(2).should('have.value', 2)
    .get('.submit-button').click()
    cy.get('.resy-container').find('.resy-card').should('have.length', 10)
  })

  

})