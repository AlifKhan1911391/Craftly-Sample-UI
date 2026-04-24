# Craftly Internet — Sample UI

> **This is a UI/UX design proposal and sample, not the live Craftly Internet platform.**
> Built to demonstrate the look, feel, and flow of the Craftly Internet product ecosystem.

---

## About Craftly

**Craftly** is a Bangladeshi tech initiative building two connected products:

| Product | What it is |
|---|---|
| **Craftly Robot** | An AI platform that lets developers and creators build full applications — without relying on foreign APIs like ChatGPT or Google AI. Bangladesh's own homegrown AI. |
| **Craftly Internet** | A developer-focused social platform where apps built with Craftly Robot are published, explored, and shared with the community. Think of it as the deployment and discovery layer for Craftly Robot outputs. |

Together, they form a closed loop: **build with Craftly Robot → publish on Craftly Internet.**

---

## About This Repository

This repository contains a **static HTML/CSS/JS prototype** created as a design proposal for the Craftly Internet platform. It is intended for:

- Stakeholder presentations and design reviews
- Visual reference for the actual development team
- Demonstrating page structure, layout, and component design
- Showcasing the brand identity and UI direction

> **No backend, database, or real authentication is included.** All data shown (users, posts, apps, developers) is placeholder/sample content only.

---

## Pages Included

| File | Page |
|---|---|
| `index.html` | Home feed — posts, sidebar navigation, trending topics |
| `explore.html` | Explore developers — searchable list with modals |
| `apps.html` | App showcase — grid of apps built with Craftly Robot |
| `developers.html` | Developer directory — profile cards |
| `profile.html` | Individual user profile page |
| `login.html` | Login screen |
| `register.html` | Registration / sign-up screen |

---

## Tech Stack

This is a **pure front-end prototype** — no frameworks, no build tools.

- **HTML5** — semantic page structure
- **CSS3** — custom properties, flexbox, CSS grid, responsive design
- **Vanilla JavaScript** — mobile menu toggle, scroll animations
- **Font Awesome 6** — iconography
- **Google Fonts** — Inter (body), Pacifico (logo)

---

## Features Demonstrated

- ✅ Responsive layout — adapts from desktop to mobile
- ✅ Sticky navbar with smart scroll (hides on scroll down, reveals on scroll up)
- ✅ Animated hamburger menu (morphs to × on open) with smooth slide-down panel
- ✅ Developer profile modals on the Explore page
- ✅ Post feed with like, comment, and share actions
- ✅ App showcase grid
- ✅ Minimal black-and-white design system with consistent spacing

---

## Project Structure

```
Craftly-Sample-UI/
├── index.html
├── explore.html
├── apps.html
├── developers.html
├── profile.html
├── login.html
├── register.html
├── css/
│   └── style.css
├── js/
│   └── animation.js
└── photos/
    └── (sample images)
```

---

## Running Locally

No installation or build step is required. Just open any HTML file in a browser:

```bash
# Clone the repository
git clone https://github.com/your-username/Craftly-Sample-UI.git

# Open in your browser
open index.html
```

Or use a simple local server for best results:

```bash
# Python 3
python -m http.server 8000

# Then visit
http://localhost:8000
```

---

## Design Language

The UI follows a **minimal, high-contrast** design philosophy:

- **Colors:** Black, white, and light greys — clean and professional
- **Typography:** Inter for readability at all weights; Pacifico for the logo wordmark
- **Components:** Cards with subtle borders and hover states, pill-shaped buttons, rounded avatars
- **Motion:** Smooth cubic-bezier transitions throughout — no jarring snaps

---

## Status

| | |
|---|---|
| **Type** | Design Proposal / Sample UI |
| **Stage** | Prototype (static, no backend) |
| **Live Product** | Not deployed — for reference only |
| **Origin** | Bangladesh 🇧🇩 |

---

## Disclaimer

This is a **sample UI for proposal purposes only.** The Craftly Internet platform shown here is a design concept. All names, posts, follower counts, and app listings displayed are fictional placeholder data created for demonstration.

---

*Built with ❤️ by Team Craftly — From Bangladesh, for the World.*
