describe('ShapeShift home page', () => {
  it('Loads', () => {
    cy.visit('')
    // cy.wait('/connect-wallet')
    cy.getBySel('connect-wallet').click()
  })
})
