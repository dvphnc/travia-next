<div align="center">

![Travia Journal](public/readme-banner.svg)

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14-8b7355?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-6b5d54?style=flat-square&logo=vercel&logoColor=white)](https://travia-journal.vercel.app)
[![Made by](https://img.shields.io/badge/Made%20by-Joana%20Daphne%20Sy-c8b99a?style=flat-square)](https://github.com/dvphnc)
[![Status](https://img.shields.io/badge/Status-Live-a39382?style=flat-square)](https://travia-journal.vercel.app)

<br/>

**[View Live](https://travia-journal.vercel.app)**

</div>

<br/>

![wave](public/readme-wave.svg)

<br/>

## What is Travia?

Travia is a travel blog built for everyone — not just travelers.

You don't need a passport or a plane ticket to feel something when you read about the hidden temples of Kyoto at dawn, or the way the Welsh language survived in the middle of Patagonia. Travia is a place where anyone can sit down, read a story, and feel like they've been somewhere.

Every post pairs a destination with a piece of trivia — something unexpected, something that makes you say *I didn't know that.* That's the heart of it.

This started as a personal project. A way to learn, build, and create something I'd actually want to use. It ended up becoming one of the things I'm most proud of.

<br/>

![divider](public/readme-divider.svg)

<br/>

## The Stories

<table>
  <tr>
    <td align="center" width="33%">
      <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&auto=format&fit=crop" width="100%" alt="Asia"/>
      <br/><br/>
      <b>Asia</b>
      <br/>
      <sub>Japan &nbsp;·&nbsp; Indonesia &nbsp;·&nbsp; Thailand &nbsp;·&nbsp; Nepal</sub>
    </td>
    <td align="center" width="33%">
      <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&auto=format&fit=crop" width="100%" alt="Europe"/>
      <br/><br/>
      <b>Europe</b>
      <br/>
      <sub>Denmark &nbsp;·&nbsp; Portugal &nbsp;·&nbsp; Switzerland &nbsp;·&nbsp; Scotland</sub>
    </td>
    <td align="center" width="33%">
      <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&auto=format&fit=crop" width="100%" alt="Americas"/>
      <br/><br/>
      <b>Americas</b>
      <br/>
      <sub>USA &nbsp;·&nbsp; Argentina &nbsp;·&nbsp; Canada &nbsp;·&nbsp; Peru</sub>
    </td>
  </tr>
</table>

<br/>

<details>
<summary>&nbsp;&nbsp;<b>See all 12 stories</b></summary>

<br/>

| # | Story | Region | Author | Read |
|---|-------|--------|--------|------|
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

## What I Built

This is a full-stack Next.js application deployed on Vercel. Here's what went into it:

<details>
<summary>&nbsp;&nbsp;<b>The reading experience</b></summary>

<br/>

Reading a blog should feel good. Every article on Travia has a clean single-column layout, a lead paragraph that draws you in, a trivia box that surprises you, and a travel tips section if you actually want to go. The reading progress bar keeps you grounded. The sidebar keeps you from getting lost.

</details>

<details>
<summary>&nbsp;&nbsp;<b>Finding your way around</b></summary>

<br/>

Three categories — Asia, Europe, Americas — each with their own page and header. A live search that filters by destination, tag, or keyword as you type. A "View More Stories" page that shows everything at once. Every entry point leads somewhere worth going.

</details>

<details>
<summary>&nbsp;&nbsp;<b>Sharing a story</b></summary>

<br/>

Each post has a share panel built into the sidebar — X, Facebook, Instagram, and a copy link button. The post cards on the homepage have quick share buttons too, so you can pass a story along without even opening it.

</details>

<details>
<summary>&nbsp;&nbsp;<b>The welcome screen</b></summary>

<br/>

Every time you land on the home page, a short splash screen plays. The logo floats in, the name appears, a loading bar fills, and then the site opens. It takes about three seconds. It sets the tone.

</details>

<details>
<summary>&nbsp;&nbsp;<b>The small things</b></summary>

<br/>

Sticky navbar that casts a shadow as you scroll. A back-to-top button that appears only when you need it. Reading time on every card. Fallback images so nothing ever breaks. Mobile menu that actually works. SEO meta tags and Open Graph so shared links look right.

</details>

<br/>

![divider](public/readme-divider.svg)

<br/>

## Built With

```
Next.js 14      — React framework, Pages Router, static generation
JavaScript      — No TypeScript, keeping it straightforward
Custom CSS      — No Tailwind, no Bootstrap, written from scratch
Vercel          — Hosting and deployment
Unsplash        — Photography
```

<br/>

![divider](public/readme-divider.svg)

<br/>

## Running It Locally

```bash
git clone https://github.com/dvphnc/travia-journal.git
cd travia-journal
npm install
npm run dev
```

Open `http://localhost:3000` and you're in.

```bash
# Build for production
npm run build
npm start
```

<br/>

![divider](public/readme-divider.svg)

<br/>

## How It's Organized

```
travia-journal/
│
├── components/
│   ├── Layout.js          — head, meta, page wrapper
│   ├── Navbar.js          — sticky nav, mobile menu, search
│   ├── Footer.js          — links, back to top, reading progress
│   ├── PostCard.js        — thumbnail, tags, quick share
│   └── SplashScreen.js    — animated welcome on home load
│
├── data/
│   ├── posts.js           — title, image, tags, excerpt per post
│   └── postContent.js     — full article HTML for each story
│
├── pages/
│   ├── index.js           — home
│   ├── about.js           — about
│   ├── contact.js         — contact form
│   ├── search.js          — live search results
│   ├── all-posts.js       — full story listing
│   ├── asia.js            — asia category
│   ├── europe.js          — europe category
│   ├── americas.js        — americas category
│   └── post/[slug].js     — individual article with sidebar
│
├── pages/api/
│   └── contact.js         — serverless contact handler
│
├── public/
│   ├── logo.png
│   ├── favicon.ico
│   ├── readme-banner.svg
│   ├── readme-divider.svg
│   └── readme-wave.svg
│
└── styles/
    └── globals.css        — everything, written by hand
```

<br/>

![divider](public/readme-divider.svg)

<br/>

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dvphnc/travia-journal)

Push to `main` and Vercel handles the rest.

<br/>

![divider](public/readme-divider.svg)

<br/>

<div align="center">

<img src="https://github.com/dvphnc.png" width="68" style="border-radius:50%" alt="Joana Daphne Sy"/>

<br/><br/>

**Joana Daphne Sy**

<sub>Developer &nbsp;·&nbsp; Storyteller &nbsp;·&nbsp; Curious about everything</sub>

<br/>

[![GitHub](https://img.shields.io/badge/github-dvphnc-8b7355?style=flat-square&logo=github&logoColor=white)](https://github.com/dvphnc)

<br/><br/>

![Travia Journal](public/readme-banner.svg)

<br/>

<sub>Travia Journal &nbsp;·&nbsp; 2025 &nbsp;·&nbsp; MIT License</sub>

</div>
