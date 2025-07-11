# Positivus Landing Page

A modern, responsive landing page for the Positivus brand, built with React and Tailwind CSS. This project features a clean design, interactive testimonial carousel, team showcase, and a professional contact form—all optimized for desktop, tablet, and mobile devices.

## ✨ Features

- **Responsive Design:** Looks great on all devices (desktop, tablet, mobile)
- **Testimonial Carousel:** Smooth, swipeable, and arrow-navigable testimonials with animated Sparkle pagination
- **Team Grid:** Dynamic, responsive team showcase with "See all team"/"Show less" toggle
- **Contact Form:** Professional form with "Say Hi" and "Get a Quote" modes, random motivational quotes, and mobile-optimized layout
- **Case Studies Block:** Horizontally scrollable, snap-aligned case studies section
- **Modern UI:** Built with Tailwind CSS and Lucide icons for a clean, scalable look
- **Easy Customization:** All content is data-driven and easy to update

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📁 Folder Structure

```
PositivusLandingPage/
├── public/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # All React components
│   ├── data/             # Data files (team, testimonials, quotes, etc.)
│   ├── App.jsx           # Main app entry
│   └── ...
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/PositivusLandingPage.git
   cd PositivusLandingPage
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## 🖼️ Customization

- **Update Team, Testimonials, Quotes:**
  - Edit files in `src/data/` (e.g., `teamData.js`, `testimonialData.js`, `contactQoute.js`)
- **Change Images:**
  - Replace or add images in `src/assets/` and update references in data/components
- **Modify Styles:**
  - Tweak Tailwind classes in components or update `tailwind.config.js` for theme changes

## 🙏 Credits

- [Lucide Icons](https://lucide.dev/) for iconography
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- All contributors and open-source resources used in this project

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
