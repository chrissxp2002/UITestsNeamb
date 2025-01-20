import { test, expect } from '@playwright/test'; 
import { HomePage } from '../../Pages/SEIU/HomePage.ts';


//Validates the basic element of home hero block are present in screen
test('SEIU_ValidateHeroElements', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page.locator("//section[contains(@class,'desktop')]//h1")).toBeVisible();
    await expect(page.locator("(//section[contains(@class,'desktop')]//span)[2]")).toBeVisible();
    await expect(page.locator("//section[contains(@class,'desktop')]//a")).toBeVisible();
    });

  test('SEIU_ValidateCarouselElements', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      await expect(page.getByLabel('SEIU Discount Tickets Program').first()).toBeVisible();
      await expect(page.getByLabel('SEIU Rewards Visa® Card').first()).toBeVisible();
      await expect(page.getByLabel('SEIU Travel Program').first()).toBeVisible();
      await expect(page.locator('a').filter({ hasText: 'Have Fun.For Less!' })).toBeVisible();
      await expect(page.locator('a').filter({ hasText: 'Earn UnlimitedRewards.' })).toBeVisible();
      await expect(page.locator('a').filter({ hasText: 'Life Is Aboutthe Journey.' })).toBeVisible();
      await expect(page.locator('#product_carousel_primary_action_button1')).toBeVisible();
      await expect(page.locator('#product_carousel_primary_action_button2')).toBeVisible();
      await expect(page.getByText('Book Your Trip')).toBeVisible();
      await expect(page.locator('#slick-slide00 img').nth(1)).toBeVisible();
      await expect(page.locator('#slick-slide01 img').nth(1)).toBeVisible();
      await expect(page.locator('#slick-slide02 img').nth(1)).toBeVisible();
      });


