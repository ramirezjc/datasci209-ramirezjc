document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function updateActiveLink() {
        let current = '';
        
        console.log('--- Scroll Event ---');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;
            const scrollPosition = window.pageYOffset + window.innerHeight / 2;  // Consider middle of the viewport for better accuracy
            console.log(`Section: ${section.id}, Top: ${sectionTop}, Bottom: ${sectionBottom}, Scroll Position: ${scrollPosition}`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        console.log(`Current Active Section: ${current}`);

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();  // Initialize active link on page load
});
