import { home } from './handlers/home.js';
import { about } from './handlers/about.js';
import { contact } from './handlers/contact.js';
import { photos } from './handlers/photos.js';
import { postDetails } from './handlers/postDetails.js';
import { posts } from './handlers/posts.js';
import { videos } from './handlers/videos.js';
import { admin } from './handlers/admin.js';
import { toasterOptions } from "./modules/toastrOptions";


const myData = {};
myData.offers = [
    {
        "id": "offer1",
        "header": "Режисура",
        "body": "Нашите креативни режисьори ще ви помогнат и тласнат проектите ви към съвсем различни измерения",
        "img": "./images/Contactpage/1.png"
    },
    {
        "id": "offer2",
        "header": "Постпродукция и монтаж",
        "body": "Истинският сценарий се пише на монтажа. Ще останете изненадани от предложенията на режисьора по монтаж, който може да завърти една линия по няколко различни начина. Визуалните ефекти ще допринесат за създаването на реално усещане за вашият краен продукт.",
        "img": "./images/Contactpage/2.png"
    },
    {
        "id": "offer3",
        "header": "Звукозапис и звукообработка",
        "body": "Нашият композитор е с модерни и новаторски виждания, който не се страхува да смесва различни стилове и да експерементира, има успешно композирани проекти в телевизионните сериали, както и в музикалните клипове.",
        "img": "./images/Contactpage/3.png"
    },
    {
        "id": "offer4",
        "header": "Заснемане",
        "body": "Освен идеята и креативноста е важна и цялостната визия на изображението, нашите оператори работят с последните технологични тенденции за да изградят една перфектна картина.",
        "img": "./images/Contactpage/4.png"
    }
];
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
];
myData.slider_images = [
    {"url": "./images/Aboutpage/Teammates Slider/1.jpg"},
    {"url": "./images/Aboutpage/Teammates Slider/2.jpg"},
    {"url": "./images/Aboutpage/Teammates Slider/3.jpg"},
    {"url": "./images/Aboutpage/Teammates Slider/4.jpg"},
    {"url": "./images/Aboutpage/Teammates Slider/5.jpg"},
    {"url": "./images/Aboutpage/Teammates Slider/6.jpg"},
    {"url": "./images/Aboutpage/Teammates Slider/7.jpg"}
];
export { myData };

const role = '9a915413-ab00-41f5-a216-13a6854ffb62';
export { role };


$(() => {
    const router = Sammy('#wrapper', function () {

        this.use('Handlebars', 'hbs');
//for deployment we must put this.get('#/') and on home links - /#/ - logo and Nachalo
        this.get('index.html', home);

        this.get('#/about', about);

        this.get('#/videos/:route', videos);

        this.get('#/photography/:route', photos);

        this.get('#/posts', posts);

        this.get('#/posts/:id', postDetails);

        this.get('#/contact', contact);

        this.get('#/admin', admin);

    });//for deployment we must put router.run('#/')
    router.run();
});
