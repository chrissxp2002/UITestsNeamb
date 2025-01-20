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
    readonly joinNowBtn: Locator;

    readonly allFooterLinks: Locator;
    readonly allMainMenuLinks: Locator;

    readonly userLogo: Locator;
    readonly signOutBtn: Locator;
    readonly signInBtn: Locator ; 
    readonly profileAndPassword: Locator;
    

    constructor(page: Page) {
        super(page);
        this.cardLogo = page.getByRole('link', { name: 'NEA Customized Cash Rewards Visa Signature Credit Card NEA® Customized Cash' }); 
        this.mainLogo = page.getByRole('link', { name: 'Logo NEAMB' });
        this.searchButton = page.getByRole('link', { name: 'Search' });
        this.searchTextBox = page.getByRole('textbox', { name: 'Search' });
        this.magnifierIconSearch = page.locator('#desktop-search i').first();
        this.heroBtn =  page.getByRole('link', { name: 'Become a Member' });
        this.carouselBtn = page.getByRole('link', { name: 'Get a Quote' });
        this.joinNowBtn = page.getByRole('link', { name: 'Join Now' });
        this.allFooterLinks = page.locator("//div[contains(@class,'gtm-footer new-design')]//div[@class='col']//a");
        this.allMainMenuLinks =  page.locator("//ul[@role='menu']/li/a");
        this.userLogo = page.locator("//div[@class='dropdown']//span[@class='avatar-container']");
        this.signOutBtn = page.locator("//div[@class='sign-out']");
        this.signInBtn = page.locator("//span[contains(text(),'Sign In')]");
        this.profileAndPassword = page.locator("//*[@id='sign-in-menu']//a[@href='/account/profile']");
        
      }

      async goto() {
        await this.page.goto(testData.Url.neambBaseUrl);
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
