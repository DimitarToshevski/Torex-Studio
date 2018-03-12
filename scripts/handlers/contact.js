handlers.contact = function () {
    this.contact_page = true;
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        main: './templates/contact_page/contactpage_main_wrapper.hbs',
        contactpage_main_section_offers: './templates/contact_page/contactpage_main_section_offers.hbs',
        footer_offers: './templates/common/footer/single_offer.hbs',
        contactpage_main_section_working_time: './templates/contact_page/contactpage_main_section_working_time.hbs',
        contactpage_main_section_contact_form_with_address: './templates/contact_page/contactpage_main_section_contact_form_with_address.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs');
    }).then(function () {
        sticky.stickFooter();
        sticky.stickHeader();
        scrollTop(true);
        googleMaps();
    })
};