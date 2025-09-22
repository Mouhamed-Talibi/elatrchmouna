// Wait for the entire window (including images) to load
window.addEventListener('load', () => {
    // Select the loader and content elements
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    
    // Simulate a minimum load time for a smoother experience (e.g., 1000ms)
    // You can remove this setTimeout if you want it to disappear immediately on load
    setTimeout(() => {
        // Hide the loader
        loader.style.display = 'none';
        // Remove the overlay from the body
        document.body.style.overflow = 'visible'; // Restore scrolling
        // Show the content
        content.style.display = 'block'; // Or use 'flex', 'grid', etc., based on your layout
    }, 500); // Adjust the time (in milliseconds) as needed
});