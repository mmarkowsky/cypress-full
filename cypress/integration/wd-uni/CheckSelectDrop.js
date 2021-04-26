describe("Checkbox tesing",()=>
{
    it('Verify check button', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr","target").click({force :true})
       
        //cy.xpath("//input[@value='option-1']").check()
        cy.xpath("//input[@value='option-1']").check().should('be.checked')
        cy.xpath("//input[@value='option-3']").uncheck().should('not.be.checked')
        cy.xpath("//input[@type='checkbox']").check(["option-2","option-4"])
    })


    it('Verify radio button', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr","target").click({force :true})
       
        cy.xpath("//input[@name='color']").first().check()
        cy.xpath("//input[@name='color']").eq(1).check()
    })

    it.only('Verify drop list', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr","target").click({force :true})
       
        cy.get("#dropdowm-menu-1").select("C#").should('have.value','c#')
        cy.get("#dropdowm-menu-2").select("junit").contains("JUnit")
        cy.get("#dropdowm-menu-3").select("JQuery")
    })
})