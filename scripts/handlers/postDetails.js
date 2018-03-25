import { myData, role } from "../router";
import { adaptNav } from "../headerNav";
import { scrollTop } from "../scroll_top_button";
import { stickHeader, stickFooter } from "../stickyHeaderFooter";

let postDetails = function (ctx) {
    let id = Number(this.params['id']) - 1;
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
    } else {
        this.role = 'user';
    }
    this.single_post = true; //If this is true - all posts are being rendered in a slider on each single post
    this.redirect('#/posts', this.params['id']);
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
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
        requester.get('posts', '').then((posts) => {
            ctx.post = posts[id];
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
    }).then(function () {
        stickFooter();
        stickHeader();
        adaptNav(ctx);
        scrollTop(true);
    })
};
export { postDetails };