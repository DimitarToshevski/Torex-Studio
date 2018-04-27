import { myData, role } from "../router";
import { adaptNav } from "../modules/headerNav";
import { googleMaps } from "../modules/google_maps";
import { scrollTop } from "../modules/scroll_top_button";
import { stickHeader, stickFooter } from "../modules/stickyHeaderFooter";
import {logout} from "../user_session/logout";
import { contactFormSubmit } from "../modules/contact_form_submit";
import {requestData} from "../modules/requester";

let contact = function (ctx) {
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
        this.showGreetAuthed = true;
        this.unreadMessages = localStorage.getItem('messages');
    } else {
        this.role = 'user';
        this.showGreetAuthed = false;
    }
    this.contact_page = true;
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
        header_messages: './templates/common/header/header_messages.hbs',
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
        this.partial('./templates/common/page.hbs')
            .then(()=>{
                //Getting messages so if you click F5 they will still load without loging in and they will
                // render again with new count if they change dynamically
                if(ctx.showGreetAuthed) {
                    requestData('appdata', 'messages', '', 'GET').then((messages) => {
                        ctx.unreadMessages = messages.length;
                        if(localStorage.getItem('messages') !== messages.length.toString()) {
                            localStorage.setItem('messages', messages.length);
                            ctx.unreadMessages = messages.length;
                            this.render('./templates/common/header/header_messages.hbs')
                                .then(() => {
                                    this.replace('#messages');
                                    toastr.info('Имате ново съобщение');
                                })
                        }
                    });
                }
            })
    }).then(function () {
        stickFooter();
        stickHeader();
        adaptNav(ctx);
        scrollTop(true);
        googleMaps();
        logout(ctx);
        contactFormSubmit();
    })
};
export { contact };