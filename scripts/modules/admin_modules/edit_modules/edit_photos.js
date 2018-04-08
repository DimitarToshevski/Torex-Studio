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
        "exact_time": exactTime
    });
    requestData('appdata', 'photos', `/${id}`, 'PUT', reqBody).then((photo) => {
        $('.input').css('display', 'none');
        $('.input').off('submit');
        $('.input').find('input[type=text], textarea').val('');
        $('.submitData').val('Качи');
        toastr.success(`Успешно променена снимка: ${photo.title}. <br> НАТИСНИ F5`);
        setTimeout(() => {
            $('.submitData').removeAttr('disabled'); //enabling submit button
        }, 1000)
    });
};
export { editPhoto }