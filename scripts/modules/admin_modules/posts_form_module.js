import { requestData } from "../requester";
import {regexVideoCurrentTimeUrl, regexVideoUrl} from "./videos_form_module";

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
                    try {
                        postVideo = postVideo.match(regexVideoUrl)[0];
                    } catch (err) {
                        toastr.error('Въведи валиден URL на видео от YOUTUBE.');
                        setTimeout(() => {
                            $('.submitData').removeAttr('disabled'); //enabling submit button
                        }, 1000);
                        return;
                    }
                    try {
                        postVideo = postVideo.match(regexVideoCurrentTimeUrl)[0];
                        postVideo = postVideo.slice(0,-1);
                    } catch(err) { }
                    let post_video_id = postVideo.slice(26);
                    postVideo = 'https://www.youtube.com/embed/' + post_video_id;
                }
                let reqBody = JSON.stringify({
                    title,
                    subtitle,
                    "img_src": postImg,
                    "video_url": postVideo,
                    "body": postBody,
                    "body2": postBody2,
                    "date": postDate,
                    "exact_time": exactTime,
                    "long_date": newDate
                });
                requestData('appdata', 'posts', '', 'POST', reqBody).then((post) => {
                    $('#submit_post').find('input[type=text], textarea').val('');
                    toastr.success(`Успешно качен пост: ${post.title} <br> ${post.subtitle}`);
                    setTimeout(() => {
                        $('.submitData').removeAttr('disabled'); //enabling submit button
                    }, 1000)
                });
                return false;
            })
        })
    }, 100);
};
export { attachPostsFormEvents, months }