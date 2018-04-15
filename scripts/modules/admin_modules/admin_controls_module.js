import { requestData } from "../requester";
import { editPhoto } from "./edit_modules/edit_photos";
import { editVideo } from "./edit_modules/edit_videos";
import { editPost } from "./edit_modules/edit_posts";

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
            let photo_title= element.attr('data-sub-html');
            let photo_url = element.attr('data-url');
            let type = element.attr('data-type');
            if(photo_title && photo_url) {
                $('#photo_url').val(photo_url);
                $('#photo_title').val(photo_title.match(/[^<h4>].*[^<\/h4>]/g));
                $(`#photo_type option[value="${type}"]`).prop('selected', true); //changing selected option to the already selected on create
            }

            //VIDEOS
            let video_title = element.attr('data-sub-html');
            let video_id = element.prop('href').slice(29);
            let video_url = `https://www.youtube.com/watch?v=${video_id}`;
            let video_img_url = element.attr('data-poster');
            let video_type = element.attr('data-type');
            if(video_title && video_url && video_img_url) {
                $('#video_title').val(video_title.match(/[^<h4>].*[^<\/h4>]/g));
                $('#video_url').val(video_url);
                $(`#video_type option[value="${type}"]`).prop('selected', true); //changing selected option to the already selected on create
            }

            //POSTS
            let post_title = element.attr('data-title');
            let post_subtitle = element.prop('title');
            let post_img = element.attr('data-img-url');
            let post_video = element.attr('data-video-url');
            let post_body = element.attr('data-body');
            let post_body2 = element.attr('data-body2');
            if (post_title && post_body) {
                $('#post_title').val(post_title);
                $('#post_subtitle').val(post_subtitle);
                if(post_img) {
                    $('#post_img').val(post_img);
                }
                if(post_video) {
                    $('#post_video').val(post_video);
                }
                if(post_body2) {
                    $('#post_body2').val(post_body2);
                }
                $('#post_body').val(post_body);
            }

            $('.input').on('submit', (e) => { //attaching event listener to upload button
                e.preventDefault();

                if(photo_title && photo_url) {//if it has photo data - we make a request body with photo data

                    //SUBMITING PHOTOS
                    editPhoto(id);

                } else if (video_title && video_url && video_img_url) {//if it has video data - we make a request body with video data

                    //SUBMITING VIDEOS
                    editVideo(id);
                } else if (post_title && post_body) {
                    editPost(id);
                }
                return false;
            })
        });
    }, 2000)
};
export { adminControls }