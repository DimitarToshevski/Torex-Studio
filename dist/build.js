!function(e){var o={};function t(a){if(o[a])return o[a].exports;var s=o[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:a})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){"use strict";t.r(o);let a=function(e){setTimeout(()=>{let e=!1;$("#btn_menu").on("click",()=>{e?($(".header_nav").css("display","none"),e=!1):($(".header_nav").css("display","block"),e=!0)}),localStorage.getItem("role")===C?setTimeout(()=>{$("#greeting, #logout").show()},100):$("#greeting, #logout").hide()},100)};let s=function(e){setTimeout(()=>{$("#logout").on("click",()=>{let o={url:"https://baas.kinvey.com/user/kid_ByC4Pz0wz/_logout",method:"POST",headers:{Authorization:"Kinvey "+localStorage.getItem("authtoken")},success:function(o){let t=localStorage.getItem("name");toastr.success(`До скоро, ${t}`),localStorage.clear(),$("#greeting, #logout").hide(),e.redirect("#")}(),error:e=>{toastr.error(e)}};$.ajax(o)})},100)};function r(){$(".fa-pause").closest("#video_pause_button").click(()=>{$("#header_video").trigger("pause"),$("#video_pause_button").addClass("paused").find("svg").removeClass("fa-pause").addClass("fa-play"),n()})}function n(){$(".fa-play").closest("#video_pause_button").click(()=>{$("#header_video").trigger("play"),$("#video_pause_button").removeClass("paused").find("svg").removeClass("fa-play").addClass("fa-pause"),r()})}let i=function(e){e&&$(window).scrollTop(0),setTimeout(()=>{let e=$("#scroll_top"),o=$(".header_row").height();$(window).on("scroll",()=>{$(document).scrollTop()>o+200?e.css("display","inline-flex"):e.css("display","none")}),e.click(()=>{$("html").animate({scrollTop:0},"slow")})},500)},m=function(){setTimeout(function(){let e=$(".footer_wrapper"),o=$(window).height(),t=e.height(),a=e.position().top+t;a<o&&e.css("margin-top",o-a+10+"px")},100)},p=function(){setTimeout(()=>{let e=$(".header_row");e.hasClass("home")?($(".home").addClass("home_header"),$(window).on("scroll",()=>{$(document).scrollTop()>150?e.removeClass("home_header"):e.addClass("home_header")})):$(window).off("scroll")},150)};let l="Basic dXNlcjp1c2Vy",h=function(e,o,t,a,s){"POST"===a&&(l="Basic a2lkX0J5QzRQejB3ejpjZGJkZjA2MGE1ZDA0OWRlYTM3ZGRlOGI4MTViN2E4ZQ==");let r={type:a,url:"https://baas.kinvey.com/"+e+"/kid_ByC4Pz0wz/"+o+t,headers:{Authorization:l,"Content-Type":"application/json"},data:s,success:e=>{},error:e=>{toastr.error(e)}};return $.ajax(r)},c=function(e){localStorage.getItem("role")===C?this.role=localStorage.getItem("name"):this.role="user",this.home_page=!0,this.video_source="./images/Homepage/STUDIO-TOREX-2015-SHOWREEL.mp4",this.offers_image_source="./images/Homepage/PlayDisabled.png",this.offers=T.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",header_video:"./templates/common/header/header_video.hbs",contact_us_button:"./templates/common/contact_us_button.hbs",main:"./templates/home_page/homepage_main_wrapper.hbs",homepage_main_section_offers:"./templates/home_page/homepage_main_section_offers.hbs",single_offer:"./templates/home_page/single_offer.hbs",homepage_main_section_about:"./templates/home_page/homepage_main_section_about.hbs",homepage_main_section_posts:"./templates/home_page/homepage_main_section_posts.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs"}).then(function(){this.partial("./templates/common/page.hbs").then(()=>{h("appdata","posts","","GET").then(o=>{e.posts=o,this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace(".posts")})})}).then(()=>{m(),p(),function(){let e=$(".homepage_section_offers").find($(".section_header")),o=$(".body_offer_1").find("a");$(".header_offer_1").find("h4").click(function(t){$(t.target).hasClass("shownDropdown")?($(".shown").slideUp(),$(".shown").removeClass("shown"),$(t.target).removeClass("shownDropdown")):($(".shownDropdown").removeClass("shownDropdown"),$(t.target).addClass("shownDropdown"),$(".shown").removeClass("shown").slideUp(),$(t.target).parent().next(".body_offer_1").find("p").addClass("shown").slideDown()),o.mouseenter(()=>{e.addClass("hoverEffect").find("h1").css("color","rgb(28, 160, 60)"),o.mouseleave(()=>{e.removeClass("hoverEffect").find("h1").css("color","")})})})}(),setTimeout(()=>{let e=$(".homepage_section_offers").find($(".section_header")),o=$(".body_offer_1").find("a");o.mouseenter(()=>{e.addClass("hoverEffect").find("h1").css("color","rgb(28, 160, 60)"),o.mouseleave(()=>{e.removeClass("hoverEffect").find("h1").css("color","")})})},1e3),a(),s(e)})}).then(()=>{i(!0),setTimeout(()=>{$("#video_pause_button").hasClass("paused")?n():r()},350)})},_=function(e){localStorage.getItem("role")===C?this.role=localStorage.getItem("name"):this.role="user",this.teammates=T.teammates,this.image=T.slider_images,this.offers=T.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/about_page/aboutpage_main_wrapper.hbs",aboutpage_section_teammate:"./templates/about_page/aboutpage_main_section_teammate.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(()=>{m(),p(),setTimeout(()=>{$(".aboutpage_section_teammate_wrapper").find($(".aboutpage_section_teammate_header"));let e=$(".aboutpage_section_teammate_body"),o=(e.find("a"),e.find("img")),t=$(".radiused");o.click(e=>{$(e.target).hasClass("shownParagraph")?($(".shown").animate({width:"toggle",height:"toggle"}),$(".shown").removeClass("shown"),$(e.target).removeClass("shownParagraph")):($(".shownParagraph").removeClass("shownParagraph"),$(e.target).addClass("shownParagraph"),$(".shown").removeClass("shown").animate({width:"toggle",height:"toggle"}),$(e.target).parent().find("p").addClass("shown").animate({width:"toggle",height:"toggle"}))}),$(window).innerWidth()<="700"?($(t[1]).css({"flex-direction":"column","text-align":"center"}),$(t[3]).css({"flex-direction":"column","text-align":"center","margin-left":"0"})):($(t[1]).css({"flex-direction":"row-reverse","text-align":"right"}),$(t[3]).css({"flex-direction":"row-reverse","text-align":"right","margin-left":"15px"}))},500),i(!0),setTimeout(()=>{$("#teammate_slider").slick({arrows:!0,prevArrow:$("#prev"),nextArrow:$("#next"),autoplay:!0,autoplaySpeed:1e3,speed:900,swipeToSlide:!0,pauseOnHover:!1,dots:!0,pauseOnDotsHover:!0,centerMode:!0,centerPadding:"40px",infinite:!0,fade:!0,cssEase:"linear"})},550),a(),s(e)})},d=function(e){localStorage.getItem("role")===C?this.role=localStorage.getItem("name"):this.role="user",this.contact_page=!0,this.offers=T.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/contact_page/contactpage_main_wrapper.hbs",contactpage_main_section_offers:"./templates/contact_page/contactpage_main_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",contactpage_main_section_working_time:"./templates/contact_page/contactpage_main_section_working_time.hbs",contactpage_main_section_contact_form_with_address:"./templates/contact_page/contactpage_main_section_contact_form_with_address.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(function(){m(),p(),a(),i(!0),setTimeout(()=>{new GMaps({div:"#google_map",lat:42.69253730000001,lng:23.32633169999997,zoom:18}).addMarker({lat:42.69253730000001,lng:23.32633169999997,title:"Studio Torex",infoWindow:{content:'<p style="color: black">Studio Torex:<br>Open 24/7</p>'}})},200),s(e)})},f=function(){setTimeout(()=>{$("#gallery").lightGallery({subHtmlSelectorRelative:!0,download:!1})},50)},g=function(e){let o=this.params.route;localStorage.getItem("role")===C?(this.role=localStorage.getItem("name"),this.photosAuthed=!0):(this.role="user",this.photosAuthed=!1),this.offers=T.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/common/photo_video gallery/gallery_main_wrapper.hbs",single_photo:"./templates/photo_page/single_photo_partial.hbs",photo_input:"./templates/admin/photo_input.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){switch(this.partial("./templates/common/page.hbs"),o){case"portrets":h("appdata","photos",'?query={"type":"portrets"}',"GET").then(o=>{e.photo=o,console.log(e.photo),this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(f())});break;case"weddings":h("appdata","photos",'?query={"type":"weddings"}',"GET").then(o=>{e.photo=o,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(f())});break;case"behind":h("appdata","photos",'?query={"type":"behind"}',"GET").then(o=>{e.photo=o,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(f())});break;case"boudoir":h("appdata","photos",'?query={"type":"boudoir"}',"GET").then(o=>{e.photo=o,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(f())})}}).then(function(){m(),p(),a(),i(!0),s(e)})},u=function(e){let o=Number(this.params.id);localStorage.getItem("role")===C?this.role=localStorage.getItem("name"):this.role="user",this.single_post=!0,this.redirect("#/posts",this.params.id),this.offers=T.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/post_page/postpage_main_wrapper.hbs",post:"./templates/post_page/single_post.hbs",posts:"./templates/common/posts/posts.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs"),h("appdata","posts","","GET").then(t=>{e.post=t[o],e.posts=t,this.render("./templates/post_page/single_post.hbs").then(()=>{this.replace(".postpage_main_wrapper")}).then(()=>{this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace("#list_posts")})})})}).then(function(){m(),p(),a(),i(!0),s(e)})},b=function(e){localStorage.getItem("role")===C?(this.role=localStorage.getItem("name"),this.postsAuthed=!0):(this.role="user",this.postsAuthed=!1),this.post_page=!0,this.offers=T.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/post_page/postpage_main_wrapper.hbs",posts:"./templates/common/posts/posts.hbs",post_input:"./templates/admin/post_input.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs"),h("appdata","posts","","GET").then(o=>{e.posts=o,this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace(".postpage_main_wrapper")})})}).then(function(){m(),p(),a(),i(!0),s(e),setTimeout(()=>{$("#submit_post").on("submit",e=>{e.preventDefault();let o=$("#title").val(),t=$("#subtitle").val(),a=$("#post_img").val(),s=$("#post_video").val(),r=$("#post_body").val(),n=$("#post_body2").val(),i=JSON.stringify({id:"18",title:o,subtitle:t,img_src:a,video_url:s,body:r,body2:n});return h("appdata","posts","","POST",i).then(e=>{console.log(e)}),!1})},3e3)})},w=function(e){let o=this.params.route;localStorage.getItem("role")===C?(this.role=localStorage.getItem("name"),this.videosAuthed=!0):(this.role="user",this.videosAuthed=!1),this.offers=T.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/common/photo_video gallery/gallery_main_wrapper.hbs",single_video:"./templates/video_page/single_video_partial.hbs",video_input:"./templates/admin/video_input.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){switch(this.partial("./templates/common/page.hbs"),o){case"ads":h("appdata","videos",'?query={"type":"ads"}',"GET").then(o=>{e.video=o,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})});break;case"music":h("appdata","videos",'?query={"type":"music"}',"GET").then(o=>{e.video=o,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})});break;case"weddings":h("appdata","videos",'?query={"type":"weddings"}',"GET").then(o=>{e.video=o,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})})}}).then(function(){m(),p(),a(),i(!0),f(),s(e),$("#submit_video")})};const v="Basic "+btoa("kid_ByC4Pz0wz:c47c381ad9234508be7cb15d8d42c2aa");let y=function(e){var o;setTimeout(()=>{let o=$("#loadingAdminPanel"),t=$("#loginSubmit");$(document).ajaxStart(()=>{o.show(),t.prop("disabled","true")}),$("#admin_form").on("submit",a=>{a.preventDefault();let s=$("#username").val(),r=$("#password").val(),n=$("#secret").val(),i={url:"https://baas.kinvey.com/user/kid_ByC4Pz0wz/login",method:"POST",headers:{Authorization:v,"Content-Type":"application/json"},data:JSON.stringify({username:s,password:r,secretAnswer:n}),success:o=>{o.secretAnswer===n?(o=o,localStorage.setItem("authtoken",o._kmd.authtoken),localStorage.setItem("username",o.username),localStorage.setItem("id",o._id),localStorage.setItem("role",o._kmd.roles[0].roleId),localStorage.setItem("name",o.name),e.redirect("#"),toastr.success(`Добре дошъл, ${o.name}`)):toastr.error("Въведи правилен никнейм")},error:e=>{toastr.error(e.responseJSON.description)},complete:()=>{o.hide(),t.prop("disabled","")}};return $.ajax(i),!1})},100)},S=function(e){localStorage.getItem("role")===C&&(this.redirect("#"),toastr.info(`Вече си логнат, ${localStorage.getItem("name")}`)),localStorage.getItem("role")===C?this.role=localStorage.getItem("name"):this.role="user",this.offers=T.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/admin/admin.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(()=>{m(),p(),i(!0),a(),y(e)})};toastr.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!0,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"3000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};t.d(o,"myData",function(){return T}),t.d(o,"role",function(){return C});const T={offers:[{id:"offer1",header:"Режисура",body:"Нашите креативни режисьори ще ви помогнат и тласнат проектите ви към съвсем различни измерения",img:"./images/Contactpage/1.png"},{id:"offer2",header:"Постпродукция и монтаж",body:"Истинският сценарий се пише на монтажа. Ще останете изненадани от предложенията на режисьора по монтаж, който може да завърти една линия по няколко различни начина. Визуалните ефекти ще допринесат за създаването на реално усещане за вашият краен продукт.",img:"./images/Contactpage/2.png"},{id:"offer3",header:"Звукозапис и звукообработка",body:"Нашият композитор е с модерни и новаторски виждания, който не се страхува да смесва различни стилове и да експерементира, има успешно композирани проекти в телевизионните сериали, както и в музикалните клипове.",img:"./images/Contactpage/3.png"},{id:"offer4",header:"Заснемане",body:"Освен идеята и креативноста е важна и цялостната визия на изображението, нашите оператори работят с последните технологични тенденции за да изградят една перфектна картина.",img:"./images/Contactpage/4.png"}],teammates:[{id:"1",profile:"https://www.facebook.com/torexa",img_source:"./images/Aboutpage/teammate1.jpg",name:"Иван Димитров",role:"Режисьор",resume:{row1:'Завършва - бакалавър "Режисура по',row2:'монтажа" в НАТФИЗ, както и',row3:'магистратура "Мениджмънт в',row4:'екранните изкуства" отново в',row5:"НАТФИЗ. Натрупан богат опит",row6:"като режисьор, оператор и",row7:"монтажист в сферата на",row8:"телевизионни сериали, филмови",row9:"продукции, музикални клипове."}},{id:"2",profile:"https://www.facebook.com/aeroooochocolate",img_source:"./images/Aboutpage/teammate2.jpg",name:"Андрей Кряколов",role:"Оператор",resume:{row1:'Бакалавър в НАТФИЗ - "Филмов и',row2:'телевизионен монтаж".',row3:"Оператор и режисьор на",row4:"късометражни филми,",row5:"реклами и музикални",row6:"клипове, опит в игрални",row7:"филми, ТВ сериали и други",row8:"продукции, цветови",row9:"корекции на реклами и филми.",row10:"Хоби - Фотограф."}},{id:"3",profile:"https://www.facebook.com/dimitar.stefanov.52",img_source:"./images/Aboutpage/teammate3.jpg",name:"Димитър Стефанов",role:"Осветител",resume:{row1:"Oсветител в киноиндустрията",row2:"гафер в музикални клипове",row3:"и реклами, асистент ",row4:"опeратор и фотограф.",row5:"Работил по множество",row6:"проекти в страната и",row7:"чужбина като кино",row8:"осветител.",row9:"Хоби - DJ."}},{id:"4",profile:"https://www.facebook.com/JKro0",img_source:"./images/Aboutpage/teammate4.jpg",name:"Любомир Иванов",role:"Композитор ",resume:{row1:'Завършил - магистърска степен "Поп и',row2:'Джаз" - Изпълнителско изкуство',row3:"АМТИИ с първи инструмент пиано.",row4:"Музикален оформител, редактор,",row5:"тонрежисьор и саунддизайнер с",row6:"опит в късометражни филми, ТВ",row7:"сериали, реклами, музикални",row8:"клипове. Композитор на",row9:"модерна(EDM), поп, рок, джаз,",row10:"ТВ/филмова музика."}}],slider_images:[{url:"./images/Aboutpage/Teammates Slider/1.jpg"},{url:"./images/Aboutpage/Teammates Slider/2.jpg"},{url:"./images/Aboutpage/Teammates Slider/3.jpg"},{url:"./images/Aboutpage/Teammates Slider/4.jpg"},{url:"./images/Aboutpage/Teammates Slider/5.jpg"},{url:"./images/Aboutpage/Teammates Slider/6.jpg"},{url:"./images/Aboutpage/Teammates Slider/7.jpg"}]},C="9a915413-ab00-41f5-a216-13a6854ffb62";$(()=>{Sammy("#wrapper",function(){this.use("Handlebars","hbs"),this.get("index.html",c),this.get("#/about",_),this.get("#/videos/:route",w),this.get("#/photography/:route",g),this.get("#/posts",b),this.get("#/posts/:id",u),this.get("#/contact",d),this.get("#/admin",S)}).run()})}]);