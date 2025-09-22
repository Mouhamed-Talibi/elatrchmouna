// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animate title on load
    const mainTitle = document.querySelector('.main-title h2');
    mainTitle.style.opacity = '0';
    mainTitle.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        mainTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        mainTitle.style.opacity = '1';
        mainTitle.style.transform = 'translateY(0)';
    }, 300);
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});