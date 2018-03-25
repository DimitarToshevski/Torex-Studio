import { myData, role } from "../router";
import { adaptNav } from "../headerNav";
import { lightGallery } from "../loadLightgallery";
import { scrollTop } from "../scroll_top_button";
import { stickHeader, stickFooter } from "../stickyHeaderFooter";

let photos = function (ctx) {
    let route = this.params['route'];

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
        main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
        single_photo: './templates/photo_page/single_photo_partial.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_offers: './templates/common/footer/single_offer.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs');
        switch(route) {
            case 'portrets':
                requester.get('photos', '?query={"type":"portrets"}').then((photos) => {
                    ctx.photo = photos;
                    console.log(ctx.photo);
                    this.render('./templates/photo_page/single_photo_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        }).then(lightGallery())
                });
                break;
            case 'weddings':
                requester.get('photos', '?query={"type":"weddings"}').then((photos) => {
                    ctx.photo = photos;
                    this.render('./templates/photo_page/single_photo_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        }).then(lightGallery())
                });
                break;
            case 'behind':
                requester.get('photos', '?query={"type":"behind"}').then((photos) => {
                    ctx.photo = photos;
                    this.render('./templates/photo_page/single_photo_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        }).then(lightGallery())
                });
                break;
            case 'boudoir':
                requester.get('photos', '?query={"type":"boudoir"}').then((photos) => {
                    ctx.photo = photos;
                    this.render('./templates/photo_page/single_photo_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        }).then(lightGallery())
                });
                break;
        }

    }).then(function () {
        stickFooter();
        stickHeader();
        adaptNav(ctx);
        scrollTop(true);
    })
};
export { photos };