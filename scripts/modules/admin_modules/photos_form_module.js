import { requestData } from "../requester";

let attachPhotosFormEvents = () => {
    setTimeout(() => {
        $('#show_photo_form').click(() => {
            $('#submit_photo').css('display', 'flex'); //showing form

            $('#close_photo_form').click(() => { //attaching event listener for close button on form action = hide form
                $('#submit_photo').css('display', 'none')
            });

            $('#submit_photo').on('submit', (e) => { //attaching event listener to upload button
                e.preventDefault();
                $('.submitData').attr('disabled', 'true'); //disabling button so there are no multiple requests
                let url = $('#photo_url').val();
                let title = $('#photo_title').val();
                let type = $('#photo_type option:selected').val();
                let reqBody = JSON.stringify({
                    url,
                    title,
                    type
                });
                requestData('appdata', 'photos', '', 'POST', reqBody).then((photo) => {
                    toastr.success(`Успешно качена  снимка: ${photo.title}`);
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