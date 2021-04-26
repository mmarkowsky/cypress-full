describe("Feature contact us",()=>
{
    it.only('brownser', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#contact-us").invoke("removeAttr","target").click({force :true})
        cy.go("back")

        cy.reload()
        cy.reload(true) // reload without cache

        cy.go("forward")
    })
})