import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData.ts';
import {BasePage} from '../BasePage.ts';


export class ForgotPasswordPage extends BasePage{

    readonly email: Locator; 
    readonly requestResetBtn: Locator;
    readonly requestPasswordSuccessfulMsg: Locator;

    constructor(page: Page) {
        super(page);
        this.email = page.locator("#email");
        this.requestResetBtn = page.locator("//button[@type='submit']");
        this.requestPasswordSuccessfulMsg = page.locator("//p[contains(text(),'We received your request to reset your password')]");

      }

      async goto() {
        await this.page.goto(testData.Url.neambBaseUrl + "/account/forgot-password");
      }


      async FillEmailAddress(email)
      {
        await this.email.fill(email);
      }

      async ClickRequestResetBtn()
      {
        await this.requestResetBtn.click();
      }


    
}
