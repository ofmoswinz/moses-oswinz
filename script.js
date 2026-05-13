// Function to handle the loading screen
function runLoader(callback) {
    const loader = document.getElementById('loader');
    loader.classList.remove('loader-hidden'); // Show loader
    
    // Allow the 4s animation to play, then hide it
    setTimeout(() => {
        loader.classList.add('loader-hidden');
        if (callback) callback();
    }, 2500); // 2.5 seconds for a snappy transition
}

// Run loader on initial page load
window.addEventListener('load', () => {
    runLoader();
});

// TRIGGER LOADER ON LINK CLICKS
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Only run loader for internal hash links
        const targetId = item.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault(); // Pause the jump
            runLoader(() => {
                // After loader finishes, jump to section
                window.location.hash = targetId;
            });
        }
    });
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav Scroll Background Change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(0,0,0,0.95)";
    }
});
