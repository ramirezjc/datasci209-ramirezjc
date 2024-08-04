$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    });
});
