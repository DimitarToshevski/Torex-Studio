let login = function () {
    setTimeout(() => {
        alert('submitted');
        $('#admin_form').on('submit', (e) => {
            e.preventDefault();

            return false;
        })
    }, 100)

};
export { login };
