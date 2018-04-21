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
            //VALIDATION
            if(senderName.match(/(\s\s+)+/g) || senderName === '' || senderName === ' ') {
                toastr.error('Моля въведи валидно име.');
                setTimeout(() => {
                    $('#send_message').removeAttr('disabled'); //enabling submit button
                }, 1000);
                return;
            }

            if(contactEmail.match(/(\s\s+)+/g) || contactEmail === '' || contactEmail === ' ' || !contactEmail.match(/[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/g)) {
                toastr.error('Моля въведи валиден имейл адрес.');
                setTimeout(() => {
                    $('#send_message').removeAttr('disabled'); //enabling submit button
                }, 1000);
                return;
            }

            if(message.match(/(\s\s+)+/g) || message === '' || message === ' ') {
                toastr.error('Моля въведи валидно съобщение.');
                setTimeout(() => {
                    $('#send_message').removeAttr('disabled'); //enabling submit button
                }, 1000);
                return;
            }

            let reqBody = JSON.stringify({
                senderName,
                contactEmail,
                message,
                date,
                exactTime
            });
            requestData('appdata', 'messages', '', 'POST', reqBody).then((message) => {
                $('#message_form').find('input[type=text], input[type=email], textarea').val('');
                toastr.success(`Благодарим Ви за съобщението, ${message.senderName}!`);
                setTimeout(() => {
                    $('#send_message').removeAttr('disabled'); //enabling submit button
                }, 1000)
            });
            return false;

        })
    }, 500);
};
export { contactFormSubmit }