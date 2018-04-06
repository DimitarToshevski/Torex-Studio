import { requestData } from "../requester";
import {months} from "./posts_form_module";

let adminControls = () => {
    setTimeout(() => {
        $('.delete').click((e) => {
            e.preventDefault();
            let id = $(event.target).attr('data-id');
            let collection = $(event.target).attr('data-collection');
            requestData('appdata', collection, `/${id}`, 'DELETE').then((res) => {
                toastr.success('Успешно изтрит елемент. ' +
                    'НАТИСНИ F5');
            })
        });
        $('.edit').click((e) => {
            e.preventDefault();
            $('.submitData').val('Промени');
            $('.input').css('display', 'flex'); //showing form

            $('.close_form').click(() => { //attaching event listener for close button on form action = hide form
                $('.input').css('display', 'none');
                $('.input').off('submit');
                $('.input').find('input[type=text], textarea').val('');
                $('.submitData').val('Качи');
            });

            let id = $(event.target).closest('span').attr('data-id'); //finding the edit button data-id so I can
            let element = $(`#${id}`);                               //use it to find the element that I want to edit
            let photo_title = element.attr('data-sub-html').match(/[^<h4>].*[^<\/h4>]/g);
            let photo_url = element.attr('data-url');
            let type = element.attr('data-type');
            if(photo_title && photo_url) {
                $('#photo_url').val(photo_url);
                $('#photo_title').val(photo_title);
                $(`#photo_type option[value="${type}"]`).prop('selected', true); //changing selected option to the already selected on create
            }

            $('#submit_photo').on('submit', (e) => { //attaching event listener to upload button
                e.preventDefault();
                //editing photos
                if(photo_title && photo_url) {//if it has photo data - we make a request body with photo data
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
                } //if it has video data - we make a request body with video data
                return false;
            })
        });
    }, 2000)
};
export { adminControls }