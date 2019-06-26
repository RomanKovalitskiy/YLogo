(function() {
    new WOW().init();

    $(".menu-btn").on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $(".menu-item").toggleClass("menu-item__active");
    });

    $(document).ready(function() {
        $("#scroll_down").on("click", "a", function(event) {
            event.preventDefault();
            let id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
        });
    });

    $('#carousel_1').carousel({
        interval: 4000,
        ride: 'carousel',
        wrap: false,
    });

    $('#carousel_2').carousel({
        interval: 4000,
        ride: 'carousel',
        wrap: false,
    });

    const fixMenu = document.getElementById("fix-menu");
    const activeMenu = window.pageYOffset;

    window.onscroll = function() {
        if (fixMenu.classList.contains('fix-menu__active') && window.pageYOffset <= activeMenu) {
            fixMenu.classList.remove('fix-menu__active');
            return;
        }
        if (window.pageYOffset > activeMenu) {
            fixMenu.classList.add('fix-menu__active');
        }
    };
}());