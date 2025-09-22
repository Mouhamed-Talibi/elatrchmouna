// Simple animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
        
        heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }, 300);
});