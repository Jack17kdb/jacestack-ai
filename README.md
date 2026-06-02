# JaceStack AI — Marketing Website

A full-stack MERN marketing website for JaceStack AI, featuring GSAP animations, Three.js hero backgrounds, and a Brevo-powered contact form.

## Tech Stack

**Frontend:** React 18, Tailwind CSS, GSAP (CDN), Three.js (CDN), Lucide React, React Icons, React Router DOM  
**Backend:** Node.js, Express, Mongoose, Brevo Email API  
**Database:** MongoDB (optional — contact form works without it)

---

## Quick Start

### 1. Install dependencies

```bash
# From project root
npm run install-all

# Or manually:
cd server && npm install
cd ../client && npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` inside the `server` folder:

```bash
cp server/.env.example server/.env
```

Then edit `server/.env`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/jacestackai   # Optional

# Brevo
BREVO_API_KEY=your_actual_brevo_api_key
BREVO_SENDER_EMAIL=hello@jacestackai.com
BREVO_SENDER_NAME=JaceStack AI
CONTACT_RECIPIENT_EMAIL=your_personal@email.com    # Where form submissions go

CLIENT_URL=http://localhost:3000
```

> **Get your Brevo API key** at: https://app.brevo.com/settings/keys/api

### 3. Run in development

```bash
# From project root (runs both client + server concurrently)
npm run dev
```

Or separately:
```bash
npm run server   # Express on port 5000
npm run client   # React on port 3000
```

Visit: http://localhost:3000

---

## Project Structure

```
jacestack/
├── client/                      # React frontend
│   ├── public/
│   │   └── index.html           # Fonts, meta tags
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/        # All page sections
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── ServicesSection.jsx
│   │   │   │   ├── PortfolioSection.jsx
│   │   │   │   ├── ProcessSection.jsx
│   │   │   │   ├── AboutSection.jsx
│   │   │   │   ├── InsightsSection.jsx
│   │   │   │   ├── ReviewsSection.jsx
│   │   │   │   └── ContactSection.jsx
│   │   │   ├── three/
│   │   │   │   └── HeroCanvas.jsx   # Three.js animated background
│   │   │   └── ui/
│   │   │       ├── Navbar.jsx
│   │   │       └── Footer.jsx
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   ├── utils/
│   │   │   └── gsapAnimations.js    # GSAP scroll reveal
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css               # Tailwind + custom styles
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                     # Express backend
│   ├── config/
│   │   └── Contact.js          # MongoDB model
│   ├── controllers/
│   │   └── contactController.js # Brevo email logic
│   ├── routes/
│   │   └── contact.js
│   ├── .env.example
│   ├── index.js
│   └── package.json
│
├── package.json                # Root scripts
└── README.md
```

---

## Deployment

### Frontend (Vercel / Netlify)

```bash
cd client && npm run build
```

Upload the `client/build` folder. Set environment variable:
```
REACT_APP_API_URL=https://your-backend.com
```

Update `client/src/components/sections/ContactSection.jsx` to use:
```js
await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, form);
```

### Backend (Railway / Render / VPS)

Deploy the `server/` folder. Set all environment variables from `.env.example`.

---

## Customisation Checklist

- [ ] Update contact email in `server/.env`
- [ ] Add Brevo API key to `server/.env`
- [ ] Update social links in `client/src/components/ui/Footer.jsx`
- [ ] Update phone/email in `client/src/components/sections/ContactSection.jsx`
- [ ] Replace portfolio project details if needed
- [ ] Update blog posts in `InsightsSection.jsx`
- [ ] Add your own domain and configure CORS in `server/index.js`

---

## Notes

- **GSAP & Three.js** are loaded from CDN in `public/index.html` for fast initial paint
- **No MongoDB required** — the contact form works purely via Brevo email even without a DB
- **Rate limiting** is applied globally (100 req/15min) and strictly on contact form (5/hr)
- The **reviews carousel** auto-scrolls and pauses on hover with no dependencies
