import { requestData } from "../requester";

let attachVideosFormEvents = () => {
    setTimeout(() => {
        $('#submit_video').on('submit', (e) => {
            e.preventDefault();
            let video_url = $('#video_url').val();
            let video_title = $('#video_title').val();
            let img_url = $('#video_img').val();
            let collection = $('#video_collection:selected');
            let reqBody = JSON.stringify({
                video_url,
                video_title,
                img_url,
                "type": collection
            });
            requestData('appdata', 'videos', '', 'POST', reqBody).then((videos) => {
                console.log(videos);
            });
            return false;
        })
    }, 3000)
};
export { attachVideosFormEvents }