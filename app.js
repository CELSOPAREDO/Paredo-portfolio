// Theme Toggle
const btn = document.getElementById('theme-btn');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Scroll to Top
const upBtn = document.getElementById('up-btn');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }
};
upBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Email
function sendEmail() {
    window.location.href = "mailto:celso.paredo@urios.edu.ph";
}