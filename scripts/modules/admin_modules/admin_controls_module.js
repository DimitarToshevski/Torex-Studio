import { requestData } from "../requester";
import { months } from "./posts_form_module";
import { regexVideoUrl } from "./videos_form_module";

let adminControls = () => {
    setTimeout(() => {

        //DELETE EVENT LISTENER
        $('.delete').click((e) => {
            e.preventDefault();
            let id = $(e.target).attr('data-id');
            let collection = $(e.target).attr('data-collection');
            requestData('appdata', collection, `/${id}`, 'DELETE').then((res) => {
                toastr.success('Успешно изтрит елемент. ' +
                    'НАТИСНИ F5');
            })
        });

        //EDIT EVENT LISTENER
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

            let id = $(e.target).closest('span').attr('data-id'); //finding the edit button data-id so I can
            let element = $(`#${id}`);                           //use it to find the element that I want to edit

            //PHOTOS
            let photo_title = element.attr('data-sub-html').match(/[^<h4>].*[^<\/h4>]/g);
            let photo_url = element.attr('data-url');
            let type = element.attr('data-type');
            if(photo_title && photo_url) {
                $('#photo_url').val(photo_url);
                $('#photo_title').val(photo_title);
                $(`#photo_type option[value="${type}"]`).prop('selected', true); //changing selected option to the already selected on create
            }

            //VIDEOS
            let video_title = element.attr('data-sub-html').match(/[^<h4>].*[^<\/h4>]/g);
            let video_url = element.prop('href');
            let video_img_url = element.attr('data-poster');
            let video_type = element.attr('data-type');
            if(video_title && video_url && video_img_url) {
                $('#video_title').val(video_title);
                $('#video_url').val(video_url);
                $('#video_img').val(video_img_url);
                $(`#video_type option[value="${type}"]`).prop('selected', true); //changing selected option to the already selected on create
            }

            $('.input').on('submit', (e) => { //attaching event listener to upload button
                e.preventDefault();

                if(photo_title && photo_url) {//if it has photo data - we make a request body with photo data

                    //SUBMITING PHOTOS
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
                } else if (video_title && video_url && video_img_url) {//if it has video data - we make a request body with video data
                    //SUBMITING VIDEOS
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
                    requestData('appdata', 'videos', `/${id}`, 'PUT', reqBody).then((video) => {
                        console.log(video);
                        $('.input').css('display', 'none');
                        $('.input').off('submit');
                        $('.input').find('input[type=text], textarea').val('');
                        $('.submitData').val('Качи');
                        toastr.success(`Успешно промененo видео: ${video.video_title}. <br> НАТИСНИ F5`);
                        setTimeout(() => {
                            $('.submitData').removeAttr('disabled'); //enabling submit button
                        }, 1000)
                    });
                }
                return false;
            })
        });
    }, 2000)
};
export { adminControls }