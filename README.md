# 🌐 Personal Portfolio Website

A modern personal portfolio website built with React, Vite, and Tailwind CSS featuring glassmorphism design and smooth animations.

**Live Site**: [sarv-me.vercel.app](https://sarv-me.vercel.app)

## Features

- Modern glassmorphism design with dark theme
- Smooth animations powered by Framer Motion
- Fully responsive across all devices
- Interactive sections:
  - Hero section with animated gradient text
  - About section with feature cards
  - Professional experience timeline
  - Skills showcase with hover effects
  - Project portfolio with live demos
  - Extracurricular activities timeline
  - Contact section with social links
- Performance optimized with Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/06sarv/sarv.me.git
cd sarv.me
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files to customize with your information:

- `src/components/Hero.jsx` - Name, title, and introduction
- `src/components/About.jsx` - About section content and stats
- `src/components/Experience.jsx` - Professional experience details
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Projects.jsx` - Projects and portfolio items
- `src/components/Volunteering.jsx` - Extracurricular activities
- `src/components/Contact.jsx` - Contact information and social links
- `index.html` - Page title and meta tags

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update the Google Fonts link in `index.html`
- **Animations**: Adjust animation timings in component files

## Tech Stack

- React 18 - UI library
- Vite - Build tool and dev server
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Animation library
- Lucide React - Icon library
- PostCSS - CSS processing

## Design Principles

This website follows modern design principles:

- **Glassmorphism** - Semi-transparent elements with backdrop blur
- **Dark Theme** - High contrast with beige accents
- **Smooth Animations** - Subtle motion for better UX
- **Typography** - Clean Inter font for readability
- **Responsive** - Mobile-first approach
- **Accessibility** - Semantic HTML and ARIA labels

## Deployment

This project is deployed on Vercel. To deploy your own:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build
4. Your site will be live in seconds

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with React, Vite, and Tailwind CSS
