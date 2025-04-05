// Mobile menu toggle
const mobileBtn = document.querySelector('.mobile-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

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
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Modal functionality
const projectLinks = document.querySelectorAll('.project-link');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal-close');

// Ensure all modals are hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    modals.forEach(modal => {
        modal.classList.add('hidden'); // Forcefully add 'hidden' to all modals
    });
});

// Open modal when clicking "View Project"
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        } else {
            console.error(`Modal with ID ${modalId} not found`);
        }
    });
});

// Close modal when clicking "X"
closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default button behavior
        const modal = button.closest('.modal');
        if (modal) {
            modal.classList.add('hidden');
        } else {
            console.error('No parent modal found for close button');
        }
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});