(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    // Form Submission Script
    function sendEmail(event) {
        event.preventDefault();
        
        console.log('sendEmail function triggered'); // Debugging

        const guardianName = document.getElementById('gname').value;
        const guardianEmail = document.getElementById('gmail').value;
        const childName = document.getElementById('cname').value;
        const childAge = document.getElementById('cage').value;
        const message = document.getElementById('message').value;

        const subject = `Appointment Request from ${guardianName}`;
        const body = `Guardian Name: ${guardianName}%0D%0A
Guardian Email: ${guardianEmail}%0D%0A
Child Name: ${childName}%0D%0A
Child Age: ${childAge}%0D%0A
Message: ${message}`;

        // Open the default email app
        window.open(`mailto:zaptorrent3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
    }

    // Attach sendEmail to the form
    $('#appointmentForm').on('submit', sendEmail);

})(jQuery);
