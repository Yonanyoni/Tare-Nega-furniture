document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header Effect
    const header = document.querySelector('header');
    const scrollThreshold = 100;

    // Back to Top Button
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Navigation Links
    const navLinks = document.querySelectorAll('nav a.nav-link');

    // Highlight Active Nav Link (on scroll and on load)
    function highlightNav() {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', () => {
        // Header scrolled effect
        if (header) {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        // Back to Top Button Show/Hide
        if (backToTopBtn) {
            if (window.scrollY > 200) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
        // Navigation background change on scroll
        const nav = document.querySelector('nav');
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        highlightNav();
    });

    // Initial highlight on page load
    highlightNav();

    // Smooth Scroll for Navigation
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Back to Top Button Smooth Scroll
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Search Bar Functionality
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const value = this.search.value.trim();
            if (value) {
                alert('Search for: ' + value);
                this.search.focus();
            }
        });
    }

    // Optional: Fade-in animation for sections on scroll
    const sections = document.querySelectorAll('section');
    function revealSections() {
        const triggerBottom = window.innerHeight * 0.95;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();

    // Advanced Hamburger menu for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');
    const navBackdrop = document.querySelector('.nav-backdrop');
    if (navToggle && navUl && navBackdrop) {
        navToggle.addEventListener('click', () => {
            navUl.classList.toggle('open');
            navToggle.classList.toggle('open');
            navBackdrop.classList.toggle('show');
        });
        navBackdrop.addEventListener('click', () => {
            navUl.classList.remove('open');
            navToggle.classList.remove('open');
            navBackdrop.classList.remove('show');
        });
        // Close menu when clicking a link
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('open');
                navToggle.classList.remove('open');
                navBackdrop.classList.remove('show');
            });
        });
    }
});s