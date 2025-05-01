
## 🧪 Test Plan & Test Cases

### 1. Introduction

The purpose of this test effort is to validate the core functionalities of the [Navigator.ba](https://www.navigator.ba) application. This includes:

- Search functionality
- Category filtering
- Form creation
- Language switching
- Social media interactions

Tests are written using **Playwright** and follow the **Page Object Model (POM)** structure.

---

### 2. Scope of Testing

✅ **In Scope**:
- Header: search, language switch, forms, social icons  
- Category filtering and display  
- Display of user-created and categorized POIs  

❌ **Out of Scope**:
- Backend/database validations  
- Mobile responsiveness  
- Accessibility testing (WCAG)

---

### 3. Objectives

- Verify that core features work
- Automate critical smoke test scenarios
- Cover positive and negative test cases
- Deliver a working Playwright setup with documentation and bug reports

---

### 4. Testing Approach

- **Manual testing** to explore and identify test cases
- **Smoke testing** for core path validation
- **Automation** of smoke tests in Playwright (TypeScript)
- **POM design pattern** for maintainability

---

### 5. Test Schedule

| Task                         | Duration       |
|------------------------------|----------------|
| Application analysis         |30.04.2025         |
| Test case writing            |30.04.2025         |
| Smoke test identification    | 30.04.2025       |
| Automation of smoke tests    | 30.04.2025         |
| README & GitHub publication  | 01.05.2025.       |
| Bug reporting                | 01.05.2025. |

---

### 6. Test Environment

- **OS:** Windows 10  
- **Browser:** Chrome (latest)  
- **Tools:**  
  - Playwright  
  - GitHub  
  - Manual testing for bugs  

---

### 7. Deliverables

- ✅ Test Plan (this section)  
- ✅ Test Cases (manual + automated)  
- ✅ Smoke test suite (Playwright)  
- ✅ GitHub repo with:
  - Source code
  - README
- ✅ Bug reports with repro steps  

---

### 8. Risks & Mitigations

| Risk                              | Mitigation                                 |
|-----------------------------------|--------------------------------------------|
| App changes during testing        | Communicate with dev team; update README   |
| Network/app instability           | Retry and log flaky behavior               |
| Limited test data coverage        | Use various inputs and edge cases          |

---

### 9. Entry / Exit Criteria

**Entry Criteria**:
- Application is accessible at https://www.navigator.ba

**Exit Criteria**:
- All smoke tests executed
- No critical/blocker bugs remain
- GitHub repo is complete and documented

---


## ✅ Test Cases for Navigator.ba

| TC ID | Name | Steps (Summary) | Expected Result | Automated |
|-------|------|------------------|-----------------|-----------|
| TC01 | Home page loads successfully | Open web address `www.navigator.ba` | Status code is 200 | Yes |
| TC02 | Search bar accepts input and responds | 1. Open the website<br>2. Type "sarajevo" and press Enter<br>3. Type "fghf" and click search icon | Search results appear for both inputs | Yes |
| TC03 | Filter by category (Food) | Click the “Food” category | Only food places are shown on the map | No |
| TC04 | Kreiraj objekat button in menu is clickable and opens the correct menu | Click the “+ Kreiraj objekat” | Left menu with “Kreiraj objekat” is displayed | Yes |
| TC05 | Create a new place | Fill in the form with valid data and submit | New place is added to the map | No |
| TC06 | Switch language between BS and EN | Click “EN” to switch to English, then “BS” to switch back | UI language changes accordingly | Yes |
| TC07 | "Predloži ideju - Pošalji komentar" button in menu is clickable and opens the correct menu | Click the “Predloži ideju - Pošalji komentar” button | Menu with “Navigator po tvojoj mjeri” appears | Yes |
| TC08 | Facebook icon shows tooltip on hover | Hover over the Facebook icon | Tooltip or embedded Like button is visible | Yes |
| TC09 | Facebook link opens correct page | Click the Facebook icon | New tab opens: `facebook.com/Navigator.ba` | Yes |
| TC10 | X (Twitter) link opens correct page | Click the X (Twitter) icon | New tab opens: `x.com/navigatorba` | Yes |
| TC11 | Google+ link opens correct page | Click the Google+ icon | New tab opens: `plus.google.com` | Yes |
| TC12 | Zoom buttons work | Click Zoom In, then Zoom Out | Map zooms in and out accordingly | No |
| TC13 | Zoom using mouse scroll | Use mouse scroll on the map | Map zooms in and out | No |
| TC14 | Add working hours to a place | Enter working hours in the form and save | Working hours are saved and visible | No |
| TC15 | Submit empty "Create Place" form | Leave the form empty and submit | Validation error is shown | No |
| TC16 | Search with special characters | Type "!@#$%" into the search bar | No results or a friendly message is displayed | No |
| TC17 | Invalid email validation | Enter an invalid email in the form and submit | Validation message for invalid email is shown | No |


---

## 📋 Included Smoke Tests 

- Home page loads successfully  
- Search bar input and results  
- "Kreiraj objekat" (Create Place) button  
- "Predloži ideju" (Suggest an idea) button  
- Social media icons open correct links  
- Language switch (BS ↔ EN)  
- Zoom in/out functionality  

---

## 🐞 Known Issues

- **Google+ icon test fails** (platform is deprecated).  
  - **Repro:** Run test suite → failure on social media icon  
  - **Suggestion:** Remove or update this test case

---

## 🐞 Bug Reports

Stored in the `/bug_reports` folder.  
E.g., `bug_report_google_plus.md` documents a deprecated icon issue.

---

### 📸 Screenshots

Failure screenshots (when enabled in tests) are stored in inside bugreport md file.

---

## 📁 Folder Structure

```
navigator-smoke-tests/
├── pages/
│   └── HomePage.ts
├── tests/
│   └── smoketest.spec.ts
├── bug_reports/
├── screenshots/
├── test-results/
├── playwright.config.ts
├── package.json
├── README.md
```

---


# 🚦 Navigator.ba Smoke Test Automation

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

3. **Install Playwright browsers** (required step):

   ```bash
   npx playwright install
   ```

   > ⚠️ This downloads the necessary browser binaries (Chromium, Firefox, WebKit).

---

## 🚀 Running Tests

Run all smoke tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/smoketest.spec.ts
```

Open the HTML report after tests:

```bash
npx playwright show-report
```

---


## ✍️ Author

Senad Topčić  
GitHub: [@SenadTopcic](https://github.com/SenadTopcic)
