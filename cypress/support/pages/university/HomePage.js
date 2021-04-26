class HomePage {
    visitHomePage(){
        cy.visit(Cypress.env("baseUrlUniversity"),{timeout:70000});
        //cy.pause()
        cy.wait(3000)
    }
}
export default HomePage;