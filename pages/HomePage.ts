import { Page, Locator } from '@playwright/test';
import { link } from 'node:fs';

export class HomePage {
    readonly page: Page;
    readonly facebookIcon: Locator;
    readonly xIcon: Locator;
    readonly gPlusIcon: Locator;
    readonly searchBarField: Locator;
    readonly searchButton: Locator;
    
    readonly plusIconCreateObject: Locator;
    readonly predloziIdeju: Locator;
    readonly englishButton:Locator;
    readonly bosnianButton:Locator;
    readonly languageIndicator: Locator;

    readonly zoomInButton: Locator;
    readonly zoomOutButton: Locator;

    readonly searchResultsHeader: Locator;
    readonly noResultsMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.facebookIcon = page.locator('#ember614 a').first();
        this.xIcon = page.locator('#ember614 a').nth(1);
        this.gPlusIcon = page.locator('#ember614 a').nth(2);
        this.searchBarField = page.getByRole('textbox', { name: 'Traži ulicu ili objekat' });
        this.searchButton = page.locator('.iconav-search');
        this.searchResultsHeader = page.locator('.content .name');
        this.noResultsMessage = page.locator('.no-search-results');
        this.plusIconCreateObject = page.getByRole('link', { name: 'Kreiraj objekat' });
        this.predloziIdeju = page.getByRole('link', { name: 'Predloži ideju - Pošalji komentar' });
        this.englishButton = page.getByText('EN', { exact: true });
        this.bosnianButton = page.getByText('BS', {exact: true});
        this.languageIndicator = page.locator('.language-indicator');

        this.zoomInButton = page.locator('.leaflet-control-zoom-in'); 
        this.zoomOutButton = page.locator('.leaflet-control-zoom-out')
    }

    async navigate() {
        const response = await this.page.goto('https://www.navigator.ba');
        return response;
    }

    async clickFacebookIcon() {
        const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.facebookIcon.click(),
        ]);
        return popup;
    }

    async clickXIcon() {
        const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.xIcon.click(),
        ]);
        return popup;
    }

    async clickGPlusIcon() {
        const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.gPlusIcon.click(),
        ]);
        return popup;
    }

    async clickCreateObjectPlusIcon() {
        await this.plusIconCreateObject.click(); 
    }
    async clickPredloziIdeju() {
        await this.predloziIdeju.click();
        
    }
    async verifySearchResultsAppear(): Promise<boolean> {
        await Promise.race([
          this.page.locator('.content .name').first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {}),
          this.noResultsMessage.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {}),
        ]);
      
        const hasResults = (await this.page.locator('.content .name').count()) > 0;
        const hasNoResults = await this.noResultsMessage.isVisible().catch(() => false);
        return hasResults || hasNoResults;
      }

    //Function for English language
    async clickEnglishButton() {
        await this.englishButton.click();
    }

    // Funkcija za klik na BS dugme
    async clickBosnianButton() {
        await this.bosnianButton.click();
    }

    // Funkcija za proveru jezika na stranici
    async verifyLanguage(expectedText: string) {
        // Preuzmi lang atribut iz <html> elementa
        const langAttribute = await this.page.locator('html').getAttribute('lang');

        // Proveri da li je lang atribut jednak očekivanom jeziku
        await expect(langAttribute).toBe(expectedText);
    }
}
