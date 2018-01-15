function slickTeammate() {
    setTimeout(()=>{
        $('#teammate_slider').slick({
            arrows: true,
            prevArrow: $('#prev'),
            nextArrow: $('#next'),
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 900,
            swipeToSlide: true,
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });
    }, 550)
}

