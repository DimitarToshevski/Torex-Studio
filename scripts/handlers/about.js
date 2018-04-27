import { myData, role } from "../router";
import { hoverAboutpageSection } from "../modules/aboutpage_section_hover"
import { adaptNav } from "../modules/headerNav";
import { slickTeammate } from "../modules/aboutpage_teammates_slider"
import { scrollTop } from "../modules/scroll_top_button";
import { stickHeader, stickFooter } from "../modules/stickyHeaderFooter";
import { logout } from "../user_session/logout";
import { requestData } from "../modules/requester";
import { myMessages } from "../user_session/login";

let about = function (ctx) {
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
        this.showGreetAuthed = true;
        this.unreadMessages = localStorage.getItem('messages');
    } else {
        this.role = 'user';
        this.showGreetAuthed = false;
    }
    this.teammates = myData['teammates'];
    this.image = myData['slider_images'];
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
        header_messages: './templates/common/header/header_messages.hbs',
        main: './templates/about_page/aboutpage_main_wrapper.hbs',
        aboutpage_section_teammate: './templates/about_page/aboutpage_main_section_teammate.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_offers: './templates/common/footer/single_offer.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs').then(()=>{
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
    })
        .then(() => {
        stickFooter();
        stickHeader();
        hoverAboutpageSection();
        scrollTop(true);
        slickTeammate();
        adaptNav(ctx);
        logout(ctx);
    })
};
export { about };