// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.getElementById('sliderContainer');
const dotsContainer = document.getElementById('sliderDots');
const totalSlides = slides.length;

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Event listeners for slider buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Auto-advance slider every 5 seconds
let autoSlide = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 5000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        notes: document.getElementById('notes').value,
        timestamp: new Date().toISOString()
    };

    // Log to console (ready to be sent to server)
    console.log('Booking Request:', formData);
    console.log('Ready to send to server endpoint at: /api/bookings');

    // Show success message (you can customize this)
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');

    // Reset form
    bookingForm.reset();

    // Here's where you would typically send to a server:
    /*
    fetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Booking confirmed!');
        bookingForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error processing your booking. Please try again.');
    });
    */
});

// Mobile menu toggle (optional enhancement)
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(44, 44, 44, 0.98)';
    } else {
        navbar.style.background = 'rgba(44, 44, 44, 0.95)';
    }

    lastScroll = currentScroll;
});

// Set minimum date for booking (today)
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Form validation enhancement
const inputs = bookingForm.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value.trim() !== '' || this.hasAttribute('required')) {
            this.style.borderColor = this.checkValidity() ? '#4CAF50' : '#f44336';
        }
    });

    input.addEventListener('focus', function () {
        this.style.borderColor = '#d4af37';
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and form
document.querySelectorAll('.service-card, .booking-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});