import { myData, role } from "../router";
import { adaptNav } from "../modules/headerNav";
import { lightGallery } from "../modules/loadLightgallery";
import { scrollTop } from "../modules/scroll_top_button";
import { stickHeader, stickFooter } from "../modules/stickyHeaderFooter";
import { requestData } from "../modules/requester";
import { logout } from "../user_session/logout";
import { attachVideosFormEvents } from "../modules/admin_modules/videos_form_module";

let videos = function (ctx) {
    let route = this.params['route'];

    if (localStorage.getItem('role') === role) {
        this.role = localStorage.getItem('name');
        this.videosAuthed = true;
    } else {
        this.role = 'user';
        this.videosAuthed = false;
    }
    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_greeting: './templates/common/header/header_greeting.hbs',
        main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
        single_video: './templates/video_page/single_video_partial.hbs',
        video_input: './templates/admin/video_input.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_offers: './templates/common/footer/single_offer.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs');
        switch(route) {
            case 'ads':
                requestData('appdata', 'videos', '?query={"type":"ads"}', 'GET').then((videos) => {
                    ctx.video = videos;
                    this.render('./templates/video_page/single_video_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        })
                });
                break;
            case 'music':
                requestData('appdata', 'videos', '?query={"type":"music"}', 'GET').then((videos) => {
                    ctx.video = videos;
                    this.render('./templates/video_page/single_video_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        })
                });
                break;
            case 'weddings':
                requestData('appdata', 'videos', '?query={"type":"weddings"}', 'GET').then((videos) => {
                    ctx.video = videos;
                    this.render('./templates/video_page/single_video_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        })
                });
                break;
        }

    }).then(function () {
        stickFooter();
        stickHeader();
        adaptNav(ctx);
        scrollTop(true);
        lightGallery();
        logout(ctx);
        attachVideosFormEvents();
    })
};
export { videos };