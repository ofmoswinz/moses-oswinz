// Loader code removed as requested
// Dynamic year in footer and Scroll effects
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(0,0,0,0.95)";
    }
});
