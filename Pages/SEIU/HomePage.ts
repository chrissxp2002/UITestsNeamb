import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData.ts';
import {BasePage} from '../BasePage.ts';


export class HomePage extends BasePage{

    readonly cardLogo: Locator; 
    readonly mainLogo: Locator; 
    readonly searchButton: Locator;
    readonly searchTextBox: Locator;
    readonly magnifierIconSearch: Locator;

    readonly heroBtn: Locator;
    readonly carouselBtn: Locator;
    
    readonly allFooterLinks: Locator;
    readonly allMainMenuLinks: Locator;

    readonly userLogo: Locator;
    readonly signOutBtn: Locator;
    readonly signInBtn: Locator ; 
    readonly profileAndPassword: Locator;
    

    constructor(page: Page) {
        super(page);
        this.cardLogo = page.getByRole('link', { name: 'SEIU Rewards Visa Card SEIU' }); 
        this.mainLogo = page.getByRole('link', { name: 'Logo', exact: true });
        this.searchButton = page.getByRole('link', { name: 'Search', exact: true });
        this.searchTextBox = page.getByRole('textbox', { name: 'Search' });
        this.magnifierIconSearch = page.locator('#desktop-search i').first();
        this.allFooterLinks = page.locator("//div[contains(@class,'gtm-footer new-design')]//div[@class='col']//a");
        this.allMainMenuLinks = page.locator("//ul[@role='menu']/li/a");
        this.heroBtn = page.getByRole('link', { name: 'Become a Member' });
        this.carouselBtn = page.getByRole('link', { name: 'Search Tickets' });
        this.userLogo = page.locator("(//span[@class='name'])[2]");
        this.signOutBtn = page.locator("//a[@class='link-underline']");
        this.signInBtn = page.locator("(//span[contains(text(),'Sign In')])[1]");
        this.profileAndPassword = page.locator("(//div[@class='login-curtain__container']//a[@href='/account/profile'])[1]");
      }

      async goto() {
        await this.page.goto(testData.Url.seiumbBaseUrl);
      }

      async logOutUser()
      {
        await this.userLogo.click();
        await this.signOutBtn.click();
        await expect(this.signInBtn).toBeVisible();
      }

      async SelectProfileAndPassword()
      {
         await this.userLogo.click();
         await this.profileAndPassword.click();       
      }
    
    
}