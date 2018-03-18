import { myData } from "../router";
let about = function (ctx) {
    this.teammates = myData['teammates'];
    this.image = myData['slider_images'];
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        main: './templates/about_page/aboutpage_main_wrapper.hbs',
        aboutpage_section_teammate: './templates/about_page/aboutpage_main_section_teammate.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_offers: './templates/common/footer/single_offer.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs');
    }).then(() => {
        sticky.stickFooter();
        sticky.stickHeader();
        hoverAboutpageSection();
        scrollTop(true);
        slickTeammate();
        adaptNav();
    })
};
export { about };