import { test, expect } from '@playwright/test';
import { HomePage } from '../../Pages/SEIU/HomePage.ts';



test('SEIU_ValidateFooterPersonalLoanLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'SEIU Personal Loan' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU Personal Loan', exact: true })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('link', { name: 'Apply Now' })).toBeVisible({timeout: 10000 });
  });

test('SEIU_ValidateFooterGroupTermLifeLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'SEIU Group Term Life' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU Group Term Life Insurance', exact: true })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('link', { name: 'Enroll Now' })).toBeVisible({timeout: 10000 });
  });

test('SEIU_ValidateFooterDiscountTicketsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.locator("//div[contains(@class,'footer-menu')]//a[@href='/benefits/seiu-discount-tickets-program']").click();
  await expect(page.getByRole('heading', { name: 'SEIU Discount Tickets Program', exact: true })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('link', { name: 'Search Tickets' })).toBeVisible({timeout: 10000 });
  });


test('SEIU_ValidateFooterCollegeBenefitProgramLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'SEIU College Benefit Program' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU College Benefit Program', exact: true })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible({timeout: 10000 });
  });

test('SEIU_ValidateFooterHotelsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Hotels' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU Travel: Hotels' })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('link', { name: 'Book Your Room' })).toBeVisible({timeout: 10000 });
});

test('SEIU_ValidateFooterAboutMemberBenefitsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'About SEIU Member Benefits' }).click();
  await expect(page.getByRole('heading', { name: 'About SEIU Member Benefits' }).getByRole('strong')).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('img', { name: 'Diverse group of union members' })).toBeVisible({timeout: 10000 });
  });
    
  
test('SEIU_ValidateFooterCreditCardLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('contentinfo').getByText('SEIU Rewards Visa® Card', { exact: true })).toBeVisible({timeout: 10000 });
  //await expect(page.getByRole('link', { name: 'SEIU Rewards Visa Card' }).nth(3)).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Learn More' })).toBeVisible({timeout: 10000 });
  });

test('SEIU_ValidateFooterFacebookLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('link', { name: '' })).toBeVisible({timeout: 10000 });
  });

    
  
  


