function hoverHomepageSection() {
    setTimeout(() => {
        let sectionOffersHeader = $('.homepage_section_offers').find($('.section_header'));
        let accordeonDropdownLinks = $('.body_offer_1').find('a');

        //Adding image pulse effect and header changes color when the mouse enters a dropdown from the accordeon
        accordeonDropdownLinks.mouseenter(() => {
            sectionOffersHeader.addClass('hoverEffect')
                .find('h1').css('color', 'rgb(28, 160, 60)');
            accordeonDropdownLinks.mouseleave(() => {
                sectionOffersHeader.removeClass('hoverEffect')
                    .find('h1').css('color', '');
            })
        })
    }, 1000)
}