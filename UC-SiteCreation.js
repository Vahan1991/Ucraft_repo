import { UCurl } from './baseConfigs'

export class Ucraft {
    constructor(pageCreation, browser) {
        this.pageCreation = pageCreation
        this.browser = browser
    }
   async open () {
        await this.pageCreation.goto(UCurl)
         // `${text.repeat(2)}`
        // console.log(await popUp.textContent())
    }
    async assertingPopUp() {
        try {
            let popUp = await this.pageCreation.waitForSelector("//div[text()='Sign In']", {timeout: 7000}) // $$
            let text = 'Sign In' //Sign In
            expect(await popUp.textContent()).toBe(`${text}`)
            console.log(await popUp.textContent())
        } catch (e) {
            if (e) {
                await this.pageCreation.close()
                console.log('Incorrect pop-Up')
            }  
        }
    }
    async logInInputs(inpData, inpSelectors) {
        await this.pageCreation.fill(inpSelectors.yourEmailSel, inpData.yourEmailInput)
        await this.pageCreation.fill(inpSelectors.yourPassSel, inpData.yourPassInput)
        await this.pageCreation.click(inpSelectors.signInBtnSel)
    }
    async assertingPage() {
        try {
            let mySite = await this.pageCreation.waitForSelector("//div[@class='my-sites-title']", {timeout: 8000}) // $$
            let mySiteText = 'My Sites' //My Sites
            expect(await mySite.textContent()).toContain(`${mySiteText}`)
            console.log(await mySite.textContent())
        } catch (e) {
            if (e) {
                await this.pageCreation.close()
                console.log('Incorrect page')
            }
        }
    }
    async createNewWebsite(plusSelector) {
        await this.pageCreation.click(plusSelector.siteCreationPlusMark)
    }
    
    async chooseCustomDomain(chooseSelector) {
        await this.pageCreation.click(chooseSelector.chooseFreeCustomDomain, console.log('logging'), {timeout: 3000})
    }

    async blankTemplate(templateSelector, siteNameData) {
        await this.pageCreation.hover(templateSelector.blankTemplateHover)
        await this.pageCreation.click(templateSelector.blankTemplateSelectBtn, {timeout: 4000})
        await this.pageCreation.fill(templateSelector.yourSiteNameInput, siteNameData.yourSiteNameInputData)
        await this.pageCreation.click(templateSelector.getStartedSelector)
        await this.pageCreation.click(templateSelector.radioTenMonths)
        await this.pageCreation.click(templateSelector.nextButton)
    }
        // await this.pageCreation.fill(siteNameInput.yourSiteNameInput, inpData.yourSiteNameInputData)
    
}

