import { login } from '../user_session/login';
import { myData, role } from "../router";
import { adaptNav } from "../modules/headerNav";
import { scrollTop } from "../modules/scroll_top_button";
import { stickHeader, stickFooter } from "../modules/stickyHeaderFooter";

let admin = function (ctx) {
    if(localStorage.getItem('role') === role) {
        this.redirect('#/');
        toastr.info(`Вече си логнат, ${localStorage.getItem('name')}`);
    }
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
    } else {
        this.role = 'user';
    }
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
        main: './templates/admin/admin.hbs',
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
        scrollTop(true);
        adaptNav();
        login(ctx);
    })
};
export { admin };