document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            console.log(`Section: ${section.id}, sectionTop: ${sectionTop}, pageYOffset: ${window.pageYOffset}`);
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        console.log(`Current section: ${current}`);

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
