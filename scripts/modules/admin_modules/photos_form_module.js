import { requestData } from "../requester";
import {months} from "./posts_form_module";

let attachPhotosFormEvents = () => {
    setTimeout(() => {
        $('#show_photo_form').click(() => {
            $('#submit_photo').css('display', 'flex'); //showing form

            $('#close_photo_form').click(() => { //attaching event listener for close button on form action = hide form
                $('#submit_photo').css('display', 'none');
                $('#submit_photo').find('input[type=text], textarea').val('');
            });

            $('#submit_photo').on('submit', (e) => { //attaching event listener to upload button
                e.preventDefault();
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
                requestData('appdata', 'photos', '', 'POST', reqBody).then((photo) => {
                    $('#submit_photo').find('input[type=text], textarea').val('');
                    toastr.success(`Успешно качена снимка: ${photo.title}. <br>НАТИСНИ F5`);
                    setTimeout(() => {
                        $('.submitData').removeAttr('disabled'); //enabling submit button
                    }, 2000)
                });
                return false;
            })
        })
    }, 100)
};
export { attachPhotosFormEvents }