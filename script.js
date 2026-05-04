/* 1. LOADER CONTROLLER */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    // Gives the drawing animation time to finish before fading out
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 3000); 
});

/* 2. DYNAMIC NAVBAR SCROLL */
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    
    if (window.scrollY > 80) { // Trigger slightly earlier for a smoother feel
        nav.style.padding = "12px 8%";
        nav.style.background = "#000000";
        nav.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.background = "rgba(0, 0, 0, 0.9)";
        nav.style.boxShadow = "none";
    }
});

/* 3. MOBILE MENU TOGGLE (Optional helper) */
// If you add a burger icon later, this will handle the click
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Smoothly close menu after clicking a link on mobile
        console.log("Navigating to:", link.textContent);
    });
});

// Automatically update the copyright year
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
