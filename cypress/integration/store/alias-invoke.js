/// <reference types="Cypress" />

describe("Iterarte over elements",() =>{
    
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        //cy.xpath("//a[contains(@href,'https://automationteststore.com/index.php?rt=product/category')]").contains("Hair Care").click()
    })

    it("Calculate total products",() => {
        cy.xpath("//div[@class='oneprice']").as("products")
        cy.get("@products").should("have.length",8)
        cy.get("@products").each(($el,index,list) => {
            cy.log(index + $el.text())
        })

        cy.xpath("//div[@class='oneprice']").invoke("text").as("priceProd")
        cy.get("@priceProd").then(($linkPrice) => {
            var price = $linkPrice.split("$")
            var i
            for (i = 0 ; i < price.length ; i++) {
                cy.log(price[i])
            }
        })
    
    })
})