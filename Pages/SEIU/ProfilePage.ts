import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData.ts';
import {BasePage} from '../BasePage.ts';


export class ProfilePage extends BasePage{

    readonly currentPassword: Locator; 
    readonly newPassword:Locator;
    readonly confirmPassword: Locator;
    readonly saveBtn: Locator;
    readonly successfulSaveMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.currentPassword = page.locator('#currentpassword');
        this.newPassword = page.locator('#password');
        this.confirmPassword = page.locator('#confirmPassword');
        this.saveBtn =  page.locator("//*[@id='update-password']//button[@type='submit']");
        this.successfulSaveMessage = page.locator("//h2[contains(text(),'Your password has been updated!')]");
      }

         async goto() {
              await this.page.goto(testData.Url.seiumbBaseUrl + "/account/profile");
            }


      async SetCurrentPassword(paswd)
      {
        await this.currentPassword.fill(paswd);
      }

      async SetNewPassword(paswd)
      {
        await this.newPassword.fill(paswd);
      }

      async SetConfirmPassword(paswd)
      {
        await this.confirmPassword.fill(paswd);
      }

      async ClickSaveBtn()
      {
        await this.saveBtn.click();
      }



    
}