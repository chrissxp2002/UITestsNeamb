import { test, expect } from '@playwright/test';
import * as testData from '../../Pages/testData.ts'
import { HomePage } from '../../Pages/NEA/HomePage.ts'; 

let nea_Url;
let seiu_Url;

test.beforeAll(async () => {
  nea_Url =  testData.Url.neambBaseUrl;
  seiu_Url = testData.Url.seiumbBaseUrl;
});


//Validates the card logo image is present on screen.
test('NEA_ValidateCardLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(homePage.cardLogo).toBeVisible();
});

//Validates the main logo image is present on screen.
test('NEA_ValidateMainLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(homePage.mainLogo).toBeVisible();
});



//Search 'nea personal loan' and asserts that the first card is visible on screen.
test('NEA_SearchHasValidCardImage', async ({ page }) => {

  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.searchButton.click();
  await homePage.searchTextBox.click();
  await homePage.searchTextBox.fill('nea personal loan');
  await homePage.magnifierIconSearch.click();
  await page.waitForLoadState();
  await expect(page.locator("(//div[@class='item offer']//img)[1]")).toBeVisible({timeout: 30000 } );
  await expect(page.locator('.title').first()).toBeVisible();
  await expect(page.locator('.hidden-xs > a').first()).toBeVisible();
  await expect(page.locator('.eye-brow').first()).toBeVisible();

});




//Validate the login cta GTM event on NEA Pet Insurance product
test('NEA_ValidateGTMEventOnProduct', async ({ page }) => {
  await page.goto(nea_Url + '/products/nea-pet-insurance');
  const clickBtn = await page.locator('#product_cta_sign_in_cold_button');
  const click_Attr = await clickBtn.getAttribute('onclick',{timeout: 10000 });
  await expect(click_Attr).toContain("dataLayerPush({'event':'login cta'");
});


