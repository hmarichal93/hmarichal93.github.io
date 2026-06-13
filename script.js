// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const navToggle = document.querySelector('.nav-toggle');
                if (navToggle) navToggle.classList.remove('active');
            }
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = 'none';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }
    });
}

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    }
});

// Dynamic year in footer
const footer = document.querySelector('.footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace(/\b\d{4}\b/, currentYear);
}

// Scroll-spy: highlight the nav link for the section currently in view
const sections = document.querySelectorAll('main section[id]');
const navLinkMap = new Map();
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    navLinkMap.set(link.getAttribute('href').slice(1), link);
});

if (sections.length && navLinkMap.size) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const link = navLinkMap.get(entry.target.id);
                if (link) {
                    navLinkMap.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }, {
        // Trigger when a section's top crosses the upper third of the viewport
        rootMargin: '-90px 0px -70% 0px',
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));
}