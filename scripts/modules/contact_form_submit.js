let contactFormSubmit = () => {
    setTimeout(() => {
        $('#send_message').on('click', (e) => {
            alert('asdsa');
            let sender = $('#name').val();
            let email = $('#email').val();
            let message = $('#message').val();
        })
    }, 150);
};
export { contactFormSubmit }