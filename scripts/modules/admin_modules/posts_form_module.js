import {requestData} from "../requester";

let attachPostsFormEvents = () => {
    setTimeout(() => {
        $('#show_post_form').click(() => {

            $('#submit_post').css('display', 'flex'); //showing form

            $('#close_post_form').click(() => { //attaching event listener for close button on form action = hide form
                $('#submit_post').css('display', 'none')
            });

            $('#submit_post').on('submit', (e) => {
                e.preventDefault();
                $('.submitData').attr('disabled', 'true'); //disabling button so there are no multiple requests
                let title = $('#post_title').val();
                let subtitle = $('#post_subtitle').val();
                let postImg = $('#post_img').val();
                let postVideo = $('#post_video').val();
                let postBody = $('#post_body').val();
                let postBody2 = $('#post_body2').val();
                let reqBody = JSON.stringify({
                    "id": "18",
                    title,
                    subtitle,
                    "img_src": postImg,
                    "video_url": postVideo,
                    "body": postBody,
                    "body2": postBody2
                });
                requestData('appdata', 'posts', '', 'POST', reqBody).then((post) => {
                    toastr.success(`Успешно качен пост: ${post.title} <br> ${post.subtitle}`);
                    setTimeout(() => {
                        $('.submitData').removeAttr('disabled'); //enabling submit button
                    }, 2000)
                });
                return false;
            })
        })
    }, 100);
};
export { attachPostsFormEvents }