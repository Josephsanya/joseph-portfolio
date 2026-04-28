# Joseph Sanyaolu — Portfolio

> Fullstack MERN Developer Portfolio  
> Built with **React 18 + Vite** · Dark techy theme · Fully responsive

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
joseph-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── profile.jpg          ← Your profile photo
│   ├── components/
│   │   ├── ui/
│   │   │   ├── FadeIn.jsx       ← Scroll-triggered fade animation
│   │   │   ├── SectionLabel.jsx ← Section numbering label
│   │   │   ├── SkillBar.jsx     ← Animated skill progress bar
│   │   │   ├── StatCard.jsx     ← Animated counter card
│   │   │   └── ProjectCard.jsx  ← Project display card
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── index.js             ← ALL content lives here — edit this!
│   ├── hooks/
│   │   ├── useTyping.js
│   │   ├── useInView.js
│   │   ├── useCounter.js
│   │   └── useScrolled.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Customisation

### Update your content
All portfolio data is centralised in **`src/data/index.js`**.  
Edit projects, skills, experience, socials — no need to touch components.

### Add / replace your photo
Drop your image into `src/assets/` and update the import in `src/components/Hero.jsx`:
```js
import profileImg from '../assets/your-new-photo.jpg'
```

### Enable the contact form
1. Sign up at [formspree.io](https://formspree.io) (free tier available)
2. Create a form and copy your form ID
3. In `src/components/Contact.jsx` replace:
   ```js
   'https://formspree.io/f/YOUR_FORM_ID'
   ```
   with your actual endpoint.

### Add your real CV
Drop your `resume.pdf` inside the `public/` folder.  
The "Download CV" button in Hero already points to `/resume.pdf`.

---

## 🌐 Deployment

### Netlify (recommended — free)
```bash
npm run build
# Drag-and-drop the /dist folder at netlify.com/drop
# OR connect your GitHub repo for auto-deploy on push
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
#   "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🎨 Design Tokens (CSS variables in `global.css`)

| Variable        | Value     | Usage                  |
|-----------------|-----------|------------------------|
| `--bg`          | `#05050a` | Page background        |
| `--bg-card`     | `#0c0c16` | Card backgrounds       |
| `--cyan`        | `#00d9ff` | Primary accent         |
| `--green`       | `#39ff9f` | Success / availability |
| `--purple`      | `#8b5cf6` | Secondary accent       |
| `--text`        | `#e2e8f0` | Body text              |
| `--text-muted`  | `#94a3b8` | Subdued text           |
| `--border`      | `#1e1e30` | Card borders           |

---

## 📦 Dependencies

| Package            | Purpose               |
|--------------------|-----------------------|
| `react`            | UI framework          |
| `react-dom`        | DOM renderer          |
| `vite`             | Build tool / dev server |
| `@vitejs/plugin-react` | React fast-refresh |

Zero external UI libraries — everything is hand-crafted with inline styles + CSS.

---

Built with ❤️ by Joseph Sanyaolu · Lagos, Nigeria
