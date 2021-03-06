let slickTeammate = function () {
    setTimeout(()=>{
        $('#teammate_slider').slick({
            arrows: true,
            prevArrow: $('#prev'),
            nextArrow: $('#next'),
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 900,
            swipeToSlide: true,
            pauseOnHover: false,
            dots: true,
            pauseOnDotsHover: true,
            centerMode: true,
            centerPadding: '40px',
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });
    }, 550)
};
export { slickTeammate }

