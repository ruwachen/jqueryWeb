$(document).ready(function() {
    $('.jq_dropdown').click(function() {
        event.preventDefault();
        $(this).toggleClass('menu_unline');
        $(this).parent().siblings().find('a').removeClass('menu_unline');
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
    });

    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    $('.jq_dropdown').click(function(event) {
		event.preventDefault();
		$('.jq_dropdown').toggleClass('clickchange');
		$('.jq_dropdown_open').toggleClass('open');
	});

});