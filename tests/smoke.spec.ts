import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Smoke Test Suite - Navigator.ba', () => {
  
  test('Home page loads successfully', async ({ page }) => {
    // Navigate to the home page
    const homePage = new HomePage(page);

    // Verify that the status code of the response is 200, indicating successful page load
    const response = await homePage.navigate();
    expect(response && response.status()).toBe(200);
  });

  test('Search bar is clickable and accepts input by enter and by search icon', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
  
    // Test search with Enter key
    // Click on the search bar to focus and fill it with 'sarajevo'
    await homePage.searchBarField.click();
    await homePage.searchBarField.fill('sarajevo');

    // Verify that the value entered into the search bar is correct
    await expect(homePage.searchBarField).toHaveValue('sarajevo');

    // Press Enter to initiate the search
    await homePage.searchBarField.press('Enter');

    // Verify that search results appear after pressing Enter
    expect(await homePage.verifySearchResultsAppear()).toBe(true);
  
    /// Test search by clicking the search button
    // Clear the search field and fill it with 'fghf'
    await homePage.searchBarField.fill('fghf');

    // Click the search button to initiate the search
    await homePage.searchButton.click();

    // Verify that search results appear after clicking the search button
    expect(await homePage.verifySearchResultsAppear()).toBe(true);
  });
  
  test('Kreiraj objekat button in menu is clickable and opens the correct menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
  
    // Klikni na ikonu za kreiranje objekta
    await homePage.clickCreateObjectPlusIcon();
  
    // Verify that the "Create Object" heading is present in the left menu
    const leftMenu = await page.getByRole('heading', { name: 'Kreiraj objekat' });
    
    
     // Check if the "Create Object" menu is visible after clicking the icon
    await expect(leftMenu).toBeVisible();
  });

  test('Predloži ideju - Pošalji komentar button in menu is clickable and opens the correct menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
  
    // Klikni na ikonu za kreiranje objekta
    await homePage.clickPredloziIdeju();
  
    const leftMenu = await page.getByRole('heading', { name: 'Navigator po tvojoj mjeri' });
    //await page.waitForTimeout(5000);
    await expect(leftMenu).toBeVisible();
  });

  test('Hover over Facebook icon reveals hidden content (e.g., tooltip or menu)', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.facebookIcon.hover();
    const tooltip = page.locator('#social-content iframe').nth(3).contentFrame().getByRole('button', { name: 'Like7.9K' }); 
    await expect(tooltip).toBeVisible();
    //await page.waitForTimeout(5000);
  });

  test('Facebook link opens correct page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    const facebookPage = await homePage.clickFacebookIcon();
    await facebookPage.waitForLoadState();
    expect(facebookPage.url()).toContain('facebook.com/Navigator.ba');
  });

  test('X (Twitter) link opens correct page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    const xPage = await homePage.clickXIcon();
    await xPage.waitForLoadState();
    expect(xPage.url()).toContain('x.com/navigatorba');
  });

  test('Google+ link opens correct page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
  
    // Click on the G+ icon and wait for the popup
    const gPlusPage = await homePage.clickGPlusIcon();
    await gPlusPage.waitForLoadState();
    expect(gPlusPage.url()).toContain('plus.google.com');
  });

test('Language switch between BS and EN works', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

    
  // Switch to English
  let langSwitchButton = await homePage.clickEnglishButton();
  const newLang = await page.locator('html').getAttribute('lang');
  expect(newLang).toBe('en'); // Verify the language is now English

  // Optionally, switch back to Bosnian and verify again
  langSwitchButton = await homePage.clickBosnianButton();
  const finalLang = await page.locator('html').getAttribute('lang');
  expect(finalLang).toBe('bs'); // Ensure the language switched back to Bosnian
});

test('Zoom in and Zoom out buttons are present and clickable', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

  await expect(homePage.zoomInButton).toBeVisible();
  await homePage.zoomInButton.click();

  await expect(homePage.zoomOutButton).toBeVisible();
  await homePage.zoomOutButton.click();

  
});


});
