describe("Feature contact us - Store ",() => {
    it('should be able to submit a succeful submission via contact us form', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.xpath("//div[@id='field_11']").type("Max");
        cy.get('#ContactUsFrm_email').type("mmarko@gmail.com");
        cy.get('#ContactUsFrm_email').should("have.attr","name","email")
        cy.get('#ContactUsFrm_enquiry').type("Message");
        cy.get('.col-md-6 > .btn').click();
        //cy.get('.mb40 > .btn').click(); > Muestra por consola f12
        //Non command cypress 
        //console.log("Holaaa")
        cy.log("Este muestra")
        cy.xpath("//p[.='Your enquiry has been successfully sent to the store owner!']").should('have.text',"Your enquiry has been successfully sent to the store owner!")
    });

    it('Use', () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").then(function(itemHeadertext){
            console.log("Testt   " + itemHeadertext.text())
        })
        const makeLink = cy.get("a[href*='product/category&path']").contains("Makeup").click()

        cy.get("h1 .maintext").then(($text) => {
            const text = $text.text();
            cy.log("Texto del header .." + text);
            expect(text).is.eq("Makeup")
        })
    });

    it.only('Validade properties', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        
        //cypress command
        cy.contains("#ContactUsFrm","Contact Us Form").find("#field_11").should("contain","First name:")
    
        //jquery approach
        cy.contains("#ContactUsFrm","Contact Us Form").then(text => {
            const fieldNameText = text.find("#field_11").text()
            expect(fieldNameText).to.contains("First name")
        })
    
    });
});