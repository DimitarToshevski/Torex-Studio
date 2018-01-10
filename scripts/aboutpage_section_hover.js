function hoverAboutpageSection() {
    setTimeout(() => {
        let sectionHeader = $('.aboutpage_section_teammate_wrapper').find($('.aboutpage_section_teammate_header'));
        let sectionTeammateBody = $('.aboutpage_section_teammate_body');
        let accordeonLinks = sectionTeammateBody.find('a');
        let img = sectionTeammateBody.find('img');
        img.click(() => {
            if ($(event.target).hasClass('shownParagraph')) {
                $('.shown').hide();
                $('.shown').removeClass('shown');
                $(event.target).removeClass('shownParagraph');
            }
            else {
                $('.shownParagraph').removeClass('shownParagraph');
                $(event.target).addClass('shownParagraph');
                $('.shown').removeClass('shown').hide();
                $(event.target).parent().find('p').css('margin-left', '10px').addClass('shown').show();

            }
        });

        //Adding image pulse effect and header changes color when the mouse enters a paragraph
        accordeonLinks.mouseenter(() => {
            $(event.target).css({"transition": "all .3s ease-in-out", "transform": "scale(1.03, 1.03)"});
            $(event.target).parent().parent().parent().parent().find(sectionHeader).addClass('hoverEffect')
                .find('h1').css('color', 'rgb(28, 160, 60)');
            accordeonLinks.mouseleave(() => {
                $(event.target).css({"transition": "", "transform": ""});
                $(event.target).parent().parent().parent().parent().find(sectionHeader).removeClass('hoverEffect')
                    .find('h1').css('color', '');
            })
        })
    }, 500)
}
