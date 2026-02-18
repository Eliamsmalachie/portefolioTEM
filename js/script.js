//  EMAILJS CONFIGURATION

emailjs.init("T8fEpb8KxZNpnnLEX");

// MOBILE MENU TOGGLE 
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FORM HANDLING
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value || 'Non fourni',
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showToast('Veuillez remplir tous les champs requis', 'error');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showToast('Veuillez entrer une adresse email valide', 'error');
        return;
    }

    try {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        // Send email using EmailJS
        const response = await emailjs.send(
            'service_jur2i3p',      
            'zs84bk6',     
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                title: formData.subject,
            }
        );

        if (response.status === 200) {
            showToast('Message envoyé avec succès! Nous vous répondrons bientôt.', 'success');
            contactForm.reset();
        } else {
            showToast('Erreur lors de l\'envoi du message. Veuillez réessayer.', 'error');
        }

        // Restore button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

    } catch (error) {
        console.error('Erreur:', error);
        showToast('Erreur lors de l\'envoi du message. Veuillez réessayer.', 'error');
        
        // Restore button state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Envoyer le message';
        submitBtn.disabled = false;
    }
});

//  TOAST NOTIFICATION 
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast show ${type}`;

    // Auto-hide after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

//  SCROLL ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .service-card, .project-card, .skill-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

//  NAVBAR SCROLL EFFECT
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

//  PARALLAX EFFECT 
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        const scrollPosition = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// COUNTER ANIMATION
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// FORM VALIDATION
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
            input.style.borderColor = '#f44336';
        } else {
            input.style.borderColor = 'var(--border-color)';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = 'var(--primary-color)';
    });
});

// ACTIVE LINK HIGHLIGHTING
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
        }
    });
});

// PAGE LOAD ANIMATION
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// KEYBOARD SHORTCUTS
document.addEventListener('keydown', (e) => {
    // Press 'C' to scroll to contact section
    if (e.key === 'c' || e.key === 'C') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});

//  UTILITY FUNCTIONS 

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//  INITIALIZATION 
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Add any initialization code here
    // For example, you could load additional data or initialize third-party libraries
});

// ERROR HANDLING
document.getElementById("downloadBtn").addEventListener("click", function() {
    window.location.href = "cv-tizie-malachie.pdf"});