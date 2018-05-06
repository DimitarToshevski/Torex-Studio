import { months } from "../posts_form_module";
import { requestData } from "../../requester";

let editPhoto = (id) => {
    $('.submitData').attr('disabled', 'true'); //disabling button so there are no multiple requests
    let newDate = new Date();
    let url = $('#photo_url').val();
    let title = $('#photo_title').val();
    let type = $('#photo_type option:selected').val();
    let photoDate = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
    let exactTime = `${newDate.getHours()} ${newDate.getMinutes()} ${newDate.getSeconds()}`;
    let reqBody = JSON.stringify({
        url,
        title,
        type,
        "date": photoDate,
        "exact_time": exactTime,
        "long_date": newDate
    });
    requestData('appdata', 'photos', `/${id}`, 'PUT', reqBody).then((photo) => {
        $('.input').css('display', 'none');
        $('.input').off('submit');
        $('.input').find('input[type=text], textarea').val('');
        $('.submitData').val('Качи');
        toastr.success(`Успешно променена снимка: ${photo.title}.`);
        //Triggering new route that will callback the same function for rendering the page
        if(window.location.href.toString().indexOf('/uploaded-photo') !== -1) {
            window.location.href = window.location.href.toString().replace('/uploaded-photo', '');
        } else {
            window.location.href = window.location.href + '/uploaded-photo';
        }
        setTimeout(() => {
            $('.submitData').removeAttr('disabled'); //enabling submit button
        }, 1000)
    });
};
export { editPhoto }