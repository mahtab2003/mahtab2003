// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Portfolio Modal
const modal = document.getElementById('portfolioModal');
const modalContent = modal.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');

// Portfolio project details
const projectDetails = {
    ecommerce: {
        title: 'E-Commerce Platform',
        description: 'A fully responsive e-commerce platform built with modern technologies.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        features: [
            'User authentication',
            'Product management',
            'Shopping cart',
            'Secure payments',
            'Order tracking'
        ],
        results: 'Increased client\'s online sales by 200% within 3 months of launch.'
    },
    fitness: {
        title: 'Fitness Tracking App',
        description: 'Native mobile application for fitness tracking and workout planning.',
        technologies: ['React Native', 'Firebase', 'Redux', 'Native APIs'],
        features: [
            'Workout tracking',
            'Progress monitoring',
            'Social sharing',
            'Custom workout plans',
            'Integration with health apps'
        ],
        results: 'Over 50,000 downloads with 4.8/5 rating on both App Store and Play Store.'
    },
    branding: {
        title: 'Corporate Branding',
        description: 'Complete brand identity design for a technology startup.',
        technologies: ['Adobe Creative Suite', 'Figma', 'Sketch'],
        features: [
            'Logo design',
            'Brand guidelines',
            'Marketing materials',
            'Social media assets',
            'Website design'
        ],
        results: 'Helped client establish a strong brand presence and increase market recognition.'
    }
};

// Open modal with project details
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', (e) => {
        const projectId = button.getAttribute('data-project');
        const project = projectDetails[projectId];
        
        if (project) {
            modalContent.innerHTML = `
                <h2>${project.title}</h2>
                <p class="project-description">${project.description}</p>
                
                <div class="project-details">
                    <div class="technologies">
                        <h3>Technologies Used</h3>
                        <ul>
                            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="features">
                        <h3>Key Features</h3>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="results">
                        <h3>Results</h3>
                        <p>${project.results}</p>
                    </div>
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // No initialization needed
});
