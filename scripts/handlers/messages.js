import {role} from "../router";
import {stickFooter, stickHeader} from "../modules/stickyHeaderFooter";
import {scrollTop} from "../modules/scroll_top_button";
import {adaptNav} from "../modules/headerNav";
import {logout} from "../user_session/logout";
import {requestData} from "../modules/requester";
import {myMessages} from "../user_session/login";

let adminMessages = function (ctx) {
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
        this.showGreetAuthed = true;
        this.unreadMessages = localStorage.getItem('messages');
        this.messages = myMessages;
    } else {
        this.role = 'user';
        this.showGreetAuthed = false;
    }
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
        header_messages: './templates/common/header/header_messages.hbs',
        messages_list_wrapper: './templates/admin/messages/messages_list_wrapper.hbs',
        single_message: './templates/admin/messages/single_message.hbs',
        main: './templates/admin/messages/messages_main_wrapper.hbs',
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
                    if(myMessages.length === 0) {
                        for(let message in messages) {
                            myMessages.push(messages[message]);
                        }
                        this.messages = myMessages;
                        console.log(this.messages);
                        this.render('./templates/admin/messages/messages_list_wrapper.hbs')
                            .then(() => {
                                this.replace('#message_list');
                            })
                    }
                    console.log(myMessages.length);
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
            scrollTop(true);
            adaptNav(ctx);
            logout(ctx);
        })
};
export { adminMessages }