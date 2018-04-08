import { months } from "../posts_form_module";
import { requestData } from "../../requester";
import { regexVideoUrl } from "../videos_form_module";

let editVideo = (id) => {
    $('.submitData').attr('disabled', 'true'); //disabling button so there are no multiple requests
    let newDate = new Date();
    let video_date = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
    let exactTime = `${newDate.getHours()} ${newDate.getMinutes()} ${newDate.getSeconds()}`;
    let video_url = $('#video_url').val();
    try {
        video_url = video_url.match(regexVideoUrl)[0]
    } catch (err) {
        toastr.error('Въведи валиден EMBED URL на видео от YOUTUBE.');
        setTimeout(() => {
            $('.submitData').removeAttr('disabled'); //enabling submit button
        }, 1000);
        return;
    }
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
    requestData('appdata', 'videos', `/${id}`, 'PUT', reqBody).then((video) => {
        $('.input').css('display', 'none');
        $('.input').off('submit');
        $('.input').find('input[type=text], textarea').val('');
        $('.submitData').val('Качи');
        toastr.success(`Успешно промененo видео: ${video.video_title}. <br> НАТИСНИ F5`);
        setTimeout(() => {
            $('.submitData').removeAttr('disabled'); //enabling submit button
        }, 1000)
    });
};
export { editVideo }