import { myData, role } from "../router";
import { adaptNav } from "../modules/headerNav";
import { scrollTop } from "../modules/scroll_top_button";
import { stickHeader, stickFooter } from "../modules/stickyHeaderFooter";
import { requestData } from "../modules/requester";
import {logout} from "../user_session/logout";

let postDetails = function (ctx) {
    let id = this.params['id'];
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
        this.unreadMessages = localStorage.getItem('messages');
        this.showGreetAuthed = true;
    } else {
        this.role = 'user';
        this.showGreetAuthed = false;
    }
    this.single_post = true; //If this is true - all posts are being rendered in a slider on each single post
    this.redirect('#/posts', this.params['id']);
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
        header_messages: './templates/common/header/header_messages.hbs',
        main: './templates/post_page/postpage_main_wrapper.hbs',
        post: './templates/post_page/single_post.hbs',
        posts: './templates/common/posts/posts.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_offers: './templates/common/footer/single_offer.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs');
        requestData('appdata', 'posts', '', 'GET').then((posts) => {
            for(let post in posts) {
                if(posts[post]._id === id) {
                    ctx.post = posts[post];
                }
            }
            posts = posts.sort((a, b) => {
                return (a.date.localeCompare( b.date));
            });
            ctx.posts = posts;
            this.render('./templates/post_page/single_post.hbs')
                .then(() => {
                    this.replace('.postpage_main_wrapper');
                })
                .then(() => {
                    this.render('./templates/common/posts/posts.hbs')
                        .then(() => {
                            this.replace('#list_posts')
                        })
                });
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
    })
};
export { postDetails };