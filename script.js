document.addEventListener('DOMContentLoaded', function () {
    function setActiveMenu() {
        var links = document.querySelectorAll('nav ul li a');
        var contactLink = document.querySelector('nav ul li a[href="#contact"]');

        // Remove the active class from all links
        links.forEach(function (link) {
            link.classList.remove('active');
        });

        // Add the active class only to the contact link
        contactLink.classList.add('active');
    }

    window.addEventListener('scroll', setActiveMenu);

    // Initial trigger to set the active class based on the current scroll position
    setActiveMenu();
});
