// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.padding = "15px 8%";
        nav.style.background = "#000";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.background = "rgba(0, 0, 0, 0.9)";
    }
});