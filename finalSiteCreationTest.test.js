import {chromium, firefox} from 'playwright'
import { Ucraft } from './UC-SiteCreation'
import { UCurl_2 } from './baseConfigs'
import { UcSelectors, UcDataCredentials } from './ucSelectors-DataCredentials'


it('Checking should be worked', async () => {
    // for (const browserType of [chromium, firefox]) {
        //console.log('checked', browserType.name())
           // const browser = await browserType.launch({headless: false})
    //     //await browser.close()   
    // }
        jest.setTimeout(70000)
        const browser = await chromium.launch({headless: false});
	    const page = await browser.newPage();
        await page.goto(UCurl_2)
        await page.fill(UcSelectors.ucSelectors[0].yourEmailSel, UcDataCredentials.ucDataCred[0].yourEmailInput)
        await page.fill(UcSelectors.ucSelectors[0].yourPassSel, UcDataCredentials.ucDataCred[0].yourPassInput)
        await page.click(UcSelectors.ucSelectors[0].signInBtnSel)
        // await page.click(UcSelectors.ucSelectors[0].siteCreationPlusMark)
        // await page.click(UcSelectors.ucSelectors[0].chooseFreeCustomDomain)
        // await page.hover(UcSelectors.ucSelectors[0].blankTemplateHover)
        // await page.click(UcSelectors.ucSelectors[0].blankTemplateSelectBtn)
        // await page.fill(UcSelectors.ucSelectors[0].yourSiteNameInput, UcDataCredentials.ucDataCred[0].yourSiteNameInputData)
        // await page.click(UcSelectors.ucSelectors[0].getStartedSelector)
        // await page.click(UcSelectors.ucSelectors[0].radioTenMonths)
        // await page.click(UcSelectors.ucSelectors[0].nextButton) 
        // await page.click(UcSelectors.ucSelectors[0].checkOutSelector)
        await page.click(UcSelectors.ucSelectors[0].dashboardSel) 
        await page.click(UcSelectors.ucSelectors[0].pagesSelector)
        await page.hover(UcSelectors.ucSelectors[0].containerHoverSel)
        await page.click(UcSelectors.ucSelectors[0].addPlusSel, {timeout: 3000})
        await page.click(UcSelectors.ucSelectors[0].addBlankPageSel, {timeout: 3000})
        await page.waitForSelector(UcSelectors.ucSelectors[0].blankPageInputSel, {timeout: 4000})
        await page.fill(UcSelectors.ucSelectors[0].blankPageInputSel, UcDataCredentials.ucDataCred[0].blankPageInputName, {timeout: 2000})
        // await page.hover(UcSelectors.ucSelectors[0].containerHoverSel)
        // await page.click(UcSelectors.ucSelectors[0].addPlusSel_2)
        // await page.click(UcSelectors.ucSelectors[0].addArticlesPageSel)
        // await page.fill(UcSelectors.ucSelectors[0].addArticlesPageSel, UcDataCredentials.ucDataCred[0].addArticlesPageName)
})