describe("Tables",()=>
{
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr","target").click({force :true})  
    })
    it('Calculate total age', () => {
        var totalYears = []
        cy.xpath("//div[@id='thumbnail-1']//td[3]").each(($el,index,$list) => {
            totalYears[index] = $el.text()
            }).then(()=>{
                for (let i = 0; i < totalYears.length; i++) {
                    cy.log("Total years : " + totalYears[i])
                }
            })
    })


})