$(document).ready(function() {
    let menuItem = $('.menu-item');
    
    menuItem.on('click', function(event){
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.menu-item-active').toggleClass('menu-item-active');
        $(this).toggleClass('menu-item-active');

    });
});