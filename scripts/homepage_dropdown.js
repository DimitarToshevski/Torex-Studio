function accordeon() {
    setTimeout(() => {
        let sectionOffersHeader = $('.homepage_section_offers').find($('.section_header'));
        let accordeonDropdownLinks = $('.body_offer_1').find('a');
        $('.header_offer_1').find('h4').click(function () {
            if ($(event.target).hasClass('shownDropdown')) {
                $('.shown').slideUp();
                $('.shown').removeClass('shown');
                $(event.target).removeClass('shownDropdown');
            }
            else {
                $('.shownDropdown').removeClass('shownDropdown');
                $(event.target).addClass('shownDropdown');
                $('.shown').removeClass('shown').slideUp();
                $(event.target).parent().next('.body_offer_1').find('p').addClass('shown').slideDown();

            }
            //Adding image pulse effect and header changes color when the mouse enters a dropdown from the accordeon
            accordeonDropdownLinks.mouseenter(() => {
                sectionOffersHeader.addClass('hoverEffect')
                    .find('h1').css('color', 'rgb(28, 160, 60)');
                accordeonDropdownLinks.mouseleave(() => {
                    sectionOffersHeader.removeClass('hoverEffect')
                        .find('h1').css('color', '');
                })
            })
        })
    }, 1000);
}