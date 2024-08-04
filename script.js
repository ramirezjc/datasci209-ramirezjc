document.addEventListener('DOMContentLoaded', function () {
    function setActiveMenu() {
        var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        var links = document.querySelectorAll('nav ul li a');
        var lastLink = links[links.length - 1];
        var contactSection = document.querySelector(lastLink.getAttribute('href'));
        
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            links.forEach(function (link) {
                link.classList.remove('active');
            });
            lastLink.classList.add('active');
            return;
        }

        links.forEach(function (link) {
            var section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                links.forEach(function (link) {
                    link.classList.remove('active');
                });
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveMenu);

    // Initial trigger to set the active class based on the current scroll position
    setActiveMenu();
});
