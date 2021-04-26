describe("Feature contact us",()=>
{
    it.only('Should be able to submit contact us with valid data', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#contact-us").invoke("removeAttr","target").click({force :true})
        //cy.get('#contact-us > .thumbnail').click({force: true});
        cy.title().should("include","WebDriver")
        cy.url().should("include","/Contact-Us/contactus.html")
        cy.document().should("have.property","charset","UTF-8")
        cy.get('[name="first_name"]').type("Max");
        cy.get('[name="last_name"]').type("Marko");
        cy.get('[name="email"]').type("mm@gmail.com");
        cy.get('textarea.feedback-input').type("Comments");
        cy.get('[type="submit"]').click();
        cy.get('h1').should("have.text","Thank You for your Message!")
        cy.get('h1').contains("Thank You for your Message!")
        cy.contains("Thank You for your Message!")
    });

    it('Should not be able to submit contact us with empty data', () => {
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[type="submit"]').click();
        cy.get("body").contains("Error: all fields are required")
        cy.contains("Error: all fields are required")
    });
    
    it('Should not be able to submit contact us with email field invalid format', () => {
        
    });

    it('Should be able to submit reset the data', () => {
        
    });


});