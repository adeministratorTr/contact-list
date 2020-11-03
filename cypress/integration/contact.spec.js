/* eslint-disable no-undef */
/// <reference types="cypress" />
describe('contact page e2e test', () => {
  it('should render Loading when API request still fetching', () => {
    cy.visit('/')
    cy.contains('Loading...')
  })
  it('should render surname category buttons', () => {
    cy.get('.categorize__button__container')
  })

  it('should click surname category button and have active class', () => {
    cy.get('.categorize__button__container')
    cy.get('.group__button').first().click().should('have.class', 'group__button--active')
  })

  it('should click surname category button and other buttons should not have active class', () => {
    cy.get('.categorize__button__container')
    cy.get('.group__button').first().click().should('have.class', 'group__button--active')
    cy.get('.group__button').last().should('have.class', 'group__button')
    cy.get('.group__button').last().should('not.have.class', 'group__button--active')
  })
})