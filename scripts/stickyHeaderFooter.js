
let sticky = (()=> {
    //sticking footer on the bottom of the document no matter whether we add posts or other elements it will always be at
    //the bottom of the document
    function stickFooter() {
        //Using Timeout because function starts before Sammy finishes rendering all the templates
        setTimeout(function () {
            let footer = $('.footer_wrapper');
            let docHeight = $(window).height();
            let footerHeight = footer.height();
            let footerTop = footer.position().top + footerHeight;
            if (footerTop < docHeight) {
                footer.css('margin-top', 10 + (docHeight - footerTop) + 'px');
            }
        }, 100)
    }

    //adding a disappearing functionality on the header on the home page only
    function stickHeader() {
        //Using Timeout because function starts before Sammy finishes rendering all the templates
        setTimeout(() => {
            //Because searching the DOM is slow, if i don't make a variable that searches just once the selector,
            //it adds sometimes class 'home_header' even if there is no class 'home'
            let divHeaderRow = $('.header_row');
            if (divHeaderRow.hasClass('home')) {
                $('.home').addClass("home_header");
                $(window).on('scroll', () => {
                    if ($(document).scrollTop() > 150) {
                        divHeaderRow.removeClass("home_header");
                    } else {
                        divHeaderRow.addClass("home_header");
                    }
                })
            } else {
                $(window).off('scroll')
            }
        }, 150)
    }


    return {
        stickFooter,
        stickHeader
    };
})();
