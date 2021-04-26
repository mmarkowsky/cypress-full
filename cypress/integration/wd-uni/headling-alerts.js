describe("Feature contact us",()=>
{
    it('alert', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#popup-alerts").invoke("removeAttr","target").click({force :true})
        cy.get("#button1").click()

        cy.on("window:alert",(str) => {
            expect(str).to.equal("I am an alert box!");
        })
    })

    it('Confirm', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#popup-alerts").invoke("removeAttr","target").click({force :true})
        
        cy.get("#button4").click()
        cy.on("window:confirm",(str) => {
            return true;
        })
        cy.get("#confirm-alert-text").contains("You pressed Cancel!")
        
        cy.get("#button4").click()
        cy.on("window:confirm",(str) => {
            return false;
        })
        cy.get("#confirm-alert-text").contains("You pressed Cancel!")

    }) 

    it.only('Confirm', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#popup-alerts").invoke("removeAttr","target").click({force :true})
      
        const stub = cy.stub()
        cy.on("window:confirm",stub)
        
        cy.get("#button4").click().then(() => {
            expect( stub.getCall(0)).to.be.calledWith("Press a button!")
            }).then(() => {
                return false
            }).then(() => {
                cy.get("#confirm-alert-text").contains("You pressed Cancel!")
            })
    })

})