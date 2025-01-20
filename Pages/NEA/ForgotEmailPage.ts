import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData.ts';
import {BasePage} from '../BasePage.ts';


export class ForgotEmailPage extends BasePage{

    readonly firstName: Locator; 
    readonly lastName: Locator;
    readonly month: Locator;
    readonly day: Locator;
    readonly year: Locator;
    readonly zip: Locator;
    readonly retrieveMyEmailBtn: Locator;
    readonly forgotEmailAddrLabel: Locator;
    readonly signinBtn: Locator;

    readonly forgotPwdAddrLabel: Locator;
    readonly forgotPwdBtn: Locator;
    readonly requestPasswordSuccessfulMsg: Locator;

    constructor(page: Page) {
        super(page);
        this.firstName = page.locator("#firstName");
        this.lastName = page.locator("#lastName");
        this.month = page.locator("#month");
        this.day = page.locator("#day");
        this.year = page.locator("#year");
        this.zip = page.locator("#zip");
        this.retrieveMyEmailBtn = page.locator("//button[@type='submit']");
        this.forgotEmailAddrLabel = page.locator("//div[contains(text(),'Your login email address is:')]");
        this.signinBtn = page.locator("//a[@href='/login']");
        this.forgotPwdAddrLabel = page.locator("//div[contains(text(),'Forgot your password? Click below')]");
        this.forgotPwdBtn = page.locator("//a[contains(text(),'Submit')]");
        this.requestPasswordSuccessfulMsg =  page.locator("//p[contains(text(),'We received your request to reset your password')]");

      }

      async goto() {
        await this.page.goto(testData.Url.neambBaseUrl + "/account/forgot-email");
      }


      async FillFirstName(firstName)
      {
        await this.firstName.fill(firstName);
      }

      async FillLastName(lastName)
      {
        await this.lastName.fill(lastName);
      }

      async FillDOB(month, day, year)
      {
        await this.month.fill(month);
        await this.day.fill(day);
        await this.year.fill(year);
      }

      async ClickRetrieveMyEmailBtn()
      {
        await this.retrieveMyEmailBtn.click();
      }


    
}
