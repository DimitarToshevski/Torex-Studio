handlers.home = function (ctx) {
    this.home_page = true; //If this is true - posts are rendering for homepage
    this.video_source = './images/Homepage/STUDIO-TOREX-2015-SHOWREEL.mp4';
    //adding additional condition statement for img so i can use offers in footer also
    this.offers_image_source = './images/Homepage/PlayDisabled.png';
    $.get('./database/posts.json').then((posts) => {
        this.posts = posts;
    });
    this.loadPartials({
        header_wrapper: './templates/common/header/header_wrapper.hbs',
        header_logo: './templates/common/header/header_logo.hbs',
        header_menu: './templates/common/header/header_menu.hbs',
        header_video: './templates/common/header/header_video.hbs',
        contact_us_button: './templates/common/contact_us_button.hbs',
        main: './templates/home_page/homepage_main_wrapper.hbs',
        homepage_main_section_offers: './templates/home_page/homepage_main_section_offers.hbs',
        single_offer: './templates/home_page/single_offer.hbs',
        homepage_main_section_about: './templates/home_page/homepage_main_section_about.hbs',
        homepage_main_section_posts: './templates/home_page/homepage_main_section_posts.hbs',
        posts: './templates/common/posts/posts.hbs',
        footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
        footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
        footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
        footer_section_follow: './templates/common/footer/footer_section_follow.hbs'
    }).then(function () {
        this.partial('./templates/common/page.hbs').then(() => {
            requester.get('offers').then((data) => {
                ctx.offers = data;
                    this.render('./templates/home_page/single_offer.hbs').then(() => {
                    this.replace('.homepage_section_offers .section_body');
                }).then(() => {
                    this.render('./templates/common/footer/single_offer.hbs').then(() => {
                        this.replace('.footer_offers .footer_section_body')
                    }).then(function () {
                        sticky.stickFooter();
                        sticky.stickHeader();
                        videoPlayPause();
                        accordeon();
                        hoverHomepageSection();
                    })
                })
            })
        }).then(scrollTop(true))
    })
}