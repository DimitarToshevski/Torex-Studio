import { myData, role } from "../router";
import { adaptNav } from "../modules/headerNav";
import { logout } from "../user_session/logout";
import { accordeon } from "../modules/homepage_dropdown";
import { videoPlayPause } from "../modules/pauseButton";
import { hoverHomepageSection } from "../modules/homepage_section_hover";
import { scrollTop } from "../modules/scroll_top_button";
import { stickHeader, stickFooter } from "../modules/stickyHeaderFooter";
import { requestData } from "../modules/requester";

let home = function (ctx) {
    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
    } else {
        this.role = 'user';
    }
    this.home_page = true; //If this is true - posts are rendering for homepage
    this.video_source = './images/Homepage/STUDIO-TOREX-2015-SHOWREEL.mp4';
    //adding additional condition statement for img so i can use offers in footer also
    this.offers_image_source = './images/Homepage/PlayDisabled.png';
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
        header_video: './templates/common/header/header_video.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs',
        main: './templates/home_page/homepage_main_wrapper.hbs',
        homepage_main_section_offers: './templates/home_page/homepage_main_section_offers.hbs',
        single_offer: './templates/home_page/single_offer.hbs',
        homepage_main_section_about: './templates/home_page/homepage_main_section_about.hbs',
        homepage_main_section_posts: './templates/home_page/homepage_main_section_posts.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_offers: './templates/common/footer/single_offer.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs').then(() => {
            requestData('appdata', 'posts', '', 'GET').then((posts) => {
                posts = posts.sort((a, b) => {
                    return (a.date.localeCompare( b.date));
                });
                ctx.posts = posts;
                this.render('./templates/common/posts/posts.hbs').then(() => {
                    this.replace('.posts');
                })
            })
        })
            .then(() => {
                stickFooter();
                stickHeader();
                accordeon();
                hoverHomepageSection();
                adaptNav(ctx);
                logout(ctx);
            })
    }).then(() => {
        scrollTop(true);
        videoPlayPause();
    })
};
export { home };