let contactFormSubmit = () => {
    setTimeout(() => {
        $('#send_message').on('click', (e) => {
            let sender = $('#name').val();
            let email = $('#email').val();
            let message = $('#message').val();
        })
    }, 150);
};
export { contactFormSubmit }