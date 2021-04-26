class AutocompletePage {
    ingressarTelaAutocomplete(){
        cy.get("#autocomplete-textfield").invoke("removeAttr","target").click({force :true});
    }

    sendTextAutocomplete(msg){
        cy.get("#myInput").type(msg).then(()=> {
           //debugger
            cy.screenshot("Test 1")
            //cy.viewport(550,750)
            //es posible configurar global
            cy.clearCookies()
            cy.clearLocalStorage()
        })
    }

    clickSendAutocomplete(esperado){
        cy.xpath("//div[@id='myInputautocomplete-list']/div").each(($el, index,$list) => {
            const prodAtual = $el.text()
            if (prodAtual === esperado){
                $el.click()
                cy.get("#submit-button").click()
                cy.url().should("include","food-item=Avacado")
            }
        })
    }
}

export default AutocompletePage;