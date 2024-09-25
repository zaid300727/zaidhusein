window.addEventListener('load', () => {
    document.body.classList.add('loaded'); // Add class to make body visible
});

// Optional: Fade out effect on page unload
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        document.body.style.opacity = '0'; // Start fading out
    });
});
