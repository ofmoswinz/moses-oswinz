/* 1. LOADER CONTROLLER */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 3000); 
});

/* 2. DYNAMIC NAVBAR SCROLL */
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        nav.style.padding = "12px 8%";
        nav.style.background = "#000000";
        nav.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.background = "rgba(0, 0, 0, 0.9)";
        nav.style.boxShadow = "none";
    }
});

/* 3. DYNAMIC YEAR & NAVIGATION */
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = currentYear;
}

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("Navigating to:", link.textContent);
    });
});
