document.addEventListener('DOMContentLoaded', () => {

    const clickableElements = document.querySelectorAll('.cta-button, .nav a, .submit-button');

    clickableElements.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.add('pulse');

            el.addEventListener(
                'animationend',
                () => el.classList.remove('pulse'),
                { once: true }
            );
        });
    });

    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible'); 
                }
            });
        },
        { threshold: 0.1 } 
    );

    elements.forEach(el => observer.observe(el));

    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm && submitBtn) {
        
        contactForm.addEventListener('input', () => {
       
            if (contactForm.checkValidity()) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.style.cursor = "pointer";
            } else {
                submitBtn.disabled = true;
                submitBtn.style.opacity = "0.6";
                submitBtn.style.cursor = "not-allowed";
            }
        });
    }
});