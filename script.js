// Mobile menu toggle
const mobileBtn = document.querySelector('.mobile-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Modal functionality
const projectLinks = document.querySelectorAll('.project-link');
const modals = document.querySelectorAll('.modal');
const modalCloses = document.querySelectorAll('.modal-close');

projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
    });
});

modalCloses.forEach(close => {
    close.addEventListener('click', () => {
        modals.forEach(modal => modal.classList.add('hidden'));
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