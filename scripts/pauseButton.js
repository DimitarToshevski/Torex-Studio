function videoPlayPause() {
    setTimeout(() => {
        if ($('#video_pause_button').hasClass('paused')) {
            playVideo();
        } else {
            pauseVideo();
        }
    }, 350);
}

function pauseVideo() {
    $('.fa-pause').closest('#video_pause_button').click(() => {
        $('#header_video').trigger('pause');
        $('#video_pause_button').addClass('paused').find('i').removeClass('fa-pause').addClass('fa-play');
        playVideo();
    })
}

function playVideo() {
    $('.fa-play').closest('#video_pause_button').click(() => {
        $('#header_video').trigger('play');
        $('#video_pause_button').removeClass('paused').find('i').removeClass('fa-play').addClass('fa-pause');
        pauseVideo();
    })
}