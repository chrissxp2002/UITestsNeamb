import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData.ts';
import {BasePage} from '../BasePage.ts';


export class RegistrationPage extends BasePage{

    readonly firstName: Locator; 
    readonly lastName: Locator; 
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;

    readonly continueBtn: Locator;
    readonly address: Locator; 
    readonly city: Locator; 
    readonly state: Locator;
    readonly zipcode: Locator;

    readonly dobMonth: Locator; 
    readonly dobDay: Locator;
    readonly dobYear: Locator;
    readonly createAccountBtn: Locator;
    readonly successMessage: Locator;
    readonly duplicateRegistrationAlertMessage: Locator;
    readonly duplicateExistingMailCheck: Locator;
    readonly duplicateRegistrationSubmitBtn: Locator;
    readonly duplicateRegistrationPasswordTxt: Locator;
    readonly duplicateRegistrationApplyBtn: Locator;
    readonly duplicateRegistrationThankYouMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.firstName = page.getByPlaceholder('First name');
        this.lastName = page.getByPlaceholder('Last name');
        this.email = page.getByPlaceholder('Email address')
        this.password = page.getByPlaceholder('Create password');
        this.confirmPassword = page.getByPlaceholder('Confirm password');
        this.continueBtn =   page.getByRole('button', { name: 'Continue' });
        this.address = page.locator("#address");
        this.city = page.locator("#city");
        this.state = page.locator("#state");
        this.zipcode =  page.locator("#zip");
        this.dobMonth = page.locator("#month");
        this.dobDay = page.locator("#day");
        this.dobYear = page.locator("#year");
        this.createAccountBtn = page.locator('#registrationStep2 button');
        this.successMessage = page.locator("#message-normal h2");
        this.duplicateRegistrationAlertMessage = page.locator("(//h2[contains(text(),'Duplicate Registration')])[1]");
        this.duplicateExistingMailCheck = page.locator("(//input[@name='selectedid'])[2]");
        this.duplicateRegistrationSubmitBtn = page.locator("//button[@type='submit']");
        this.duplicateRegistrationPasswordTxt = page.locator("#password");
        this.duplicateRegistrationApplyBtn = page.locator("(//button[@type='button'])[1]");
        this.duplicateRegistrationThankYouMessage = page.locator("//h2[contains(text(),'Thank you')]");
      }



      async goto() {
        await this.page.goto(testData.Url.neambBaseUrl + 'account/registration');
      }

      async Register(userEmail) {
        await this.firstName.click();
        await this.firstName.fill(testData.NEA_Registration.regname);
        await this.firstName.press('Tab');
        await this.lastName.click();
        await this.lastName.fill(testData.NEA_Registration.reglastname);
        await this.lastName.press('Tab');
        await this.email.click();
        await this.email.fill(userEmail);
        await this.email.press('Tab');
        await this.password.click();
        await this.password.fill(testData.NEA_Registration.regpassword);
        await this.password.press('Tab');
        await this.confirmPassword.click();
        await this.confirmPassword.fill(testData.NEA_Registration.regpassword);
        await this.continueBtn.click();

        await this.address.click();
        await this.address.fill(testData.NEA_Registration.regAddress);
        await this.address.press('Tab');
        await this.city.click();
        await this.city.fill(testData.NEA_Registration.regCity);
        await this.city.press('Tab');
        await this.state.selectOption({ value: testData.NEA_Registration.regState});
        await this.state.press('Tab');
        await this.zipcode.click();
        await this.zipcode.fill(testData.NEA_Registration.regZip);
        await this.zipcode.press('Tab');
        await this.dobMonth.click();
        await this.dobMonth.fill(testData.NEA_Registration.regMonth);
        await this.dobMonth.press('Tab');
        await this.dobDay.click();
        await this.dobDay.fill(testData.NEA_Registration.regDay);
        await this.dobDay.press('Tab');
        await this.dobYear.click();
        await this.dobYear.fill(testData.NEA_Registration.regYear);
        await this.dobYear.press('Tab');
        await this.createAccountBtn.click();

      }
    
}
