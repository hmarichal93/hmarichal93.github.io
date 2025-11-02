# Henry Marichal, PhD - Personal Website

A modern, responsive personal portfolio website showcasing research, open-source projects, and professional experience in computer vision and deep learning.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark color scheme with gradient accents
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Fast Loading**: Optimized HTML/CSS/JS with no framework bloat
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern features including CSS Grid, Flexbox, CSS Variables
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Google Fonts**: Inter & JetBrains Mono
- **Font Awesome**: Icon library

## 📁 File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript for interactivity
├── assets/
│   └── img/
│       └── profile.png # Your profile picture
└── README.md          # This file
```

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;      /* Main accent color */
    --secondary: #14b8a6;    /* Secondary accent */
    --bg-primary: #0f172a;   /* Main background */
    /* ... more variables */
}
```

### Content

All content is in `index.html`. Simply search for the sections you want to update:
- **Hero Section**: Name, title, current position, description
- **About**: Biography and research summary
- **Research**: Research interests and focus areas
- **Skills**: Technical stack and tools
- **Experience**: Professional timeline (current: Senior ML Engineer @ Pento)
- **Projects**: Featured projects (TRAS, DeepCS-TRD)
- **Contact**: Contact information and social links

### Adding Projects

Copy a project card in the `<section id="projects">` section and modify:

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">🔬</div>
        <div class="project-links">
            <a href="YOUR_GITHUB_LINK" target="_blank">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <h3>Your Project Name</h3>
    <p class="project-tagline">Your tagline</p>
    <!-- ... rest of content -->
</div>
```

## 🌐 Deployment

This site works with **GitHub Pages** out of the box:

1. Push these files to your GitHub repository
2. Go to repository Settings → Pages
3. Select branch (usually `main`) and `/` (root) folder
4. Save and wait for deployment
5. Your site will be live at `https://hmarichal93.github.io`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔧 Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# VS Code
# Install "Live Server" extension and click "Go Live"
```

Then visit `http://localhost:8000`

## 📝 License

Personal website - All rights reserved.

## 📬 Contact

- Email: hmarichal93@gmail.com
- LinkedIn: [henry-marichal](https://www.linkedin.com/in/henry-marichal/)
- GitHub: [hmarichal93](https://github.com/hmarichal93)

---

*Built with modern web technologies for a fast, beautiful, and accessible web experience.*

