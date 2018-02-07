$(() => {
    const router = Sammy('#wrapper', function () {
        this.use('Handlebars', 'hbs');
//for deployment we must put this.get('#/') and on home links - /#/ - logo and Nachalo
        this.get('index.html', function () {
            this.home_page = true; //If this is true - posts are rendering for homepage
            this.video_source = './images/Homepage/STUDIO-TOREX-2015-SHOWREEL.mp4';
            //adding additional condition statement for img so i can use offers in footer also
            this.offers_image_source = './images/Homepage/PlayDisabled.png';
            $.get('./database/posts.json').then((posts) => {
                this.posts = posts;
            });
            $.get('./database/offers.json').then((offers) => {
                this.offers = offers['offers'];
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
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                videoPlayPause();
                accordeon();
                hoverHomepageSection();
                scrollTop(true);
            })
        });

        this.get('#/about', function () {
            $.get('./database/teammates.json').then((teammates) => {
                this.teammates = teammates;
            });
            $.get('./database/teammate_slider.json').then((images) => {
                this.image = images;
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/about_page/aboutpage_main_wrapper.hbs',
                aboutpage_section_teammate: './templates/about_page/aboutpage_main_section_teammate.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                hoverAboutpageSection();
                scrollTop(true);
                slickTeammate();
            })
        });

        this.get('#/videos/ads', function () {
            $.get('./database/videos.json').then((videos) => {
                this.video = videos["ads"];
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
                single_video: './templates/video_page/single_video_partial.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
                lightGallery();
            })
        });

        this.get('#/videos/music', function () {
            $.get('./database/videos.json').then((videos) => {
                this.video = videos["music"];
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
                single_video: './templates/video_page/single_video_partial.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
                lightGallery();
            })
        });

        this.get('#/videos/weddings', function () {
            $.get('./database/videos.json').then((videos) => {
                this.video = videos["weddings"];
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
                single_video: './templates/video_page/single_video_partial.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
                lightGallery();
            })
        });

        this.get('#/photography/portrets', function () {
            $.get('./database/photos.json').then((photos) => {
                this.photo = photos["portrets"];
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
                single_photo: './templates/photo_page/single_photo_partial.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
                lightGallery();
            })
        });

        this.get('#/photography/weddings', function () {
            $.get('./database/photos.json').then((photos) => {
                this.photo = photos["weddings"];
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
                single_photo: './templates/photo_page/single_photo_partial.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
                lightGallery();
            })
        });

        this.get('#/photography/behind', function () {
            $.get('./database/photos.json').then((photos) => {
                this.photo = photos["behind"];
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
                single_photo: './templates/photo_page/single_photo_partial.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
                lightGallery();
            })
        });

        this.get('#/photography/boudoir', function () {
            $.get('./database/photos.json').then((photos) => {
                this.photo = photos["boudoir"];
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/common/photo_video gallery/gallery_main_wrapper.hbs',
                single_photo: './templates/photo_page/single_photo_partial.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
                lightGallery();
            })
        });

        this.get('#/posts', function () {
            this.post_page = true; //If this is true - posts are rendering for post page
            $.get('./database/posts.json').then((posts) => {
                this.posts = posts;
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/post_page/postpage_main_wrapper.hbs',
                posts: './templates/common/posts/posts.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
            })
        });

        this.get('#/posts/:id', function () {
            this.single_post = true; //If this is true - all posts are being rendered in a slider on each single post
            let id = Number(this.params['id']) - 1;
            this.redirect('#/posts', this.params['id']);
            $.get('./database/posts.json').then((posts) => {
                this.post = posts[id];
                this.posts = posts;
            });

            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/post_page/postpage_main_wrapper.hbs',
                post: './templates/post_page/single_post.hbs',
                posts: './templates/common/posts/posts.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
            })
        });

        this.get('#/contact', function () {
            this.contact_page = true;
            $.get('./database/offers.json').then((offers) => {
                this.offers = offers['offers'];
            });
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/contact_page/contactpage_main_wrapper.hbs',
                contactpage_main_section_offers: './templates/contact_page/contactpage_main_section_offers.hbs',
                footer_wrapper: './templates/common/footer/footer_wrapper.hbs',
                footer_section_offers: './templates/common/footer/footer_section_offers.hbs',
                footer_section_partners: './templates/common/footer/footer_section_partners.hbs',
                footer_section_follow: './templates/common/footer/footer_section_follow.hbs',
                contact_us_button: './templates/common/contact_us_button.hbs'
            }).then(function () {
                this.partial('./templates/common/page.hbs');
            }).then(function () {
                sticky.stickFooter();
                sticky.stickHeader();
                scrollTop(true);
            })
        });

    });//for deployment we must put router.run('#/')
    router.run();
});
