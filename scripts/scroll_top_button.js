function scrollTop(now) {
    if(now) {
        $(window).scrollTop(0);
    }
    setTimeout(() => {
        let scrollTopButton = $('#scroll_top');
        let headerHeight = $('.header_row').height();
        //showing button on scrollDown
        $(window).on('scroll', () => {
            if ($(document).scrollTop() > headerHeight + 200) {
                scrollTopButton.css('display', 'inline-flex')
            } else {
                scrollTopButton.css('display', 'none')
            }
        });
        //attaching event listener to button to scroll to top on click
        scrollTopButton.click(() => {
            $('html').animate({ scrollTop: 0 }, 'slow');
            })
    }, 500)
}
