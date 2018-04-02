import { requestData } from "../requester";
import {months} from "./posts_form_module";

let regexVideoUrl = /\/\/www.youtube.com\/embed\/\w*/g;
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
                let video_url = $('#video_url').val().match(regexVideoUrl)[0];
                let video_title = $('#video_title').val();
                let img_url = $('#video_img').val();
                let type = $('#video_type option:selected').val();
                let reqBody = JSON.stringify({
                    video_url,
                    video_title,
                    img_url,
                    type,
                    "date": video_date,
                    "exact_time": exactTime
                });
                requestData('appdata', 'videos', '', 'POST', reqBody).then((videos) => {
                    $('#submit_video').find('input[type=text], textarea').val('');
                    toastr.success(`Успешно качен клип: ${videos.video_title}`);
                    setTimeout(() => {
                        $('.submitData').removeAttr('disabled'); //enabling submit button
                    }, 2000)
                });
                return false;
            })
        })
    }, 100)
};
export { attachVideosFormEvents }