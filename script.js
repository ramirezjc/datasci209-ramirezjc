document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        var links = document.querySelectorAll('nav ul li a');
        links.forEach(function (link) {
            var section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                links.forEach(function (link) {
                    link.classList.remove('active');
                });
                link.classList.add('active');
            }
        });
    });

    // Initial trigger to set the active class based on the current scroll position
    window.dispatchEvent(new Event('scroll'));
});
