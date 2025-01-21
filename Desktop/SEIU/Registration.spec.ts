import { test, expect } from '@playwright/test';
import * as testData from '../../Pages/testData.ts';
import {APICaller}  from '../../Pages/APICaller.ts';
import {RegistrationPage}  from '../../Pages/SEIU/RegistrationPage.ts';
import { HomePage } from '../../Pages/SEIU/HomePage.ts';
import { LoginPage } from '../../Pages/SEIU/LoginPage.ts';
import { ProfilePage } from '../../Pages/SEIU/ProfilePage.ts';
import { ForgotPasswordPage } from '../../Pages/SEIU/ForgotPasswordPage.ts';
import { ForgotEmailPage } from '../../Pages/SEIU/ForgotEmailPage.ts';


test.describe.configure({ mode: 'serial' });

test.beforeAll(async ({request}) => {
    /*const api =  new APICaller(request);
    const accessToken = await api.GetAccessToken();
    await api.DeleteUser(accessToken,"user3@guerrillamail.de","1");
    await api.DeleteUser(accessToken,"user3@guerrillamail.de","2");
    await api.DeleteUser(accessToken,"user4@guerrillamail.de","1");
    await api.DeleteUser(accessToken,"user4@guerrillamail.de","2");*/
  });


test('SEIU_Registration', async ({ page }) => {
    const registrationPage =  new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.Register("user3@guerrillamail.de");
    await expect(registrationPage.successMessage).toBeVisible({timeout:10000});
    
    
    //duplicate registration
    const homePage =  new HomePage(page);
    await homePage.goto();
    await homePage.logOutUser();
    await registrationPage.goto();
    await registrationPage.Register("user4@guerrillamail.de");
    await expect(registrationPage.duplicateRegistrationAlertMessage).toBeVisible({timeout:40000});
    await registrationPage.duplicateExistingMailCheck.click();
    await registrationPage.duplicateRegistrationPasswordTxt.click();
    await registrationPage.duplicateRegistrationPasswordTxt.fill(testData.NEA_Registration.regpassword);
    await registrationPage.duplicateRegistrationSubmitBtn.click();
    await registrationPage.duplicateRegistrationApplyBtn.click();
    await expect(registrationPage.duplicateRegistrationThankYouMessage).toContainText("Thank you",{timeout:40000});


    });


  test('SEIU_ResetPassword', async ({ page }) => {
          const loginPage = new LoginPage(page);
           await loginPage.goto();
           await loginPage.Login("user3@guerrillamail.de", "secret12");
           await loginPage.ClickLoginBtn();
           const homePage =  new HomePage(page);
          // await homePage.goto();
           await homePage.mainLogo.click();
           await homePage.SelectProfileAndPassword();

           
           const profilePage =  new ProfilePage(page);
           //await profilePage.goto();
           await profilePage.SetCurrentPassword('secret12');
           await profilePage.SetNewPassword('secret12');
           await profilePage.SetConfirmPassword('secret12');
           await profilePage.ClickSaveBtn();
           await expect(profilePage.successfulSaveMessage).toBeVisible({timeout:10000});
    
    });
    
    
  test('SEIU_ForgotPassword', async ({ page }) => {
          const forgotPasswordPage = new ForgotPasswordPage(page);
           await forgotPasswordPage.goto();
           await forgotPasswordPage.FillEmailAddress("user3@guerrillamail.de");
           await forgotPasswordPage.ClickRequestResetBtn();
           await expect(forgotPasswordPage.requestPasswordSuccessfulMsg).toBeVisible({timeout:10000});
    
    });
    
    
  test('SEIU_ForgotEmail', async ({ page }) => {
          const forgotEmailPage = new ForgotEmailPage(page);
           await forgotEmailPage.goto();
           await forgotEmailPage.FillFirstName("Test QA");
           await forgotEmailPage.FillLastName("Test QA");
           await forgotEmailPage.FillDOB("03","17","1981");
           await forgotEmailPage.FillZIP("12345");
           await forgotEmailPage.ClickRetrieveMyEmailBtn();
           await expect(forgotEmailPage.forgotEmailAddrLabel).toBeVisible({timeout:10000});
           await expect(forgotEmailPage.signinBtn).toBeVisible({timeout:10000});
           await expect(forgotEmailPage.forgotPwdAddrLabel).toBeVisible({timeout:10000});
           await expect(forgotEmailPage.forgotPwdBtn).toBeVisible({timeout:10000});
           await forgotEmailPage.forgotPwdBtn.click();
           await expect(forgotEmailPage.resetPasswordSuccessfulMsg).toBeVisible({timeout:10000});
    
    });
    
