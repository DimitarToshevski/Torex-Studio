handlers.videos = function (ctx) {
    let route = this.params['route'];


    this.offers = myData['offers'];
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
        single_video: './templates/video_page/single_video_partial.hbs',
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
                requester.get('videos', '?query={"type":"ads"}').then((videos) => {
                    ctx.video = videos;
                    this.render('./templates/video_page/single_video_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        })
                });
                break;
            case 'music':
                requester.get('videos', '?query={"type":"music"}').then((videos) => {
                    ctx.video = videos;
                    this.render('./templates/video_page/single_video_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        })
                });
                break;
            case 'weddings':
                requester.get('videos', '?query={"type":"weddings"}').then((videos) => {
                    ctx.video = videos;
                    this.render('./templates/video_page/single_video_partial.hbs')
                        .then(() => {
                            this.replace('#gallery');
                        })
                });
                break;
        }

    }).then(function () {
        sticky.stickFooter();
        sticky.stickHeader();
        adaptNav();
        scrollTop(true);
        lightGallery();
    })
};