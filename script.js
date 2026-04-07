// Menu Mobile (Hambúrguer)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-menu li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Animação de Scroll (Scroll Reveal)
const sections = document.querySelectorAll(".section");

const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Mudança de cor no header ao rolar
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.style.padding = "10px 0";
        header.style.background = "#ffffff";
    } else {
        header.style.padding = "15px 0";
    }
});
