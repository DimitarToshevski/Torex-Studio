$(() => {
    const router = Sammy('#wrapper', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', function () {
            this.video_source = './images/STUDIO-TOREX-2015-SHOWREEL.mp4';
            this.offers_image_source = './images/PlayDisabled.png';
            $.get('./posts.json').then((data) => {
                this.posts = data
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                header_video: './templates/common/header/header_video.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs',
                main: './templates/home_page/homepage_main_wrapper.hbs',
                homepage_main_section_offers: './templates/home_page/homepage_main_section_offers.hbs',
                homepage_main_section_about: './templates/home_page/homepage_main_section_about.hbs',
                homepage_main_section_posts: './templates/home_page/homepage_main_section_posts.hbs',
                posts: './templates/common/posts/posts.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function() {sticky.stickFooter(); sticky.stickHeader()})
        });

        this.get('#/about', function () {
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/about_page/aboutpage_main_wrapper.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function() {sticky.stickFooter(); sticky.stickHeader()})
        });

    });
    router.run();
});
