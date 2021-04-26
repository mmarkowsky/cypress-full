/// <reference types="Cypress" />

describe("Iterarte over elements",() =>{
    
    it("Log information of all hare care products",() => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//a[contains(@href,'https://automationteststore.com/index.php?rt=product/category')]").contains("Hair Care").click()

        cy.xpath("//div[@class='fixed_wrapper']//a").each(($el, index, $list) => {
            cy.log("Index : " + index + " : " + $el.text())
        })
    })

    it("Add product to basktet",() => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//a[contains(@href,'https://automationteststore.com/index.php?rt=product/category')]").contains("Hair Care").click()
    
        cy.xpath("//div[@class='fixed_wrapper']//a").each(($el, index, $list) => {
            if($el.text().includes("Pantene Pro-V Conditioner")) {
                cy.wrap($el).click()
            }
        })

    })
})