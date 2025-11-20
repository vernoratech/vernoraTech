# VernoraTech Marketing Website

Modern marketing site for VernoraTech built with React, Vite, and Tailwind CSS. The project focuses on high-converting landing page experiences for professional services, featuring dynamic media, curated service offerings, and integrated lead capture.

## Features

- **Hero with video background** featuring a real-time countdown to highlight promotional offers.
- **Service tracks** tailored for different verticals with clear value propositions and collaboration expectations.
- **Process & build journey** sections that explain VernoraTech’s delivery approach.
- **Interactive portfolio, testimonials, and client showcase** components to establish credibility.
- **EmailJS-powered contact form** with configurable service, template, and public keys via environment variables.
- **Responsive layout** optimized for both desktop and mobile with smooth reveal animations.

## Tech Stack

- [React 19](https://react.dev)
- [Vite 7](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [EmailJS Browser SDK](https://www.emailjs.com/docs/sdks/browser-sdk/)
- [React Icons](https://react-icons.github.io/react-icons)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

1. Clone the repository
2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Build for production

   ```bash
   npm run build
   ```

5. Preview the production build locally

   ```bash
   npm run preview
   ```

### Available Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Starts Vite in development mode with HMR |
| `npm run build`  | Bundles the app for production           |
| `npm run preview`| Serves the production build locally      |
| `npm run lint`   | Runs ESLint using the provided config    |

## Environment Variables

The contact form integrates with EmailJS. Create a `.env` file in the project root with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after updating environment variables.

## Project Structure

```
vernoraTech/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── components/
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── Process.jsx
│       ├── Portfolio.jsx
│       ├── ClientShowcase.jsx
│       ├── Contact.jsx
│       └── ...
├── public/
│   └── assets
├── package.json
├── vite.config.js
└── readme.md
```

## Design System

Palette 3 — “Premium Minimal” (muted & classy):

| Role             | Hex Code   |
| ---------------- | ---------- |
| Primary          | `#1A3A6F`  |
| Secondary        | `#2DA3DB`  |
| Background       | `#FAFAFA`  |
| Accent           | `#D9E4F2`  |
| Text Primary     | `#1C1F26`  |
| Text Secondary   | `#6E7787`  |

Use this palette to maintain the premium, minimal visual language across new sections and assets.

## Contact

- Email: [vernoratech@gmail.com](mailto:vernoratech@gmail.com)
- WhatsApp: [+91 73978 25850](https://wa.me/917397825850) · [+91 87674 25955](https://wa.me/918767425955)

---

Need tailored landing pages for your service brand? Reach out to VernoraTech to start a discovery session.