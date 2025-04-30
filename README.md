## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SenadTopcic/navigator-smoke-tests.git
   cd navigator-smoke-tests
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Playwright browsers** (important!):

   ```bash
   npx playwright install
   ```

   > ⚠️ This step is required for downloading the necessary browser binaries (Chromium, Firefox, WebKit).

## 🚀 Running Tests

To run all smoke tests:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/smoketest.spec.ts
```

To open the HTML report after running tests:

```bash
npx playwright show-report
```

## 🧪 Test Structure

- `pages/HomePage.ts`: Page Object Model file containing reusable locators and actions
- `tests/smoketest.spec.ts`: Smoke tests using methods from `HomePage`
- `playwright.config.ts`: Configuration file for Playwright (browser settings, timeouts, etc.)

## 🌐 Browser Configuration

In `playwright.config.ts`, from **line 35 and below**, you can **uncomment or comment** the browser(s) you want to run tests on:

```ts
// Uncomment only the browsers you want to test:
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
],
```

## 📋 Included Smoke Tests

- Home page loads successfully
- Search bar accepts input and displays results
- "Kreiraj objekat" button opens the form
- "Predloži ideju" button works
- Social media icons open correct links
- Language switch between BS and EN
- Zoom in/out buttons are visible and clickable

## 🐞 Known Issues

- **Google+ link test fails** due to the platform being deprecated.
  - Steps to reproduce:
    1. Run `npx playwright test`
    2. Observe failure on the Google+ link test
  - Fix: Remove or replace the test if no longer supported by the application.

## 🐞 Bug Reports

Bug reports are stored in the `/bug_reports` folder. Example: `bug_report_google_plus.md` includes details and steps to reproduce a Google+ related issue.

### 📸 Screenshots

Screenshots related to test failures or bugs (like the G+ dead link) are stored in the `/screenshots` folder and are automatically captured by Playwright when implemented in the test.

## 📁 Folder Structure

```
navigator-smoke-tests/
├── pages/
│   └── HomePage.ts
├── tests/
│   └── smoketest.spec.ts
│── test-results/            # test result
├── bug_reports/            # Bug report markdown files
├── playwright.config.ts
├── package.json
├── README.md
```

---

## ✍️ Author

Senad Topčić  
GitHub: [@SenadTopcic](https://github.com/SenadTopcic)
