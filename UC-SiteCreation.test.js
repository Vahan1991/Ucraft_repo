import { Ucraft } from './UC-LogIn_LogOut'
import { UcSelectors, UcDataCredentials } from './ucLogIn-out-Selectors-DataCredentials'

const { chromium } = require('playwright');
let browser;
let pageCreation;


beforeAll(async () => {
    browser = await chromium.launch({headless: false});
    // browserContext = await browser.newContext()
    // pageLogIn = await browserContext.newPage()
  });

beforeEach(async () => {
    pageCreation = await browser.newPage();
});

// afterAll(async () => {
//   await browser.close()
// })


describe("Test suite", ()=>{ 
it('Test case is logIn/ Out', async () => {
        let uc = new Ucraft(pageCreation)
        await uc.open()

        await uc.assertingPopUp()
        try{
            await uc.logInInputs(UcDataCredentials.ucDataCred[0], 
                UcSelectors.ucSelectors[0], UcSelectors.ucSelectors[0])
        } catch(er) {
            console.log('popUpError')
        }

        await uc.assertingPage()
        try{
            await uc.createNewWebsite(UcSelectors.ucSelectors[0])
        } catch(er) {
            console.log('pageError')
        }
        
        await uc.chooseCustomDomain(UcSelectors.ucSelectors[0])
        await uc.blankTemplate(UcSelectors.ucSelectors[0], UcDataCredentials.ucDataCred[0])
    });
})