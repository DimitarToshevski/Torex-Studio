import { myData, role } from "../router";
import { adaptNav } from "../modules/headerNav";
import { scrollTop } from "../modules/scroll_top_button";
import { stickHeader, stickFooter } from "../modules/stickyHeaderFooter";
import { requestData } from "../modules/requester";
import { logout } from "../user_session/logout";
import { attachPostsFormEvents } from "../modules/admin_modules/posts_form_module";
import { adminControls } from "../modules/admin_modules/admin_controls_module";
import {sortElements} from "../modules/sort_elements";

let posts = function (ctx) {
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
        this.postsAuthed = true;
        this.showGreetAuthed = true;
        this.unreadMessages = localStorage.getItem('messages');
    } else {
        this.role = 'user';
        this.postsAuthed = false;
        this.showGreetAuthed = false;
    }

    this.post_page = true; //If this is true - posts are rendering for post page
    this.offers = myData['offers'];

    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
        header_messages: './templates/common/header/header_messages.hbs',
        main: './templates/post_page/postpage_main_wrapper.hbs',
        posts: './templates/common/posts/posts.hbs',
        post_input: './templates/admin/post_input.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_offers: './templates/common/footer/single_offer.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs');
        requestData('appdata', 'posts', '', 'GET').then((posts) => {
            sortElements(posts);
            ctx.posts = posts;
            this.render('./templates/common/posts/posts.hbs')
                .then(() => {
                this.replace('.postpage_main_wrapper');
                })
        });
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
    }).then(function () {
        stickFooter();
        stickHeader();
        adaptNav(ctx);
        scrollTop(true);
        logout(ctx);
        attachPostsFormEvents();
        adminControls();
    })
};
export { posts };