function adaptNav() {
    $('#btn_menu').on('mouseenter',() => {
        $('.header_nav').css('display','block');
        $('#btn_menu').css({"width": "175px", "height": "225px"});
    });

    $('#btn_menu').on('mouseleave',() => {
        $('.header_nav').css('display','none');
    })
}