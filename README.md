# Shreya H S — Portfolio Website

A modern, high-performance developer portfolio showcasing expertise in **Artificial Intelligence**, **Machine Learning**, **Generative AI**, and **Full-Stack Engineering**.

Designed and built with React 19, Vite, Tailwind CSS v4, and interactive WebGL canvas animations.

---

## 🌟 Highlights & Features

- **Interactive Hero Experience**: Seamlessly integrates an AI-driven talking-head portfolio reel with custom play/pause/reset controls, accessible via keyboard shortcuts (`Escape`) or one-click overlay controls.
- **WebGL Fluid Cursor Dynamics**: Real-time fluid and smoke simulation canvas powered by WebGL shaders that react to cursor movement and gestures.
- **AI & Engineering Showcase**: Detailed technical sections highlighting deep learning frameworks (PyTorch, TensorFlow), Generative AI (LLMs, RAG architectures, LangChain), and full-stack development tools.
- **Featured Projects**: Interactive project cards showcasing real-world machine learning and software engineering applications:
  - *Multi-Modal Medical Diagnosis AI*
  - *Autonomous Driving Perception System*
  - *Real-Time Financial Fraud Detection Engine*
- **Experience & Leadership**: Timeline of practical engineering internships, hackathon achievements, and academic leadership.
- **Interactive Contact Form**: Direct client-side message delivery powered by EmailJS with real-time feedback and validation.
- **Fully Responsive & Accessible**: Mobile-first design optimized across mobile, tablet, laptop, and ultra-wide desktop displays with AOS scroll animations.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Graphics / Shaders**: WebGL Shader Fluid Simulation
- **Contact Services**: [EmailJS](https://www.emailjs.com/)
- **Code Quality**: ESLint 10

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shreyasiddesh/MyPortfolio.git
   cd MyPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Build & Deployment

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

To lint the codebase:

```bash
npm run lint
```

---

## 📂 Project Structure

```text
shreya-portfolio/
├── public/
│   ├── images/              # Profile portraits & hero poster graphics
│   ├── videos/              # Talking-head portfolio reel
│   ├── favicon.svg          # Portfolio favicon
│   └── Shreya_HS_Resume.pdf # Active resume document
├── src/
│   ├── components/          # Modular React components
│   │   ├── Hero.jsx         # Hero section & talking-head reel player
│   │   ├── About.jsx        # About profile & core stack
│   │   ├── TechnicalSkills.jsx
│   │   ├── Projects.jsx
│   │   ├── Internships.jsx
│   │   ├── Leadership.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   └── SplashCursor.jsx # WebGL fluid canvas simulation
│   ├── data/
│   │   └── portfolioData.js # Centralized portfolio content & metadata
│   ├── App.jsx              # Main application root
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 📜 Acknowledgments & Attribution

- Built upon the starter portfolio layout and design inspiration from [Santhosh HG](https://github.com/Santhoshhg15/MyPortfolio).
- WebGL Fluid simulation adapted from [Pavel Dobryakov's WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
