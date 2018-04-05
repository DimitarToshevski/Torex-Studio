import {requestData} from "../requester";

let regexVideoUrl = /\/\/www.youtube.com\/embed\/\w*/g;
let months =
    [
        'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',
        'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
    ];

let attachPostsFormEvents = () => {
    setTimeout(() => {
        $('#show_post_form').click(() => {

            $('#submit_post').css('display', 'flex'); //showing form

            $('#close_post_form').click(() => { //attaching event listener for close button on form action = hide form
                $('#submit_post').css('display', 'none')
            });

            $('#submit_post').on('submit', (e) => {
                e.preventDefault();
                $('.submitData').attr('disabled', 'true'); //disabling button so there are no multiple requests

                let newDate = new Date();
                let postDate = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
                let exactTime = `${newDate.getHours()} ${newDate.getMinutes()} ${newDate.getSeconds()}`;
                let title = $('#post_title').val();
                let subtitle = $('#post_subtitle').val();
                let postImg = $('#post_img').val();
                let postVideo = $('#post_video').val();
                let postBody = $('#post_body').val();
                let postBody2 = $('#post_body2').val();
                if(postVideo) {
                    postVideo = postVideo.match(regexVideoUrl)[0];
                }
                let reqBody = JSON.stringify({
                    title,
                    subtitle,
                    "img_src": postImg,
                    "video_url": postVideo,
                    "body": postBody,
                    "body2": postBody2,
                    "date": postDate,
                    "exact_time": exactTime
                });
                requestData('appdata', 'posts', '', 'POST', reqBody).then((post) => {
                    $('#submit_post').find('input[type=text], textarea').val('');
                    toastr.success(`Успешно качен пост: ${post.title} <br> ${post.subtitle}`);
                    setTimeout(() => {
                        $('.submitData').removeAttr('disabled'); //enabling submit button
                    }, 2000)
                });
                return false;
            })
        })
    }, 100);
};
export { attachPostsFormEvents, months }