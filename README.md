
# Navigator.ba Smoke Test Suite

This repository contains automated smoke tests for the [Navigator.ba](https://www.navigator.ba) application using Playwright with the Page Object Model (POM) pattern.

## ✅ Technologies Used
- [Playwright](https://playwright.dev/)
- TypeScript
- Page Object Model (POM)

## 📁 Project Structure
```
.
├── pages/
│   └── HomePage.ts       # Page object for homepage
├── tests/
│   └── smoke.spec.ts     # Smoke test cases
├── README.md
├── package.json
├── tsconfig.json
├── playwright.config.ts
```

## 🚀 How to Run Tests Locally

### 1. Clone the repository
```bash
git clone https://github.com/SenadTopcic/navigator-smoke-tests.git
cd navigator-smoke-tests
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run tests
```bash
npx playwright test
```

### 4. View test report
```bash
npx playwright show-report
```

### 5. Choose Browser
    To run tests on a specific browser, navigate to playwright.config.ts and scroll to line 35 and below. Uncomment the desired browser configuration (e.g., Chromium, Firefox, or WebKit), and comment out the others. This allows you to control which browser the tests will run on

## 🧪 Included Smoke Tests

| Test | Description |
|------|-------------|
| Home page load | Verifies that the homepage loads successfully (status 200) |
| Search | Tests search by pressing Enter and search icon |
| Kreiraj objekat | Button click and left menu appearance |
| Predloži ideju | Opens the correct feedback menu |
| Social Media Links | Facebook, X, and G+ links open correct pages |
| Language Switch | Verifies language changes between BS and EN |
| Zoom Controls | Checks Zoom In/Out buttons exist and are clickable |

## ✅ Smoke Test Criteria

**Smoke tests include:**
- Homepage loads
- Search bar functions
- Critical UI buttons (Kreiraj objekat, Predloži ideju) work
- Language switch works
- Main icons & zoom controls are present and functional

## 🐞 Bug Reporting
If you encounter a bug during test execution, please include:
- Steps to reproduce
- Actual vs expected result
- Screenshot if possible

## 📄 License
This project is for educational/demo purposes.

---
Created by Senad Topcic
