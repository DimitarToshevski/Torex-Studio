import { requestData } from "../requester";

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
            $('#submit_photo').css('display', 'flex'); //showing form

            $('#close_photo_form').click(() => { //attaching event listener for close button on form action = hide form
                $('#submit_photo').css('display', 'none');
                $('#submit_photo').off('submit');
            });

            let id = $(event.target).closest('span').attr('data-id');
            let element = $(`#${id}`);

            let photo_title = element.attr('data-sub-html').match(/[^<h4>].*[^<\/h4>]/g);
            let photo_url = element.attr('data-url');
            let type = element.attr('data-type');

            
            $('#submit_photo').on('submit', (e) => { //attaching event listener to upload button
                e.preventDefault();
                return false;
            })
        });
    }, 2000)
};
export { adminControls }