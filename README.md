<div align="center">

![Travia Journal](public/readme-banner.svg)

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14-8b7355?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-6b5d54?style=flat-square&logo=vercel&logoColor=white)](https://travia-journal.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-c8b99a?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Live-a39382?style=flat-square)](https://travia-journal.vercel.app)

<br/>

*A minimalist travel blog that pairs destinations with fascinating trivia.*
*Exploring the world, one story at a time.*

<br/>

[Visit Live Site](https://travia-journal.vercel.app) &nbsp;&nbsp;·&nbsp;&nbsp; [View Stories](#stories) &nbsp;&nbsp;·&nbsp;&nbsp; [Tech Stack](#tech-stack) &nbsp;&nbsp;·&nbsp;&nbsp; [Getting Started](#getting-started)

</div>

<br/>

![divider](public/readme-divider.svg)

<br/>

## About

**Travia** is a personal travel blog by **Joana Daphne Sy**. The name is a blend of *Travel* and *Trivia* — because every destination holds a story worth telling.

Each article goes beyond the usual travel guide, combining personal narrative with cultural insight, practical tips, and surprising facts that make each place unforgettable.

<br/>

![divider](public/readme-divider.svg)

<br/>

## Stories

<table>
  <tr>
    <td align="center" width="33%">
      <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&auto=format&fit=crop" width="100%" alt="Asia"/>
      <br/><br/>
      <b>Asia</b>
      <br/>
      <sub>Japan · Indonesia · Thailand · Nepal</sub>
    </td>
    <td align="center" width="33%">
      <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&auto=format&fit=crop" width="100%" alt="Europe"/>
      <br/><br/>
      <b>Europe</b>
      <br/>
      <sub>Denmark · Portugal · Switzerland · Scotland</sub>
    </td>
    <td align="center" width="33%">
      <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&auto=format&fit=crop" width="100%" alt="Americas"/>
      <br/><br/>
      <b>Americas</b>
      <br/>
      <sub>USA · Argentina · Canada · Peru</sub>
    </td>
  </tr>
</table>

<br/>

<details>
<summary><b>View All 12 Stories</b></summary>

<br/>

| # | Title | Region | Author | Read Time |
|---|-------|--------|--------|-----------|
| 01 | Hidden Temples of Kyoto | Asia | Sarah Chen | 5 min |
| 02 | Bali's Spiritual Retreats | Asia | Maya Patel | 5 min |
| 03 | Street Food Culture in Bangkok | Asia | David Wong | 6 min |
| 04 | Hiking the Himalayas | Asia | Raj Sharma | 7 min |
| 05 | Minimalist Living in Copenhagen | Europe | Lars Nielsen | 6 min |
| 06 | Portuguese Coastal Villages | Europe | Ana Silva | 6 min |
| 07 | Alpine Minimalism in Switzerland | Europe | Felix Weber | 6 min |
| 08 | Scottish Highlands Solitude | Europe | James MacLeod | 6 min |
| 09 | Pacific Coast Highway Journey | Americas | Michael Torres | 7 min |
| 10 | Patagonian Wilderness | Americas | Isabella Rodriguez | 7 min |
| 11 | Montreal's Architectural Heritage | Americas | Sophie Leblanc | 6 min |
| 12 | Ancient Ruins of Peru | Americas | Carlos Mendoza | 7 min |

</details>

<br/>

![divider](public/readme-divider.svg)

<br/>

## Features

<details>
<summary><b>Navigation & Layout</b></summary>

<br/>

- Animated splash screen with floating logo on home page load
- Sticky navbar with scroll shadow effect
- Mobile responsive with hamburger menu
- Reading progress bar on article pages
- Back to top button

</details>

<details>
<summary><b>Content & Discovery</b></summary>

<br/>

- Post cards with thumbnail images and reading time
- Category filtering — Asia, Europe, Americas
- Live search by destination, tag, or keyword
- Related posts section at the end of each article
- Post sidebar with article info and quick share

</details>

<details>
<summary><b>Article Features</b></summary>

<br/>

- Lead paragraph with left border accent
- Trivia box with surprising destination facts
- Travel tips grid for practical planning
- Social sharing — X (Twitter), Facebook, Instagram
- Copy link to clipboard

</details>

<details>
<summary><b>SEO & Performance</b></summary>

<br/>

- Meta tags and Open Graph for social previews
- Static site generation via Next.js
- Optimized images with fallback handling
- Serverless contact form via API route

</details>

<br/>

![divider](public/readme-divider.svg)

<br/>

## Design

Travia uses a warm, minimalist aesthetic — intentional, readable, and calm.

| Token | Value | Use |
|-------|-------|-----|
| Primary | `#8b7355` | Buttons, links, accents |
| Secondary | `#6b5d54` | Headings, hover states |
| Background | `#f8f6f3` | Page background |
| Surface | `#ffffff` | Cards, panels |
| Border | `#e8e4df` | Dividers, outlines |
| Muted | `#a39382` | Metadata, captions |
| Text | `#3d3834` | Body copy |
| Font | Inter | All text |

<br/>

![divider](public/readme-divider.svg)

<br/>

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (Pages Router) |
| Language | JavaScript |
| Styling | Custom CSS |
| Hosting | Vercel |
| Images | Unsplash |

<br/>

![divider](public/readme-divider.svg)

<br/>

## Getting Started

### Prerequisites

```
Node.js v18+
npm
```

### Installation

```bash
# Clone the repository
git clone https://github.com/dvphnc/travia-journal.git

# Navigate into the project
cd travia-journal

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build

```bash
npm run build
npm start
```

<br/>

![divider](public/readme-divider.svg)

<br/>

## Project Structure

```
travia-journal/
├── components/
│   ├── Layout.js           Page wrapper with Head meta tags
│   ├── Navbar.js           Sticky navbar with mobile menu
│   ├── Footer.js           Footer, back to top, progress bar
│   ├── PostCard.js         Post card with thumbnail and share
│   └── SplashScreen.js     Animated welcome screen
│
├── data/
│   ├── posts.js            Post metadata — title, image, tags
│   └── postContent.js      Full article HTML content
│
├── pages/
│   ├── _app.js             App wrapper and splash screen logic
│   ├── index.js            Home page
│   ├── about.js            About page
│   ├── contact.js          Contact form
│   ├── search.js           Search results
│   ├── all-posts.js        All stories listing
│   ├── asia.js             Asia category
│   ├── europe.js           Europe category
│   ├── americas.js         Americas category
│   └── post/[slug].js      Dynamic article page with sidebar
│
├── pages/api/
│   └── contact.js          Contact form serverless handler
│
├── public/
│   ├── logo.png            Travia logo
│   ├── favicon.ico         Browser tab icon
│   ├── readme-banner.svg   Animated README header
│   └── readme-divider.svg  Animated section divider
│
├── styles/
│   └── globals.css         Global styles and earthy palette
│
└── next.config.js          Image domain configuration
```

<br/>

![divider](public/readme-divider.svg)

<br/>

## Deployment

Travia Journal is deployed on **Vercel** with automatic deployments triggered on every push to `main`.

```bash
git push origin main
# Vercel deploys automatically
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dvphnc/travia-journal)

<br/>

![divider](public/readme-divider.svg)

<br/>

## Author

<div align="center">

<img src="https://github.com/dvphnc.png" width="72" style="border-radius:50%" alt="Joana Daphne Sy"/>

<br/><br/>

**Joana Daphne Sy**

Solo traveler · Storyteller · Developer

[![GitHub](https://img.shields.io/badge/GitHub-dvphnc-8b7355?style=flat-square&logo=github&logoColor=white)](https://github.com/dvphnc)

</div>

<br/>

![divider](public/readme-divider.svg)

<br/>

## License

This project is open source and available under the [MIT License](LICENSE).

<br/>

<div align="center">

![Travia Journal](public/readme-banner.svg)

<br/>

<sub>Made with care &nbsp;·&nbsp; Travia Journal &nbsp;·&nbsp; 2025</sub>

<br/>

<sub><i>Not all those who wander are lost.</i></sub>

</div>