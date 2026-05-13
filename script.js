// Loader hidden when page is ready
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 2000);
});

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Nav Scroll Background Change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(0,0,0,0.95)";
    }
});

window.addEventListener('load', () => {
    document.getElementById('loader').classList.add('loader-hidden');
});
document.getElementById('year').textContent = new Date().getFullYear();
