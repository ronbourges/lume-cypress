import userData from '../fixtures/user-data.json'

describe('Orange HRM test', () => {
  const selectorsList = {
    userNameField:  "[name='username']",
    passwordField: "[name='password']",
    loginButton:  "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrondCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']"


  }


  it.only('User Info Update -success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type (userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
  })
     it('login-fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type (userData.userFail.username)
    cy.get(selectorsList.passwordField).type (userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrondCredentialAlert)
    
  })
})