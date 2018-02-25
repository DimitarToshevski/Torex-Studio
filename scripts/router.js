const handlers = {};
const myData = {};
$(() => {

    const router = Sammy('#wrapper', function () {
        this.use('Handlebars', 'hbs');
//for deployment we must put this.get('#/') and on home links - /#/ - logo and Nachalo
        myData.offers = [
                {
                    "header": "Режисура",
                    "body": "Нашите креативни режисьори ще ви помогнат и тласнат проектите ви към съвсем различни измерения",
                    "img": "./images/Contactpage/1.png"
                },
                {
                    "header": "Постпродукция и монтаж",
                    "body": "Нашите креативни режисьори ще ви помогнат и тласнат проектите ви към съвсем различни измерения",
                    "img": "./images/Contactpage/2.png"
                },
                {
                    "header": "Звукозапис и звукообработка",
                    "body": "Нашият композитор е с модерни и новаторски виждания, който не се страхува да смесва различни стилове и да експерементира, има успешно композирани проекти в телевизионните сериали, както и в музикалните клипове.",
                    "img": "./images/Contactpage/3.png"
                },
                {
                    "header": "Заснемане",
                    "body": "Освен идеята и креативноста е важна и цялостната визия на изображението, нашите оператори работят с последните технологични тенденции за да изградят една перфектна картина.",
                    "img": "./images/Contactpage/4.png"
                },
                {
                    "header": "Заснемане",
                    "body": "Освен идеята и креативноста е важна и цялостната визия на изображението, нашите оператори работят с последните технологични тенденции за да изградят една перфектна картина.",
                    "img": "./images/Contactpage/4.png"
                }
            ]
        myData.teammates = [
            {
                "id": "1",
                "profile": "https://www.facebook.com/torexa",
                "img_source": "./images/Aboutpage/teammate1.jpg",
                "name": "Иван Димитров",
                "role": "Режисьор",
                "resume": {
                    "row1": "Завършва - бакалавър \"Режисура по",
                    "row2": "монтажа\" в НАТФИЗ, както и",
                    "row3": "магистратура \"Мениджмънт в",
                    "row4": "екранните изкуства\" отново в",
                    "row5": "НАТФИЗ. Натрупан богат опит",
                    "row6": "като режисьор, оператор и",
                    "row7": "монтажист в сферата на",
                    "row8": "телевизионни сериали, филмови",
                    "row9": "продукции, музикални клипове."
                }
            },
            {
                "id": "2",
                "profile": "https://www.facebook.com/aeroooochocolate",
                "img_source": "./images/Aboutpage/teammate2.jpg",
                "name": "Андрей Кряколов",
                "role": "Оператор",
                "resume": {
                    "row1": "Бакалавър в НАТФИЗ - \"Филмов и",
                    "row2": "телевизионен монтаж\".",
                    "row3": "Оператор и режисьор на",
                    "row4": "късометражни филми,",
                    "row5": "реклами и музикални",
                    "row6": "клипове, опит в игрални",
                    "row7": "филми, ТВ сериали и други",
                    "row8": "продукции, цветови",
                    "row9": "корекции на реклами и филми.",
                    "row10": "Хоби - Фотограф."
                }
            },
            {
                "id": "3",
                "profile": "https://www.facebook.com/dimitar.stefanov.52",
                "img_source": "./images/Aboutpage/teammate3.jpg",
                "name": "Димитър Стефанов",
                "role": "Осветител",
                "resume": {
                    "row1": "Oсветител в киноиндустрията",
                    "row2": "гафер в музикални клипове",
                    "row3": "и реклами, асистент ",
                    "row4": "опeратор и фотограф.",
                    "row5": "Работил по множество",
                    "row6": "проекти в страната и",
                    "row7": "чужбина като кино",
                    "row8": "осветител.",
                    "row9": "Хоби - DJ."
                }
            },
            {
                "id": "4",
                "profile": "https://www.facebook.com/JKro0",
                "img_source": "./images/Aboutpage/teammate4.jpg",
                "name": "Любомир Иванов",
                "role": "Композитор ",
                "resume": {
                    "row1": "Завършил - магистърска степен \"Поп и",
                    "row2": "Джаз\" - Изпълнителско изкуство",
                    "row3": "АМТИИ с първи инструмент пиано.",
                    "row4": "Музикален оформител, редактор,",
                    "row5": "тонрежисьор и саунддизайнер с",
                    "row6": "опит в късометражни филми, ТВ",
                    "row7": "сериали, реклами, музикални",
                    "row8": "клипове. Композитор на",
                    "row9": "модерна(EDM), поп, рок, джаз,",
                    "row10": "ТВ/филмова музика."
                }
            }
        ]
        myData.slider_images = [
            {"url": "./images/Aboutpage/Teammates Slider/1.jpg"},
            {"url": "./images/Aboutpage/Teammates Slider/2.jpg"},
            {"url": "./images/Aboutpage/Teammates Slider/3.jpg"},
            {"url": "./images/Aboutpage/Teammates Slider/4.jpg"},
            {"url": "./images/Aboutpage/Teammates Slider/5.jpg"},
            {"url": "./images/Aboutpage/Teammates Slider/6.jpg"},
            {"url": "./images/Aboutpage/Teammates Slider/7.jpg"}
        ]
        this.get('index.html', handlers.home);

        this.get('#/about', handlers.about);

        this.get('#/videos/:route', handlers.videos);

        this.get('#/photography/:route', handlers.photos);

        this.get('#/posts', handlers.posts);

        this.get('#/posts/:id', handlers.postDetails);

        this.get('#/contact', function () {
            this.contact_page = true;
            this.offers = myData['offers'];
            this.loadPartials({
                header_wrapper: './templates/common/header/header_wrapper.hbs',
                header_logo: './templates/common/header/header_logo.hbs',
                header_menu: './templates/common/header/header_menu.hbs',
                main: './templates/contact_page/contactpage_main_wrapper.hbs',
                contactpage_main_section_offers: './templates/contact_page/contactpage_main_section_offers.hbs',
                footer_offers: './templates/common/footer/single_offer.hbs',
                contactpage_main_section_working_time: './templates/contact_page/contactpage_main_section_working_time.hbs',
                contactpage_main_section_contact_form_with_address: './templates/contact_page/contactpage_main_section_contact_form_with_address.hbs',
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
