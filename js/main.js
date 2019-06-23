$(".menu-btn").on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $(".menu-item").toggleClass("menu-item__active");
});

$(document).ready(function() {
    $("#scroll_down").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});


let fixMenu = document.getElementById("fix-menu");
let activeMenu = 5 + window.pageYOffset;

window.onscroll = function() {
    console.log(window.pageYOffset);
    if (fixMenu.classList.contains('fix-menu__active') && window.pageYOffset <= activeMenu) {
        fixMenu.classList.remove('fix-menu__active');
    } else if (window.pageYOffset > activeMenu) {
        fixMenu.classList.add('fix-menu__active');
    }
};

$('#carousel').carousel({
    interval: false
});