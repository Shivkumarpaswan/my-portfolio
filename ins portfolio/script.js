// Simple scroll animation
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.card, .work-item, .stat');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Initial hidden state
document.querySelectorAll('.card, .work-item, .stat').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
});
