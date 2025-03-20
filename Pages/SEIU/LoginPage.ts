import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData.ts';
import {BasePage} from '../BasePage.ts';


export class LoginPage extends BasePage{

    readonly email: Locator; 
    readonly password:Locator;
    readonly loginButton: Locator;
    readonly loginAnchor: Locator;

    constructor(page: Page) {
        super(page);
        this.email = page.getByPlaceholder('Email');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Sign In' });
        this.loginAnchor = page.locator("#submitLogin");
      }

      async goto() {
        await this.page.goto(testData.Url.seiumbBaseUrl + "/login");
      }

      async Login(username, password) {
        await this.email.click();
        await this.email.fill(username);
        await this.email.press('Tab');
        await this.password.fill(password);
        //await this.loginButton.click();
      }

      
      async ClickLoginBtn()
      {
        await this.loginButton.click();
      }

      async ClickLoginAnchor()
      {
        await this.loginAnchor.click();
      }
    
}
