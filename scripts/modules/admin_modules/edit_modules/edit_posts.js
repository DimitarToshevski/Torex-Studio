import {months} from "../posts_form_module";
import {requestData} from "../../requester";
import {regexVideoUrl} from "../videos_form_module";

let editPost = (id) => {
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
    if (postVideo) {
        try {
            let post_video_id = postVideo.match(regexVideoUrl)[0].slice(26);
            postVideo = 'https://www.youtube.com/embed/' + post_video_id;
        } catch (err) {
            toastr.error('Въведи валиден URL на видео от YOUTUBE.');
            setTimeout(() => {
                $('.submitData').removeAttr('disabled'); //enabling submit button
            }, 1000);
            return;
        }
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
    requestData('appdata', 'posts', `/${id}`, 'PUT', reqBody).then((post) => {
        $('.input').css('display', 'none');
        $('.input').off('submit');
        $('.input').find('input[type=text], textarea').val('');
        $('.submitData').val('Качи');
        toastr.success(`Успешно променен пост: ${post.title}. <br> НАТИСНИ F5`);
        setTimeout(() => {
            $('.submitData').removeAttr('disabled'); //enabling submit button
        }, 1000)
    });
};
export {editPost}