describe("Actions",()=>
{
    it('scroll', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr","target").click({force :true})

    })
    
    it('Drop and drap', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr","target").click({force :true})

        cy.get("#draggable").trigger("mousedown",{which:1})
        cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force:true})
    })

    it('Double click', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr","target").click({force :true})

        cy.get("#double-click").dblclick();
    })

    it.only('hold click', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr","target").click({force :true})

        cy.get("#click-box").trigger("mousedown",{which:1}).then(($ele) =>{
            expect($ele).to.have.css("background-color","rgb(0, 255, 0)")
        })
    })

})