# Personal Portfolio - Miguel Alexis Díaz

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://alexisdiaz.nocompila.com.mx/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/Material--UI-5.x-007FFF)](https://mui.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Full Stack Developer.

## Live Demo

Visit the live site: **[alexisdiaz.nocompila.com.mx](https://alexisdiaz.nocompila.com.mx/)**

## Features

- **Modern UI Design** - Clean and professional interface with gradient effects
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Built with Vite for lightning-fast load times
- **Interactive Components** - Smooth animations and hover effects
- **Easy Navigation** - React Router for seamless page transitions
- **PDF Viewer** - Integrated CV viewer with download functionality
- **Social Integration** - Direct links to GitHub, LinkedIn, Twitter, WhatsApp, and Email
- **SEO Friendly** - Optimized metadata and semantic HTML

## Tech Stack

### Frontend
- **React 18.x** - JavaScript library for building user interfaces
- **Vite 5.x** - Next-generation frontend build tool
- **React Router DOM 6.x** - Declarative routing for React applications

### UI Framework & Styling
- **Material UI 5.x** - React UI component library
- **Emotion** - CSS-in-JS library for styling
- **Material Icons** - Comprehensive icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **Git** - Version control

## Project Structure

```
portfolio-alexis/
├── public/
│   ├── CV/
│   │   └── CV-Alexis-Diaz.pdf
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Proyectos.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Contacto.jsx
│   │   └── CV.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maniadiaz/alexisdiaz-portafolio.git
   cd alexisdiaz-portafolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Pages Overview

### Home
- Hero section with professional introduction
- Quick stats and achievements
- Technologies showcase
- Call-to-action buttons
- Social media links

### Projects
Showcases 4 major projects:
1. **Online Degree System** - Academic management platform (PHP, MySQL)
2. **GPS Management App** - Real-time GPS tracking solution (React, REST API)
3. **Micro-Savings Platform** - Financial management system (React, Express, MySQL)
4. **Personal Portfolio** - This website (React, Material UI)

Each project includes:
- Detailed description
- Key responsibilities
- Technologies used
- Status badge (Completed/In Progress)

### Skills
Interactive skills showcase organized by categories:
- **Frontend Development** - React, JavaScript, TypeScript, HTML5, CSS3
- **Backend Development** - Node.js, Express, PHP, C#, .NET
- **Database** - MySQL, MariaDB, SQLite
- **DevOps & Tools** - Git, VPS Management, Nginx, DNS

Features:
- Tabbed interface for easy navigation
- Progress bars showing proficiency levels
- Experience duration for each skill
- Architecture & concepts section

### Contact
Multiple ways to get in touch:
- **Location** - Mazatlán, Sinaloa, México
- **Phone** - +52 669 238 9124 (WhatsApp available)
- **Email** - miguelalexisdi18@gmail.com
- **Social Media** - GitHub, LinkedIn, Twitter
- **Availability Status** - Open for work indicator

### CV/Resume
- Quick contact information
- Professional highlights
- Key skills overview
- Featured projects summary
- Full-screen PDF viewer modal
- Download functionality
- Print option
- Share functionality

## Design Features

### Color Palette
- **Primary Blue**: `#667eea`
- **Secondary Purple**: `#764ba2`
- **Accent Pink**: `#d946ef`
- **Success Green**: `#10b981`

### Animations & Effects
- Smooth page transitions
- Hover effects on cards and buttons
- Gradient backgrounds
- Glow effects
- Pulsing animations
- Slide-in animations

## Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile** (320px - 768px)
- **Tablet** (769px - 1024px)
- **Desktop** (1025px and above)

## Configuration

### Update Personal Information

Edit the following files to customize with your own information:

1. **Home Page** - `src/pages/Home.jsx`
   - Name, title, bio
   - Stats and achievements
   - Technologies list

2. **Projects** - `src/pages/Proyectos.jsx`
   - Project details, descriptions, technologies

3. **Skills** - `src/pages/Habilidades.jsx`
   - Skill levels and categories

4. **Contact** - `src/pages/Contacto.jsx`
   - Contact information and social media links

5. **CV** - Replace `public/CV/CV-Alexis-Diaz.pdf` with your own resume

6. **Logo** - Replace `public/logo.png` with your own logo

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify](https://netlify.com)
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## Performance

- Lighthouse Score: 90+
- Bundle Size: ~529 KB (minified)
- First Contentful Paint: < 1.5s
- Accessibility Score: 95+

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/maniadiaz/alexisdiaz-portafolio/issues).

## License

This project is [MIT](LICENSE) licensed.

## Author

**Miguel Alexis Díaz Díaz**

- Website: [alexisdiaz.nocompila.com.mx](https://alexisdiaz.nocompila.com.mx/)
- LinkedIn: [miguel-alexis-diaz-diaz](https://www.linkedin.com/in/miguel-alexis-diaz-diaz-aa0279315/)
- GitHub: [@maniadiaz](https://github.com/maniadiaz)
- Twitter: [@MiguelAlex2813](https://twitter.com/MiguelAlex2813)
- Email: miguelalexisdi18@gmail.com

## Acknowledgments

- [Material UI](https://mui.com/) - For the amazing component library
- [React](https://reactjs.org/) - For the powerful framework
- [Vite](https://vitejs.dev/) - For the blazing fast build tool
- [React Router](https://reactrouter.com/) - For seamless routing

## Roadmap

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add multilingual support (Spanish/English)
- [ ] Include testimonials section
- [ ] Add animated background effects
- [ ] Integrate Google Analytics

---

**If you found this portfolio helpful, please consider giving it a star!**

Made with ❤️ and lots of ☕ by Miguel Alexis Díaz