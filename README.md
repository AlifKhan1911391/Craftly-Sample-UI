# Craftly Internet &#x2014; Sample UI/UX

A sample front-end prototype for **Craftly Internet**, Bangladesh's developer social platform powered by Craftly Robot &#x2014; a homegrown AI engine built to let anyone build software without foreign dependencies.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Main social feed with posts from the team |
| `explore.html` | Developer directory with search, filters, and portfolio modal |
| `apps.html` | App showcase with working category filter |
| `profile.html` | Mahadi Islam Alif's public profile |
| `login.html` | Login page with show/hide password toggle |
| `register.html` | Registration page with password strength indicator |
| `portfolio.html` | Coming soon stub |
| `messages.html` | Coming soon stub |
| `notifications.html` | Coming soon stub |
| `settings.html` | Coming soon stub |
| `developers.html` | Coming soon stub |

---

## Project Structure

```
Craftly-Sample-UI/
&#x251C;&#x2500;&#x2500; index.html
&#x251C;&#x2500;&#x2500; explore.html
&#x251C;&#x2500;&#x2500; apps.html
&#x251C;&#x2500;&#x2500; profile.html
&#x251C;&#x2500;&#x2500; login.html
&#x251C;&#x2500;&#x2500; register.html
&#x251C;&#x2500;&#x2500; portfolio.html
&#x251C;&#x2500;&#x2500; messages.html
&#x251C;&#x2500;&#x2500; notifications.html
&#x251C;&#x2500;&#x2500; settings.html
&#x251C;&#x2500;&#x2500; developers.html
&#x251C;&#x2500;&#x2500; developers.json        &#x2190; Developer data for explore page
&#x251C;&#x2500;&#x2500; css/
&#x2502;   &#x2514;&#x2500;&#x2500; style.css
&#x251C;&#x2500;&#x2500; js/
&#x2502;   &#x2514;&#x2500;&#x2500; animation.js       &#x2190; Hamburger menu + scroll behaviour
&#x2514;&#x2500;&#x2500; photos/
    &#x251C;&#x2500;&#x2500; musa.png
    &#x251C;&#x2500;&#x2500; alif.png
    &#x251C;&#x2500;&#x2500; craftly.png
    &#x251C;&#x2500;&#x2500; 1777050519192.png
    &#x251C;&#x2500;&#x2500; FB_IMG_1777027286578.jpg
    &#x2514;&#x2500;&#x2500; FB_IMG_1777027614999.jpg
```

---

## Features

- **Feed** &#x2014; Social posts from real Craftly team members. New community posts by Anika, Nabil, Riya, and Sifat added. External post images fetched via [picsum.photos](https://picsum.photos).
- **Explore Developers** &#x2014; Live search + skill filter. Portfolio modal shows each developer's stats, skills, and projects. Cover images fetched via picsum for developers without a local photo. "View Full Profile" only links to an actual profile page for members who have one.
- **App Showcase** &#x2014; 8 apps across 5 categories. Category filter buttons now fully functional.
- **Auth Pages** &#x2014; Login and Register include show/hide password toggle. Register includes a password strength indicator.
- **Stub Pages** &#x2014; Portfolio, Messages, Notifications, Settings, and Developers all show a "Coming Soon" page so no links are broken.
- **Responsive** &#x2014; Hamburger nav works on mobile. Profile and feed layout adapts to small screens.
- **Sticky header** &#x2014; Auto-hides on scroll down, reappears on scroll up.

---

## Tech Stack

- Vanilla HTML / CSS / JavaScript &#x2014; no build step required
- [Font Awesome 6.4](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) &#x2014; Pacifico (logo) + Inter (body)
- [ui-avatars.com](https://ui-avatars.com/) for generated avatars
- [picsum.photos](https://picsum.photos/) for placeholder post images
- `developers.json` as a local data source for the Explore page

---

## Running Locally

Open any HTML file directly in a browser, **or** serve from a local server to avoid `fetch()` CORS issues on the Explore page:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000).

---

## Team

| Name | Role |
|---|---|
| SK Wasif Abdullah Musa | Founder & Visionary |
| Mahadi Islam Alif | Operations Engineer |
| Anika Tabassum | UI/UX Designer |
| Nabil Rahman | Backend Engineer |
| Riya Chowdhury | Android Developer |
| Sifat Hasan | AI Trainer |

---

> **Note:** This is a sample/demo UI only. All data is fake, all forms are non-functional, and no backend exists. Built to showcase the Craftly Internet concept for the National Science and Technology Week.

&copy; 2026 Craftly Internet. Built with Craftly Robot. From Bangladesh for the World.
