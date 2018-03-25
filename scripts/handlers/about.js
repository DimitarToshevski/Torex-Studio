import { myData, role } from "../router";
import { hoverAboutpageSection } from "../aboutpage_section_hover"
import { adaptNav } from "../headerNav";
import { slickTeammate } from "../aboutpage_teammates_slider"
import { scrollTop } from "../scroll_top_button";
import { stickHeader, stickFooter } from "../stickyHeaderFooter";

let about = function (ctx) {
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
    } else {
        this.role = 'user';
    }
    this.teammates = myData['teammates'];
    this.image = myData['slider_images'];
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
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
        stickFooter();
        stickHeader();
        hoverAboutpageSection();
        scrollTop(true);
        slickTeammate();
        adaptNav(ctx);
    })
};
export {about};