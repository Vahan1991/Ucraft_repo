export const UcSelectors = {
    ucSelectors: [
        {
            yourEmailSel: "input[name='email']",
            yourPassSel: "input[name='password']",
            signInBtnSel: "//button[text()='Sign In']",
            siteCreationPlusMark: "//a[@class='site-wrapper add-new-site']",
            chooseFreeCustomDomain: "(//button[text()='choose'])[1]",
            blankTemplateHover: "(//div[@class='template-image'])[2]/..",
            blankTemplateSelectBtn: "(//a[text()='select'])[2]",
            yourSiteNameInput: "input[placeholder='Your site name']",
            getStartedSelector: "//button[text()='Get Started']",
            radioTenMonths: "//li[@class='plan checked']",
            nextButton: "//div[text()='Next']",
            checkOutSelector: "[id='btn-checkout']",
            getStartedSel: "//span[text()='Get Started']",
            dashboardSel: "//div[@class='panel-item-ico uci-dashboard']/../.",
            pagesSelector: "(//div[@class='dashboard-item-ico']/..)[1]",
            containerHoverSel: "(//div[@class='content l'])[1]",
            addPlusSel: "(//div[@class='add-page-plus'])[1]",
            addBlankPageSel: "(//div[@class='slide-list-item'])[1]",
            blankPageInputSel: '(//input[@type="text"])[4]/..',
            addPlusSel_2: "(//div[@class='add-page-plus'])[1]",
            addArticlesPageSel: "(//div[@class='slide-list-item'])[5]",
            addArticlesPageInputSel: '(//input[@type="text"])[4]',
            
        }
    ]
}

export const UcDataCredentials = {
    ucDataCred: [
        {
            yourEmailInput: 'admin@ucraft.me',
            yourPassInput: 'weloveuc',
            yourSiteNameInputData: 'jsautomationtesting',
            blankPageInputName: 'About us-1',
            addArticlesPageName: 'Blog-2'

        }
    ]
}


// export const UcWebSiteCredentials = {
//     pageCreation: [
//         {
//             newPage: ''
//         }
//     ]
// }