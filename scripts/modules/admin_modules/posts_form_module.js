import {requestData} from "../requester";

let attachPostsFormEvents = () => {
    setTimeout(() => {
        $('#submit_post').on('submit', (e) => {
            e.preventDefault();
            let title = $('#title').val();
            let subtitle = $('#subtitle').val();
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
            requestData('appdata', 'posts', '', 'POST', reqBody).then((data) => {
                console.log(data);
            });
            return false;
        })
    }, 3000)
};
export { attachPostsFormEvents }