function runLoader(callback) {
    const loader = document.getElementById('loader');
    loader.classList.remove('loader-hidden');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
        if (callback) callback();
    }, 2500); 
}

window.addEventListener('load', () => {
    runLoader();
});

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const targetId = item.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            runLoader(() => {
                window.location.hash = targetId;
            });
        }
    });
});

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(0,0,0,0.95)";
    }
});
