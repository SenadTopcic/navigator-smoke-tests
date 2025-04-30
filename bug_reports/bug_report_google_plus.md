
# 🐞 Bug Report: Google+ Link Opens Invalid Page

**Summary:**  
Clicking on the Google+ icon in the footer/header opens a dead or invalid page. Google+ has been discontinued, and the link is outdated.

---

## 🔁 Steps to Reproduce:
1. Open the [https://www.navigator.ba](https://www.navigator.ba) homepage.
2. Scroll to the social media icons (usually bottom or top).
3. Click on the **Google+ (G+)** icon.

---

## ✅ Expected Result:
- The G+ icon should either be removed or redirect to a valid, active social media page.

---

## ❌ Actual Result:
- Clicking the G+ icon opens:  
  `https://plus.google.com`  
  ...which leads to a dead/retired service page or a general Google account page.

---

## 💻 Environment:
- OS: Windows/macOS/Linux  
- Browser: Chrome / Firefox / Edge  
- Automation: Playwright  
- URL: [https://www.navigator.ba](https://www.navigator.ba)

---

## 📌 Notes:
- Google+ has been officially discontinued since April 2019.
- This icon misleads users and affects user experience.

---

## 🔧 Suggested Fix:
- Remove the G+ icon and its associated functionality from the site.
- Alternatively, replace it with a valid and active social network (e.g., Instagram, LinkedIn).
