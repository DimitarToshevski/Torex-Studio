import { requestData } from "../requester";

let regexVideoUrl = /\/\/www.youtube.com\/embed\/\w*/g;
let attachVideosFormEvents = (ctx) => {
    setTimeout(() => {
        $('#submit_video').on('submit', (e) => {
            e.preventDefault();
            let video_url = $('#video_url').val().match(regexVideoUrl)[0];
            let video_title = $('#video_title').val();
            let img_url = $('#video_img').val();
            let type = $('#video_type option:selected').val();
            let reqBody = JSON.stringify({
                video_url,
                video_title,
                img_url,
                type
            });
            requestData('appdata', 'videos', '', 'POST', reqBody).then((videos) => {
                toastr.success(`Успешно качен клип: ${videos.video_title}`);
                ctx.render('./templates/video_page/single_video_partial.hbs')
                    .then(ctx.replace('#gallery'));
            });
            return false;
        })
    }, 3000)
};
export { attachVideosFormEvents }