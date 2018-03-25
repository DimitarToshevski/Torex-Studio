let hoverAboutpageSection = function () {
    setTimeout(() => {
        let sectionHeader = $('.aboutpage_section_teammate_wrapper').find($('.aboutpage_section_teammate_header'));
        let sectionTeammateBody = $('.aboutpage_section_teammate_body');
        let accordeonLinks = sectionTeammateBody.find('a');
        let img = sectionTeammateBody.find('img');
        let radiusedDiv = $('.radiused');
        img.click((event) => {
            if ($(event.target).hasClass('shownParagraph')) {
                $('.shown').animate({
                    width: 'toggle',
                    height: 'toggle'
                });
                $('.shown').removeClass('shown');
                $(event.target).removeClass('shownParagraph');
            }
            else {
                $('.shownParagraph').removeClass('shownParagraph');
                $(event.target).addClass('shownParagraph');
                $('.shown').removeClass('shown').animate({
                    width: 'toggle',
                    height: 'toggle'
                });
                $(event.target).parent().find('p').addClass('shown').animate({
                    width: 'toggle',
                    height: 'toggle'
                });
            }
        });
        if($(window).innerWidth() <= "700") {
            $(radiusedDiv[1]).css({'flex-direction': 'column', 'text-align': 'center'});
            $(radiusedDiv[3]).css({'flex-direction': 'column', 'text-align': 'center', 'margin-left': '0'});
        } else {
            $(radiusedDiv[1]).css({'flex-direction': 'row-reverse', 'text-align': 'right'});
            $(radiusedDiv[3]).css({'flex-direction': 'row-reverse', 'text-align': 'right', 'margin-left': '15px'});
        }
    }, 500)
};
export { hoverAboutpageSection }