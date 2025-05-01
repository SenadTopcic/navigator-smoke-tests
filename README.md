


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

## ✅ Test Cases

### 🟩 Smoke Tests

| TC ID | Name                                                         | Steps (summary)                                                                                                 | Expected Result                                  | Type             |
|-------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|------------------|
| TC01  | Home page loads successfully                                 | Open web address www.navigator.ba                                                                               | Status code is 200                               | Smoke / Positive |
| TC02  | Search bar is clickable and accepts input via Enter and icon | 1. Open the website<br>2. Type "sarajevo" and press Enter<br>3. Type "fghf" and click search icon              | Search results appear for both inputs            | Smoke / Positive |
| TC03  | Filter by category (Food)                                    | Click “Food” category                                                                                           | Only food places shown on map                    | Smoke / Positive |
| TC04  | Open Create Place form                                       | Click “Create place”                                                                                             | Form opens with inputs                           | Smoke / Positive |
| TC05  | Create a new place                                           | Fill form with valid data and submit                                                                            | New place added to the map                       | Smoke / Positive |
| TC06  | Language switch between BS and EN                            | Click “EN” to switch to English, then “BS” to switch back                                                       | UI language changes accordingly                  | Smoke / Positive |
| TC07  | "Kreiraj objekat" button opens correct menu                  | Click the “+” icon                                                                                               | Left menu with "Kreiraj objekat" is visible      | Smoke / Positive |
| TC08  | "Predloži ideju" button opens correct menu                   | Click the “Predloži ideju” icon                                                                                  | Menu with "Navigator po tvojoj mjeri" appears    | Smoke / Positive |
| TC09  | Hovering Facebook icon reveals tooltip                       | Hover over Facebook icon                                                                                        | Tooltip or iframe with Like button is visible    | Smoke / Positive |
| TC10  | Facebook link opens correct page                             | Click on the Facebook icon                                                                                      | New tab opens with facebook.com/Navigator.ba     | Smoke / Positive |
| TC11  | X (Twitter) link opens correct page                          | Click on the X (Twitter) icon                                                                                   | New tab opens with x.com/navigatorba             | Smoke / Positive |
| TC12  | Google+ link opens correct page                              | Click on the Google+ icon                                                                                       | New tab opens with plus.google.com               | Smoke / Positive |
| TC13  | Zoom in and Zoom out buttons are clickable                   | Click Zoom In, then Zoom Out buttons                                                                            | Map zooms in and out accordingly                 | Smoke / Positive |
| TC14  | Zoom map                    | Use + / - zoom buttons                         | Map zooms in/out                      | Positive |
| TC15  | Add working hours to place  | Fill working hours in form                     | Saved and visible                     | Positive |
| TC16  | Submit empty Create form          | Leave form empty and submit         | Validation error shown                  | Negative |
| TC17  | Search with special characters    | Type "!@#$%" in search              | No results / friendly message           | Negative |
| TC18  | Add invalid email in form         | Enter wrong email and submit        | Validation message for invalid email    | Negative |

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

Failure screenshots (when enabled in tests) are stored in `/screenshots`.

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
