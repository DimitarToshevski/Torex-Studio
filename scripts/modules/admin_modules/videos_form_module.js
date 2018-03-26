import {requestData} from "../requester";

let attachVideosFormEvents = () => {
    setTimeout(() => {
        $('#submit_video').on('submit', (e) => {
            e.preventDefault();
            let title = $('#video_title').val();
            let reqBody = JSON.stringify({
            });
            requestData('appdata', 'posts', '', 'POST', reqBody).then((data) => {
                console.log(data);
            });
            return false;
        })
    }, 3000)
};
export { attachVideosFormEvents }