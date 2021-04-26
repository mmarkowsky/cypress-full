import AutocompletePage from "../../support/pages/university/AutocompletePage";
import HomePage from "../../support/pages/university/HomePage"

describe("Autocomplete tesing",()=>
{
    const autocomplete = new AutocompletePage();
    const home = new HomePage();
    
    beforeEach(()=>{
        home.visitHomePage();
        autocomplete.ingressarTelaAutocomplete();
    })

    it('Verify input text', () => {
        autocomplete.sendTextAutocomplete("a")
        autocomplete.clickSendAutocomplete("Avacado")
    })

})