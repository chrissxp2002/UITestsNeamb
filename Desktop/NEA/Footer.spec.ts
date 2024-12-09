import { test, expect } from '@playwright/test';
import { HomePage } from '../../Pages/NEA/HomePage.ts'; 



test('NEA_ValidateFooterMoneyLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.locator("//div[@class='container footer-container']//a[@href='/products/money']").click();
  await expect(page.getByRole('heading', { name: 'Solutions to help give you' })).toBeVisible({timeout: 10000 });
  });

test('NEA_ValidateFooterRetirementLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.locator("//div[contains(@class,'footer-container')]//a[@href='/products/retirement-overview']").click();
  await expect(page.getByText('Invest in Yourself with the')).toBeVisible({timeout: 10000 });
  });


test('NEA_ValidateFooterLifeAndAccidentInsuranceLink', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.getByRole('link', { name: 'Life & Accident Insurance' }).click();
    await expect(page.getByRole('heading', { name: 'Affordable coverage to help' })).toBeVisible({timeout: 10000 });
  });

test('NEA_ValidateFooterHealthAndWellnessLink', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.getByRole('link', { name: 'Health & Wellness' }).click();
    await expect(page.getByRole('heading', { name: 'Insurance protection so you' })).toBeVisible({timeout: 10000 });
    });

  
test('NEA_ValidateFooterAutoAndHomeInsuranceLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Auto & Home Insurance' }).click();
  await expect(page.getByRole('heading', { name: 'Auto and home insurance just' })).toBeVisible({timeout: 10000 });
  });

test('NEA_ValidateFooterShoppingAndDiscountsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Shopping & Discounts' }).click();
  await expect(page.getByRole('heading', { name: 'Save on everyday essentials' })).toBeVisible({timeout: 10000 });
  });

test('NEA_ValidateFooterTravelLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Travel' }).click();
  await expect(page.getByRole('heading', { name: 'NEA Travel Program: Where can' })).toBeVisible({timeout: 10000 });
  });

  test('NEA_ValidateFooterNoCostBenefitsLink', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.locator("//div[contains(@class,'footer-container')]//a[@href='/pages/no-cost-benefits']").click();
    await expect(page.getByRole('heading', { name: 'No-Cost Benefits just for you.' }).locator('span').first()).toBeVisible({timeout: 10000 });
    await expect(page.getByText('just for you.').first()).toBeVisible({timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'Did you know that there are' })).toBeVisible({timeout: 10000 });
  });

    test('NEA_ValidateFooterHardshipAssistanceLink', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      await page.getByRole('link', { name: 'Hardship Assistance' }).click();
      await expect(page.getByRole('heading', { name: 'NEA Member Assistance' })).toBeVisible({timeout: 10000 });
  });

  test('NEA_ValidateFooterAccountAccessLink', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.getByRole('link', { name: 'Account Access' }).click();
    await expect(page.getByRole('heading', { name: 'Profile & Password' })).toBeVisible({timeout: 10000 });
});


test('NEA_ValidateFooterManageSuscriptionsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Manage Subscriptions' }).click();
  await expect(page.getByRole('heading', { name: 'Permissions & Subscriptions' })).toBeVisible({timeout: 10000 });
});

test('NEA_ValidateFooterProfileAndPasswordLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Profile & Password' }).click();
  await expect(page.getByRole('heading', { name: 'Profile & Password' })).toBeVisible({timeout: 10000 });
});

test('NEA_ValidateFooterPayMyInsuranceLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Pay My Insurance Bill' }).click();
  await expect(page.getByRole('heading', { name: 'Manage Products & Services' })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'Using the links on this page' })).toBeVisible({timeout: 10000 });
});

test('NEA_ValidateFooterFAQsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'FAQs' }).click();
  await expect(page.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible({timeout: 10000 });
  await expect(page.getByText('Your Account').nth(1)).toBeVisible({timeout: 10000 });
});

test('NEA_ValidateFooterContactUsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await expect(page.getByRole('link', { name: 'English' })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('group').getByRole('link', { name: 'Español' })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'We always like to hear from' })).toBeVisible({timeout: 10000 });
  await expect(page.getByText('Please let us know how we can')).toBeVisible({timeout: 10000 });
  await expect(page.getByPlaceholder('First Name')).toBeVisible({timeout: 10000 });
  await expect(page.getByPlaceholder('Last Name')).toBeVisible({timeout: 10000 });
});

test('NEA_ValidateFooterSocialLinks', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('link', { name: '' })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('link', { name: '' })).toBeVisible({timeout: 10000 });
});

test('NEA_ValidateFooterCreditCardLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('link', { name: 'footer-logo' })).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('link', { name: 'NEA Customized Cash Rewards Credit Card', exact: true })).toBeVisible({timeout: 10000 });
  await expect(page.locator("(//div[contains(@class,'footer-container')]//a[contains(@href,'https://secure.bankofamerica.com/apply-now-services/credit-cards')])[2]")).toBeVisible({timeout: 10000 });
  await expect(page.getByRole('link', { name: 'APPLY NOW', exact: true })).toBeVisible({timeout: 10000 });
});

