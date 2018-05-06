import { requestData } from "../requester";
import {months} from "./posts_form_module";

let regexVideoUrl = /\/\/www.youtube.com\/watch\?v=.*/g;
let regexVideoCurrentTimeUrl = /\/\/www.youtube.com\/watch\?v=.*&{1}/g;
let attachVideosFormEvents = (ctx) => {
    setTimeout(() => {
        $('#show_video_form').click(() => {
            $('#submit_video').css('display', 'flex'); //showing form

            $('#close_video_form').click(() => { //attaching event listener for close button on form action = hide form
                $('#submit_video').css('display', 'none')
            });

            $('#submit_video').on('submit', (e) => { //attaching event listener to upload button
                e.preventDefault();
                $('.submitData').attr('disabled', 'true'); //disabling button so there are no multiple requests

                let newDate = new Date();
                let video_date = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
                let exactTime = `${newDate.getHours()} ${newDate.getMinutes()} ${newDate.getSeconds()}`;
                let video_url = $('#video_url').val();
                let video_id = '';
                try {
                    video_url = video_url.match(regexVideoUrl)[0];
                } catch (err) {
                    toastr.error('Въведи валиден URL на видео от YOUTUBE.');
                    setTimeout(() => {
                        $('.submitData').removeAttr('disabled'); //enabling submit button
                    }, 1000);
                    return;
                }
                try {
                    video_url = video_url.match(regexVideoCurrentTimeUrl)[0];
                    video_url = video_url.slice(0,-1);
                } catch(err) { }
                video_id = video_url.slice(26);
                video_url = `https://www.youtube.com/embed/${video_id}`;
                let video_title = $('#video_title').val();
                let img_url = `https://img.youtube.com/vi/${video_id}/0.jpg`;
                let type = $('#video_type option:selected').val();
                let reqBody = JSON.stringify({
                    video_url,
                    video_title,
                    img_url,
                    type,
                    "date": video_date,
                    "exact_time": exactTime,
                    "long_date": newDate
                });
                requestData('appdata', 'videos', '', 'POST', reqBody).then((videos) => {
                    $('#submit_video').find('input[type=text], textarea').val('');
                    toastr.success(`Успешно качен клип: ${videos.video_title}.`);
                    //Triggering new route that will callback the same function for rendering the page
                    if(window.location.href.toString().indexOf('/uploaded-video') !== -1) {
                        window.location.href = window.location.href.toString().replace('/uploaded-video', '');
                    } else {
                        window.location.href = window.location.href + '/uploaded-video';
                    }
                    setTimeout(() => {
                        $('.submitData').removeAttr('disabled'); //enabling submit button
                    }, 1000)
                });
                return false;
            })
        })
    }, 100)
};
export { attachVideosFormEvents, regexVideoUrl, regexVideoCurrentTimeUrl }