// animation block
new WOW().init();
// hamburg menu
$(".menu-btn").on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $(".menu-item").toggleClass("menu-item__active");
});
// button scroll down
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
//  slider
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

// fix menu
let fixMenu = document.getElementById("fix-menu");
let activeMenu = 5 + window.pageYOffset;

window.onscroll = function() {
    if (fixMenu.classList.contains('fix-menu__active') && window.pageYOffset <= activeMenu) {
        fixMenu.classList.remove('fix-menu__active');
    } else if (window.pageYOffset > activeMenu) {
        fixMenu.classList.add('fix-menu__active');
    }
};