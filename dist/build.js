!function(e){var t={};function o(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);let s=function(e){setTimeout(()=>{let e=!1;$("#btn_menu").on("click",()=>{e?($(".header_nav").css("display","none"),e=!1):($(".header_nav").css("display","block"),e=!0)}),localStorage.getItem("role")===A?setTimeout(()=>{$("#greeting, #logout").show()},100):$("#greeting, #logout").hide()},100)};let a=function(e){setTimeout(()=>{$("#logout").on("click",()=>{let t={url:"https://baas.kinvey.com/user/kid_ByC4Pz0wz/_logout",method:"POST",headers:{Authorization:"Kinvey "+localStorage.getItem("authtoken")},success:function(t){let o=localStorage.getItem("name");toastr.success(`До скоро, ${o}`),localStorage.clear(),$("#greeting, #logout").hide(),e.redirect("#")}(),error:e=>{toastr.error(e)}};$.ajax(t)})},100)};function r(){$(".fa-pause").closest("#video_pause_button").click(()=>{$("#header_video").trigger("pause"),$("#video_pause_button").addClass("paused").find("svg").removeClass("fa-pause").addClass("fa-play"),n()})}function n(){$(".fa-play").closest("#video_pause_button").click(()=>{$("#header_video").trigger("play"),$("#video_pause_button").removeClass("paused").find("svg").removeClass("fa-play").addClass("fa-pause"),r()})}let i=function(e){e&&$(window).scrollTop(0),setTimeout(()=>{let e=$("#scroll_top"),t=$(".header_row").height();$(window).on("scroll",()=>{$(document).scrollTop()>t+200?e.css("display","inline-flex"):e.css("display","none")}),e.click(()=>{$("html").animate({scrollTop:0},"slow")})},500)},m=function(){setTimeout(function(){let e=$(".footer_wrapper"),t=$(window).height(),o=e.height(),s=e.position().top+o;s<t&&e.css("margin-top",t-s+10+"px")},100)},l=function(){setTimeout(()=>{let e=$(".header_row");e.hasClass("home")?($(".home").addClass("home_header"),$(window).on("scroll",()=>{$(document).scrollTop()>150?e.removeClass("home_header"):e.addClass("home_header")})):$(window).off("scroll")},150)};let p="Basic dXNlcjp1c2Vy",h=function(e,t,o,s,a){"GET"!==s&&(p="Basic a2lkX0J5QzRQejB3ejpjZGJkZjA2MGE1ZDA0OWRlYTM3ZGRlOGI4MTViN2E4ZQ==");let r={type:s,url:"https://baas.kinvey.com/"+e+"/kid_ByC4Pz0wz/"+t+o,headers:{Authorization:p,"Content-Type":"application/json"},data:a,success:e=>{},error:e=>{toastr.error(e)}};return $.ajax(r)},c=function(e){localStorage.getItem("role")===A?this.role=localStorage.getItem("name"):this.role="user",this.home_page=!0,this.video_source="./images/Homepage/STUDIO-TOREX-2015-SHOWREEL.mp4",this.offers_image_source="./images/Homepage/PlayDisabled.png",this.offers=D.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",header_video:"./templates/common/header/header_video.hbs",contact_us_button:"./templates/common/contact_us_button.hbs",main:"./templates/home_page/homepage_main_wrapper.hbs",homepage_main_section_offers:"./templates/home_page/homepage_main_section_offers.hbs",single_offer:"./templates/home_page/single_offer.hbs",homepage_main_section_about:"./templates/home_page/homepage_main_section_about.hbs",homepage_main_section_posts:"./templates/home_page/homepage_main_section_posts.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs"}).then(function(){this.partial("./templates/common/page.hbs").then(()=>{h("appdata","posts","","GET").then(t=>{e.posts=t,this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace(".posts")})})}).then(()=>{m(),l(),function(){let e=$(".homepage_section_offers").find($(".section_header")),t=$(".body_offer_1").find("a");$(".header_offer_1").find("h4").click(function(o){$(o.target).hasClass("shownDropdown")?($(".shown").slideUp(),$(".shown").removeClass("shown"),$(o.target).removeClass("shownDropdown")):($(".shownDropdown").removeClass("shownDropdown"),$(o.target).addClass("shownDropdown"),$(".shown").removeClass("shown").slideUp(),$(o.target).parent().next(".body_offer_1").find("p").addClass("shown").slideDown()),t.mouseenter(()=>{e.addClass("hoverEffect").find("h1").css("color","rgb(28, 160, 60)"),t.mouseleave(()=>{e.removeClass("hoverEffect").find("h1").css("color","")})})})}(),setTimeout(()=>{let e=$(".homepage_section_offers").find($(".section_header")),t=$(".body_offer_1").find("a");t.mouseenter(()=>{e.addClass("hoverEffect").find("h1").css("color","rgb(28, 160, 60)"),t.mouseleave(()=>{e.removeClass("hoverEffect").find("h1").css("color","")})})},1e3),s(),a(e)})}).then(()=>{i(!0),setTimeout(()=>{$("#video_pause_button").hasClass("paused")?n():r()},350)})},_=function(e){localStorage.getItem("role")===A?this.role=localStorage.getItem("name"):this.role="user",this.teammates=D.teammates,this.image=D.slider_images,this.offers=D.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/about_page/aboutpage_main_wrapper.hbs",aboutpage_section_teammate:"./templates/about_page/aboutpage_main_section_teammate.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(()=>{m(),l(),setTimeout(()=>{$(".aboutpage_section_teammate_wrapper").find($(".aboutpage_section_teammate_header"));let e=$(".aboutpage_section_teammate_body"),t=(e.find("a"),e.find("img")),o=$(".radiused");t.click(e=>{$(e.target).hasClass("shownParagraph")?($(".shown").animate({width:"toggle",height:"toggle"}),$(".shown").removeClass("shown"),$(e.target).removeClass("shownParagraph")):($(".shownParagraph").removeClass("shownParagraph"),$(e.target).addClass("shownParagraph"),$(".shown").removeClass("shown").animate({width:"toggle",height:"toggle"}),$(e.target).parent().find("p").addClass("shown").animate({width:"toggle",height:"toggle"}))}),$(window).innerWidth()<="700"?($(o[1]).css({"flex-direction":"column","text-align":"center"}),$(o[3]).css({"flex-direction":"column","text-align":"center","margin-left":"0"})):($(o[1]).css({"flex-direction":"row-reverse","text-align":"right"}),$(o[3]).css({"flex-direction":"row-reverse","text-align":"right","margin-left":"15px"}))},500),i(!0),setTimeout(()=>{$("#teammate_slider").slick({arrows:!0,prevArrow:$("#prev"),nextArrow:$("#next"),autoplay:!0,autoplaySpeed:1e3,speed:900,swipeToSlide:!0,pauseOnHover:!1,dots:!0,pauseOnDotsHover:!0,centerMode:!0,centerPadding:"40px",infinite:!0,fade:!0,cssEase:"linear"})},550),s(),a(e)})},d=function(e){localStorage.getItem("role")===A?this.role=localStorage.getItem("name"):this.role="user",this.contact_page=!0,this.offers=D.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/contact_page/contactpage_main_wrapper.hbs",contactpage_main_section_offers:"./templates/contact_page/contactpage_main_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",contactpage_main_section_working_time:"./templates/contact_page/contactpage_main_section_working_time.hbs",contactpage_main_section_contact_form_with_address:"./templates/contact_page/contactpage_main_section_contact_form_with_address.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(function(){m(),l(),s(),i(!0),setTimeout(()=>{new GMaps({div:"#google_map",lat:42.69253730000001,lng:23.32633169999997,zoom:18}).addMarker({lat:42.69253730000001,lng:23.32633169999997,title:"Studio Torex",infoWindow:{content:'<p style="color: black">Studio Torex:<br>Open 24/7</p>'}})},200),a(e)})},f=function(){setTimeout(()=>{$("#gallery").lightGallery({subHtmlSelectorRelative:!0,download:!1})},50)},g=()=>{setTimeout(()=>{$(".delete").click(e=>{e.preventDefault();let t=$(event.target).prop("id"),o=$(event.target).attr("data-collection");h("appdata",o,`/${t}`,"DELETE").then(e=>{toastr.success("Успешно изтрит елемент. НАТИСНИ F5")})}),$(".edit").click(e=>{e.preventDefault(),$("#submit_photo").css("display","flex"),$("#close_photo_form").click(()=>{$("#submit_photo").css("display","none"),$("#submit_photo").off("submit")}),$("#submit_photo").on("submit",e=>(e.preventDefault(),alert("works"),!1))})},2e3)},u=function(e){let t=this.params.route;localStorage.getItem("role")===A?(this.role=localStorage.getItem("name"),this.photosAuthed=!0):(this.role="user",this.photosAuthed=!1),this.offers=D.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/common/photo_video gallery/gallery_main_wrapper.hbs",single_photo:"./templates/photo_page/single_photo_partial.hbs",photo_input:"./templates/admin/photo_input.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){switch(this.partial("./templates/common/page.hbs"),t){case"portrets":h("appdata","photos",'?query={"type":"portrets"}',"GET").then(t=>{e.photo=t,console.log(e.photo),this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(f())});break;case"weddings":h("appdata","photos",'?query={"type":"weddings"}',"GET").then(t=>{e.photo=t,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(f())});break;case"behind":h("appdata","photos",'?query={"type":"behind"}',"GET").then(t=>{e.photo=t,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(f())});break;case"boudoir":h("appdata","photos",'?query={"type":"boudoir"}',"GET").then(t=>{e.photo=t,this.render("./templates/photo_page/single_photo_partial.hbs").then(()=>{this.replace("#gallery")}).then(f())})}}).then(function(){m(),l(),s(),i(!0),a(e),setTimeout(()=>{$("#show_photo_form").click(()=>{$("#submit_photo").css("display","flex"),$("#close_photo_form").click(()=>{$("#submit_photo").css("display","none")}),$("#submit_photo").on("submit",e=>{e.preventDefault(),$(".submitData").attr("disabled","true");let t=$("#photo_url").val(),o=$("#photo_title").val(),s=$("#photo_type option:selected").val(),a=JSON.stringify({url:t,title:o,type:s});return h("appdata","photos","","POST",a).then(e=>{toastr.success(`Успешно качена  снимка: ${e.title}`),setTimeout(()=>{$(".submitData").removeAttr("disabled")},2e3)}),!1})})},100),g()})},b=function(e){let t=this.params.id;localStorage.getItem("role")===A?this.role=localStorage.getItem("name"):this.role="user",this.single_post=!0,this.redirect("#/posts",this.params.id),this.offers=D.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/post_page/postpage_main_wrapper.hbs",post:"./templates/post_page/single_post.hbs",posts:"./templates/common/posts/posts.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs"),h("appdata","posts","","GET").then(o=>{for(let s in o)o[s]._id===t&&(e.post=o[s]);e.posts=o,this.render("./templates/post_page/single_post.hbs").then(()=>{this.replace(".postpage_main_wrapper")}).then(()=>{this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace("#list_posts")})})})}).then(function(){m(),l(),s(),i(!0),a(e)})},w=/\/\/www.youtube.com\/embed\/\w*/g,v=["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],y=function(e){localStorage.getItem("role")===A?(this.role=localStorage.getItem("name"),this.postsAuthed=!0):(this.role="user",this.postsAuthed=!1),this.post_page=!0,this.offers=D.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/post_page/postpage_main_wrapper.hbs",posts:"./templates/common/posts/posts.hbs",post_input:"./templates/admin/post_input.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs"),h("appdata","posts","","GET").then(t=>{e.posts=t,this.render("./templates/common/posts/posts.hbs").then(()=>{this.replace(".postpage_main_wrapper")})})}).then(function(){m(),l(),s(),i(!0),a(e),setTimeout(()=>{$("#show_post_form").click(()=>{$("#submit_post").css("display","flex"),$("#close_post_form").click(()=>{$("#submit_post").css("display","none")}),$("#submit_post").on("submit",e=>{e.preventDefault(),$(".submitData").attr("disabled","true");let t=new Date,o=`${t.getDate()} ${v[t.getMonth()]} ${t.getFullYear()}`,s=$("#post_title").val(),a=$("#post_subtitle").val(),r=$("#post_img").val(),n=$("#post_video").val().match(w)[0],i=$("#post_body").val(),m=$("#post_body2").val(),l=JSON.stringify({title:s,subtitle:a,img_src:r,video_url:n,body:i,body2:m,date:o});return h("appdata","posts","","POST",l).then(e=>{toastr.success(`Успешно качен пост: ${e.title} <br> ${e.subtitle}`),setTimeout(()=>{$(".submitData").removeAttr("disabled")},2e3)}),!1})})},100),g()})},T=/\/\/www.youtube.com\/embed\/\w*/g,S=function(e){let t=this.params.route;localStorage.getItem("role")===A?(this.role=localStorage.getItem("name"),this.videosAuthed=!0):(this.role="user",this.videosAuthed=!1),this.offers=D.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/common/photo_video gallery/gallery_main_wrapper.hbs",single_video:"./templates/video_page/single_video_partial.hbs",video_input:"./templates/admin/video_input.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){switch(this.partial("./templates/common/page.hbs"),t){case"ads":h("appdata","videos",'?query={"type":"ads"}',"GET").then(t=>{e.video=t,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})});break;case"music":h("appdata","videos",'?query={"type":"music"}',"GET").then(t=>{e.video=t,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})});break;case"weddings":h("appdata","videos",'?query={"type":"weddings"}',"GET").then(t=>{e.video=t,this.render("./templates/video_page/single_video_partial.hbs").then(()=>{this.replace("#gallery")})})}}).then(function(){m(),l(),s(),i(!0),f(),a(e),setTimeout(()=>{$("#show_video_form").click(()=>{$("#submit_video").css("display","flex"),$("#close_video_form").click(()=>{$("#submit_video").css("display","none")}),$("#submit_video").on("submit",e=>{e.preventDefault(),$(".submitData").attr("disabled","true");let t=$("#video_url").val().match(T)[0],o=$("#video_title").val(),s=$("#video_img").val(),a=$("#video_type option:selected").val(),r=JSON.stringify({video_url:t,video_title:o,img_url:s,type:a});return h("appdata","videos","","POST",r).then(e=>{toastr.success(`Успешно качен клип: ${e.video_title}`),setTimeout(()=>{$(".submitData").removeAttr("disabled")},2e3)}),!1})})},100),g()})};const k="Basic "+btoa("kid_ByC4Pz0wz:c47c381ad9234508be7cb15d8d42c2aa");let C=function(e){var t;setTimeout(()=>{let t=$("#loadingAdminPanel"),o=$("#loginSubmit");$(document).ajaxStart(()=>{t.show(),o.prop("disabled","true")}),$("#admin_form").on("submit",s=>{s.preventDefault();let a=$("#username").val(),r=$("#password").val(),n=$("#secret").val(),i={url:"https://baas.kinvey.com/user/kid_ByC4Pz0wz/login",method:"POST",headers:{Authorization:k,"Content-Type":"application/json"},data:JSON.stringify({username:a,password:r,secretAnswer:n}),success:t=>{t.secretAnswer===n?(t=t,localStorage.setItem("authtoken",t._kmd.authtoken),localStorage.setItem("username",t.username),localStorage.setItem("id",t._id),localStorage.setItem("role",t._kmd.roles[0].roleId),localStorage.setItem("name",t.name),e.redirect("#"),toastr.success(`Добре дошъл, ${t.name}`)):toastr.error("Въведи правилен никнейм")},error:e=>{toastr.error(e.responseJSON.description)},complete:()=>{t.hide(),o.prop("disabled","")}};return $.ajax(i),!1})},100)},x=function(e){localStorage.getItem("role")===A&&(this.redirect("#"),toastr.info(`Вече си логнат, ${localStorage.getItem("name")}`)),localStorage.getItem("role")===A?this.role=localStorage.getItem("name"):this.role="user",this.offers=D.offers,this.loadPartials({header_wrapper:"./templates/common/header/header_wrapper.hbs",header_logo:"./templates/common/header/header_logo.hbs",header_menu:"./templates/common/header/header_menu.hbs",header_greeting:"./templates/common/header/header_greeting.hbs",main:"./templates/admin/admin.hbs",footer_wrapper:"./templates/common/footer/footer_wrapper.hbs",footer_section_offers:"./templates/common/footer/footer_section_offers.hbs",footer_offers:"./templates/common/footer/single_offer.hbs",footer_section_partners:"./templates/common/footer/footer_section_partners.hbs",footer_section_follow:"./templates/common/footer/footer_section_follow.hbs",contact_us_button:"./templates/common/contact_us_button.hbs"}).then(function(){this.partial("./templates/common/page.hbs")}).then(()=>{m(),l(),i(!0),s(),C(e)})};toastr.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!0,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"3000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};o.d(t,"myData",function(){return D}),o.d(t,"role",function(){return A});const D={offers:[{id:"offer1",header:"Режисура",body:"Нашите креативни режисьори ще ви помогнат и тласнат проектите ви към съвсем различни измерения",img:"./images/Contactpage/1.png"},{id:"offer2",header:"Постпродукция и монтаж",body:"Истинският сценарий се пише на монтажа. Ще останете изненадани от предложенията на режисьора по монтаж, който може да завърти една линия по няколко различни начина. Визуалните ефекти ще допринесат за създаването на реално усещане за вашият краен продукт.",img:"./images/Contactpage/2.png"},{id:"offer3",header:"Звукозапис и звукообработка",body:"Нашият композитор е с модерни и новаторски виждания, който не се страхува да смесва различни стилове и да експерементира, има успешно композирани проекти в телевизионните сериали, както и в музикалните клипове.",img:"./images/Contactpage/3.png"},{id:"offer4",header:"Заснемане",body:"Освен идеята и креативноста е важна и цялостната визия на изображението, нашите оператори работят с последните технологични тенденции за да изградят една перфектна картина.",img:"./images/Contactpage/4.png"}],teammates:[{id:"1",profile:"https://www.facebook.com/torexa",img_source:"./images/Aboutpage/teammate1.jpg",name:"Иван Димитров",role:"Режисьор",resume:{row1:'Завършва - бакалавър "Режисура по',row2:'монтажа" в НАТФИЗ, както и',row3:'магистратура "Мениджмънт в',row4:'екранните изкуства" отново в',row5:"НАТФИЗ. Натрупан богат опит",row6:"като режисьор, оператор и",row7:"монтажист в сферата на",row8:"телевизионни сериали, филмови",row9:"продукции, музикални клипове."}},{id:"2",profile:"https://www.facebook.com/aeroooochocolate",img_source:"./images/Aboutpage/teammate2.jpg",name:"Андрей Кряколов",role:"Оператор",resume:{row1:'Бакалавър в НАТФИЗ - "Филмов и',row2:'телевизионен монтаж".',row3:"Оператор и режисьор на",row4:"късометражни филми,",row5:"реклами и музикални",row6:"клипове, опит в игрални",row7:"филми, ТВ сериали и други",row8:"продукции, цветови",row9:"корекции на реклами и филми.",row10:"Хоби - Фотограф."}},{id:"3",profile:"https://www.facebook.com/dimitar.stefanov.52",img_source:"./images/Aboutpage/teammate3.jpg",name:"Димитър Стефанов",role:"Осветител",resume:{row1:"Oсветител в киноиндустрията",row2:"гафер в музикални клипове",row3:"и реклами, асистент ",row4:"опeратор и фотограф.",row5:"Работил по множество",row6:"проекти в страната и",row7:"чужбина като кино",row8:"осветител.",row9:"Хоби - DJ."}},{id:"4",profile:"https://www.facebook.com/JKro0",img_source:"./images/Aboutpage/teammate4.jpg",name:"Любомир Иванов",role:"Композитор ",resume:{row1:'Завършил - магистърска степен "Поп и',row2:'Джаз" - Изпълнителско изкуство',row3:"АМТИИ с първи инструмент пиано.",row4:"Музикален оформител, редактор,",row5:"тонрежисьор и саунддизайнер с",row6:"опит в късометражни филми, ТВ",row7:"сериали, реклами, музикални",row8:"клипове. Композитор на",row9:"модерна(EDM), поп, рок, джаз,",row10:"ТВ/филмова музика."}}],slider_images:[{url:"./images/Aboutpage/Teammates Slider/1.jpg"},{url:"./images/Aboutpage/Teammates Slider/2.jpg"},{url:"./images/Aboutpage/Teammates Slider/3.jpg"},{url:"./images/Aboutpage/Teammates Slider/4.jpg"},{url:"./images/Aboutpage/Teammates Slider/5.jpg"},{url:"./images/Aboutpage/Teammates Slider/6.jpg"},{url:"./images/Aboutpage/Teammates Slider/7.jpg"}]},A="9a915413-ab00-41f5-a216-13a6854ffb62";$(()=>{Sammy("#wrapper",function(){this.use("Handlebars","hbs"),this.get("index.html",c),this.get("#/about",_),this.get("#/videos/:route",S),this.get("#/photography/:route",u),this.get("#/posts",y),this.get("#/posts/:id",b),this.get("#/contact",d),this.get("#/admin",x)}).run()})}]);