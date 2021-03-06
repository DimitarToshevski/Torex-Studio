import {months} from "../posts_form_module";
import {requestData} from "../../requester";
import {regexVideoCurrentTimeUrl, regexVideoUrl} from "../videos_form_module";

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
    requestData('appdata', 'posts', `/${id}`, 'PUT', reqBody).then((post) => {
        $('.input').css('display', 'none');
        $('.input').off('submit');
        $('.input').find('input[type=text], textarea').val('');
        $('.submitData').val('Качи');
        toastr.success(`Успешно променен пост: ${post.title}.`);
        //Triggering new route that will callback the same function for rendering the page
        if(window.location.href.toString().indexOf('/uploaded-post') !== -1) {
            window.location.href = window.location.href.toString().replace('uploaded-post', 'posts');
        } else {
            window.location.href = window.location.href.toString().replace('posts', 'uploaded-post');
        }
        setTimeout(() => {
            $('.submitData').removeAttr('disabled'); //enabling submit button
        }, 1000)
    });
};
export {editPost}