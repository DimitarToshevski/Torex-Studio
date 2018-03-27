import {requestData} from "../requester";

let attachVideosFormEvents = () => {
    setTimeout(() => {
        $('#submit_video').on('submit', (e) => {
            e.preventDefault();
            let video_url = $('#video_url').val();
            let video_title = $('#video_title').val();
            let img_url = $('#video_img').val();
            let reqBody = JSON.stringify({
                video_url,
                video_title,
                img_url
            });
            requestData('appdata', 'videos', '', 'POST', reqBody).then((data) => {
                console.log(data);
            });
            return false;
        })
    }, 3000)
};
export { attachVideosFormEvents }