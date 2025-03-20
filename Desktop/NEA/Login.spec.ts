import { test, expect } from '@playwright/test';
import * as testData from '../../Pages/testData.ts';
import { ProductPage } from '../../Pages/NEA/ProductPage.ts';
import { LoginPage } from '../../Pages/NEA/LoginPage.ts';


test('NEA_RegularLogin', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.Login(testData.NEAUser991.username, testData.NEAUser991.password);
  await loginPage.ClickLoginBtn();
  await expect(page.locator("(//span[@class='name'])[2]")).toBeVisible();
});


test('NEA_AJAXLogin', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.loadProduct("/products/nea-pet-insurance");
  await productPage.ClickMainCTA();
  const loginPage = new LoginPage(page);
  await loginPage.Login(testData.NEAUser991.username, testData.NEAUser991.password);
  await loginPage.ClickLoginAnchor();
  await page.waitForLoadState();
  await expect(page.locator("//img[@alt='Pets Best Pet Health Insurance']")).toBeVisible({timeout: 40000 } );  //element only existing for NEA Pet page.
});


