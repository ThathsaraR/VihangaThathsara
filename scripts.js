// 1. FLOATING NAVBAR LOGIC
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // When scrolled: Move down, shrink width, rounded corners
        navbar.classList.add('scrolled');
    } else {
        // Top of page: Full width, top 0
        navbar.classList.remove('scrolled');
    }
})


const revealElements = document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-up"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); 
        }
    });
}, {
    threshold: 0.25
});

revealElements.forEach(el => {
    observer.observe(el);
});

function toggleSideNavbar() {
    const sidenav = document.getElementById("sidenavbar");
    const openBtn = document.querySelector(".sidenav-container");

    sidenav.style.display = "block";   // show sidenav
    openBtn.style.display = "none";    // hide menu icon
}

function hideSideNavbar() {
    const sidenav = document.getElementById("sidenavbar");
    const openBtn = document.querySelector(".sidenav-container");

    sidenav.style.display = "none";    // hide sidenav
    openBtn.style.display = "block";   // show menu icon again
}
