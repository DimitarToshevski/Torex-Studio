function accordeon() {
    setTimeout(function () {
        $('.header_offer_1').find('h4').click(function () {
            if ($(event.target).hasClass('shownContinent')) {
                $('.shown').slideUp();
                $('.shown').removeClass('shown');
                $(event.target).removeClass('shownContinent');
            }
            else {
                $('.shownContinent').removeClass('shownContinent');
                $(event.target).addClass('shownContinent');
                $('.shown').removeClass('shown').slideUp();
                $(event.target).parent().next('.body_offer_1').find('p').addClass('shown').slideDown();

            }
        })
    }, 1000);
}