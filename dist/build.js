!function(e){var t={};function o(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);let s=function(e){this.home_page=!0,this.video_source="./images/Homepage/STUDIO-TOREX-2015-SHOWREEL.mp4",this.offers_image_source="./images/Homepage/PlayDisabled.png",this.offers=_.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_video:"./templates/common/header/header_video.hbs",contact_us_button:"./templates/common/contact_us_button.hbs",main:"./templates/home_page/homepage_main_wrapper.hbs",homepage_main_section_offers:"./templates/home_page/homepage_main_section_offers.hbs",single_offer:"./templates/home_page/single_offer.hbs",homepage_main_section_about:"./templates/home_page/homepage_main_section_about.hbs",homepage_main_section_posts:"./templates/home_page/homepage_main_section_posts.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs"}).then(function(){this.partial("./templates/common/page.hbs").then(()=>{requester.get("posts","").then(t=>{e.posts=t,this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace(".posts")})})}).then(()=>{sticky.stickFooter(),sticky.stickHeader(),accordeon(),hoverHomepageSection(),adaptNav()})}).then(()=>{scrollTop(!0),videoPlayPause()})},a=function(e){this.teammates=_.teammates,this.image=_.slider_images,this.offers=_.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",main:"./templates/about_page/aboutpage_main_wrapper.hbs",aboutpage_section_teammate:"./templates/about_page/aboutpage_main_section_teammate.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(()=>{sticky.stickFooter(),sticky.stickHeader(),setTimeout(()=>{$(".aboutpage_section_teammate_wrapper").find($(".aboutpage_section_teammate_header"));let e=$(".aboutpage_section_teammate_body"),t=(e.find("a"),e.find("img")),o=$(".radiused");t.click(e=>{$(e.target).hasClass("shownParagraph")?($(".shown").animate({width:"toggle",height:"toggle"}),$(".shown").removeClass("shown"),$(e.target).removeClass("shownParagraph")):($(".shownParagraph").removeClass("shownParagraph"),$(e.target).addClass("shownParagraph"),$(".shown").removeClass("shown").animate({width:"toggle",height:"toggle"}),$(e.target).parent().find("p").addClass("shown").animate({width:"toggle",height:"toggle"}))}),$(window).innerWidth()<="700"?($(o[1]).css({"flex-direction":"column","text-align":"center"}),$(o[3]).css({"flex-direction":"column","text-align":"center","margin-left":"0"})):($(o[1]).css({"flex-direction":"row-reverse","text-align":"right"}),$(o[3]).css({"flex-direction":"row-reverse","text-align":"right","margin-left":"15px"}))},500),scrollTop(!0),slickTeammate(),adaptNav()})},r=function(){this.contact_page=!0,this.offers=_.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",main:"./templates/contact_page/contactpage_main_wrapper.hbs",contactpage_main_section_offers:"./templates/contact_page/contactpage_main_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",contactpage_main_section_working_time:"./templates/contact_page/contactpage_main_section_working_time.hbs",contactpage_main_section_contact_form_with_address:"./templates/contact_page/contactpage_main_section_contact_form_with_address.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(function(){sticky.stickFooter(),sticky.stickHeader(),adaptNav(),scrollTop(!0),googleMaps()})},n=function(e){let t=this.params.route;this.offers=_.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",main:"./templates/common/photo_video gallery/gallery_main_wrapper.hbs",single_photo:"./templates/photo_page/single_photo_partial.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){switch(this.partial("./templates/common/page.hbs"),t){case"portrets":requester.get("photos",'?query={"type":"portrets"}').then(t=>{e.photo=t,console.log(e.photo),this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(lightGallery())});break;case"weddings":requester.get("photos",'?query={"type":"weddings"}').then(t=>{e.photo=t,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(lightGallery())});break;case"behind":requester.get("photos",'?query={"type":"behind"}').then(t=>{e.photo=t,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(lightGallery())});break;case"boudoir":requester.get("photos",'?query={"type":"boudoir"}').then(t=>{e.photo=t,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(lightGallery())})}}).then(function(){sticky.stickFooter(),sticky.stickHeader(),adaptNav(),scrollTop(!0)})},m=function(e){this.single_post=!0;let t=Number(this.params.id)-1;this.redirect("#/posts",this.params.id),this.offers=_.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",main:"./templates/post_page/postpage_main_wrapper.hbs",post:"./templates/post_page/single_post.hbs",posts:"./templates/common/posts/posts.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs"),requester.get("posts","").then(o=>{e.post=o[t],e.posts=o,this.render("./templates/post_page/single_post.hbs").then(()=>{this.replace(".postpage_main_wrapper")}).then(()=>{this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace("#list_posts")})})})}).then(function(){sticky.stickFooter(),sticky.stickHeader(),adaptNav(),scrollTop(!0)})},p=function(e){this.post_page=!0,this.offers=_.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",main:"./templates/post_page/postpage_main_wrapper.hbs",posts:"./templates/common/posts/posts.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs"),requester.get("posts","").then(t=>{e.posts=t,this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace(".postpage_main_wrapper")})})}).then(function(){sticky.stickFooter(),sticky.stickHeader(),adaptNav(),scrollTop(!0)})},i=function(e){let t=this.params.route;this.offers=_.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",main:"./templates/common/photo_video gallery/gallery_main_wrapper.hbs",single_video:"./templates/video_page/single_video_partial.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){switch(this.partial("./templates/common/page.hbs"),t){case"ads":requester.get("videos",'?query={"type":"ads"}').then(t=>{e.video=t,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})});break;case"music":requester.get("videos",'?query={"type":"music"}').then(t=>{e.video=t,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})});break;case"weddings":requester.get("videos",'?query={"type":"weddings"}').then(t=>{e.video=t,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})})}}).then(function(){sticky.stickFooter(),sticky.stickHeader(),adaptNav(),scrollTop(!0),lightGallery()})};const h="Basic "+btoa("kid_ByC4Pz0wz:c47c381ad9234508be7cb15d8d42c2aa");let c=function(e){var t;setTimeout(()=>{$("#admin_form").on("submit",t=>{t.preventDefault();let o=$("#username").val(),s=$("#password").val(),a=$("#secret").val(),r={url:"https://baas.kinvey.com/user/kid_ByC4Pz0wz/login",method:"POST",headers:{Authorization:h,"Content-Type":"application/json"},data:JSON.stringify({username:o,password:s,secretAnswer:a}),success:t=>{if(t.secretAnswer!=a)throw new Error("Въведи правилен никнейм");e.redirect("#"),t=t,localStorage.setItem("authtoken",t._kmd.authtoken),localStorage.setItem("username",t.username),localStorage.setItem("id",t._id)},error:e=>{console.log(e.responseJSON.description)}};return $.ajax(r),!1})},100)},l=function(e){this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",main:"./templates/admin/admin.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(()=>{sticky.stickFooter(),sticky.stickHeader(),scrollTop(!0),adaptNav(),c(e)})};o.d(t,"myData",function(){return _});const _={offers:[{id:"offer1",header:"Режисура",body:"Нашите креативни режисьори ще ви помогнат и тласнат проектите ви към съвсем различни измерения",img:"./images/Contactpage/1.png"},{id:"offer2",header:"Постпродукция и монтаж",body:"Истинският сценарий се пише на монтажа. Ще останете изненадани от предложенията на режисьора по монтаж, който може да завърти една линия по няколко различни начина. Визуалните ефекти ще допринесат за създаването на реално усещане за вашият краен продукт.",img:"./images/Contactpage/2.png"},{id:"offer3",header:"Звукозапис и звукообработка",body:"Нашият композитор е с модерни и новаторски виждания, който не се страхува да смесва различни стилове и да експерементира, има успешно композирани проекти в телевизионните сериали, както и в музикалните клипове.",img:"./images/Contactpage/3.png"},{id:"offer4",header:"Заснемане",body:"Освен идеята и креативноста е важна и цялостната визия на изображението, нашите оператори работят с последните технологични тенденции за да изградят една перфектна картина.",img:"./images/Contactpage/4.png"}],teammates:[{id:"1",profile:"https://www.facebook.com/torexa",img_source:"./images/Aboutpage/teammate1.jpg",name:"Иван Димитров",role:"Режисьор",resume:{row1:'Завършва - бакалавър "Режисура по',row2:'монтажа" в НАТФИЗ, както и',row3:'магистратура "Мениджмънт в',row4:'екранните изкуства" отново в',row5:"НАТФИЗ. Натрупан богат опит",row6:"като режисьор, оператор и",row7:"монтажист в сферата на",row8:"телевизионни сериали, филмови",row9:"продукции, музикални клипове."}},{id:"2",profile:"https://www.facebook.com/aeroooochocolate",img_source:"./images/Aboutpage/teammate2.jpg",name:"Андрей Кряколов",role:"Оператор",resume:{row1:'Бакалавър в НАТФИЗ - "Филмов и',row2:'телевизионен монтаж".',row3:"Оператор и режисьор на",row4:"късометражни филми,",row5:"реклами и музикални",row6:"клипове, опит в игрални",row7:"филми, ТВ сериали и други",row8:"продукции, цветови",row9:"корекции на реклами и филми.",row10:"Хоби - Фотограф."}},{id:"3",profile:"https://www.facebook.com/dimitar.stefanov.52",img_source:"./images/Aboutpage/teammate3.jpg",name:"Димитър Стефанов",role:"Осветител",resume:{row1:"Oсветител в киноиндустрията",row2:"гафер в музикални клипове",row3:"и реклами, асистент ",row4:"опeратор и фотограф.",row5:"Работил по множество",row6:"проекти в страната и",row7:"чужбина като кино",row8:"осветител.",row9:"Хоби - DJ."}},{id:"4",profile:"https://www.facebook.com/JKro0",img_source:"./images/Aboutpage/teammate4.jpg",name:"Любомир Иванов",role:"Композитор ",resume:{row1:'Завършил - магистърска степен "Поп и',row2:'Джаз" - Изпълнителско изкуство',row3:"АМТИИ с първи инструмент пиано.",row4:"Музикален оформител, редактор,",row5:"тонрежисьор и саунддизайнер с",row6:"опит в късометражни филми, ТВ",row7:"сериали, реклами, музикални",row8:"клипове. Композитор на",row9:"модерна(EDM), поп, рок, джаз,",row10:"ТВ/филмова музика."}}],slider_images:[{url:"./images/Aboutpage/Teammates Slider/1.jpg"},{url:"./images/Aboutpage/Teammates Slider/2.jpg"},{url:"./images/Aboutpage/Teammates Slider/3.jpg"},{url:"./images/Aboutpage/Teammates Slider/4.jpg"},{url:"./images/Aboutpage/Teammates Slider/5.jpg"},{url:"./images/Aboutpage/Teammates Slider/6.jpg"},{url:"./images/Aboutpage/Teammates Slider/7.jpg"}]};$(()=>{Sammy("#wrapper",function(){this.use("Handlebars","hbs"),this.get("index.html",s),this.get("#/about",a),this.get("#/videos/:route",i),this.get("#/photography/:route",n),this.get("#/posts",p),this.get("#/posts/:id",m),this.get("#/contact",r),this.get("#/admin",l)}).run()})}]);