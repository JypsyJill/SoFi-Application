const functions = require('../test-assets/functions')
const selector = require('../test-assets/selectors')
const value = require('../test-assets/data')

module.exports = {
    before: browser => {
        browser.url('https://www.sofi.com')
        // }, 
        // after: browser => {
        //     browser.end()
    },
    'Get Mortgage Rate and Apply': browser => {
        browser
            .click(selector.logIn)
            .setValue(selector.email, "jypsytesting@gmail.com")
            .setValue(selector.password, "Junker001!")
            .click(selector.loginButton)
            .waitForElementVisible(selector.mortgageApplication,5000)
            .click(selector.mortgageApplication)
            // .waitForElementVisible(selector.checkMyRateButton,5000)
            // .setValue(selector.mailingAddress, "123 South Main")
            // .setValue(selector.apartment, "2")
            // .setValue(selector.city, "Midvale")
            // .setValue(selector.zip, "84047")
            // .setValue(selector.cellNumber, "8018675309")
            // .click(selector.communicationPolicyAgree)
            // .setValue(selector.dobMonth, "April")
            // .setValue(selector.dobDay, "1")
            // .setValue(selector.dobYear, "1969")
            // .setValue(selector.citizenship, "US Citizen")
            // .click(selector.homeOwnership)
            // .click(selector.noCollege)      
            // .click(selector.selfEmployedButton)
            // .setValue(selector.jobTitle, "Owner")
            // .setValue(selector.startDate, "February")
            // .setValue(selector.startYear, "2018")
            // .setValue(selector.individualAnnIncome, "75,000")
            // .setValue(selector.yearsExperience, "7")
            .click(selector.mortgageRefi)
            .pause(10000)
            // .setValue(selector.subjectAddress, "123 Main")
            
        
            // .setValue(selector.occupancyType, "Second Home")
            // .setValue(selector.propertyType, "Condominium")
             
            
            // .setValue(selector.subjectPropertyAddress, "12345 Testing Way")
            // .click(selector.subjectCity)
  
            .setValue(selector.estPropValue, "500,000")
            .setValue(selector.currentMortBalance, "100000")
            .setValue(selector.hoaDues, "0")
            .setValue(selector.maritalStatus, "Married")
            .setValue(selector.householdCount, "2 or more")
            .click(selector.creditAuthorization)
            .setValue(selector.subjectCity, "Midvale")
            .click(selector.utahStateSelector)
            .setValue(selector.subjectZip, "84047")
            .setValue(selector.proposedPropertyCounty, "Salt Lake")
            // // .click(selector.preApprovalFormButton)
            

    }





}