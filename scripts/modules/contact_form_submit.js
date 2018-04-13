import {months} from "./admin_modules/posts_form_module";
import {requestData} from "./requester";

let contactFormSubmit = () => {
    setTimeout(() => {
        $('#send_message').on('click', () => {
            $('#send_message').attr('disabled', 'true'); //disabling button so there are no multiple requests
            let senderName = $('#name').val();
            let contactEmail = $('#email').val();
            let message = $('#message').val();
            let newDate = new Date();
            let date = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
            let exactTime = `${newDate.getHours()} ${newDate.getMinutes()} ${newDate.getSeconds()}`;
            let reqBody = JSON.stringify({
                senderName,
                contactEmail,
                message,
                date,
                exactTime
            });
            requestData('appdata', 'messages', '', 'POST', reqBody).then((message) => {
                $('#message_form').find('input[type=text], textarea').val('');
                toastr.success(`Благодарим Ви за съобщението, ${message.senderName}!`);
                setTimeout(() => {
                    $('#send_message').removeAttr('disabled'); //enabling submit button
                }, 1000)
            });
            return false;

        })
    }, 150);
};
export { contactFormSubmit }