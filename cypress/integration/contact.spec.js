/* eslint-disable no-undef */
/// <reference types="cypress" />
describe('contact page e2e test', () => {
  it('should render Loading when API request still fetching', () => {
    cy.visit('/')
    cy.contains('Loading...')
  })
})