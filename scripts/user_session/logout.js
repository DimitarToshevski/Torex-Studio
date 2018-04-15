const url = 'https://baas.kinvey.com/user/kid_ByC4Pz0wz';

let logout = function (ctx) {
    setTimeout(() => {
        $('#logout').on('click', () => {
            let req = {
                url: url + '/_logout',
                method: 'POST',
                headers: {
                    'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
                },
                success: logoutSuccess(),
                error: (err) => {
                    toastr.error(err);
                    return;
                }
            };
            $.ajax(req);
        });

        function logoutSuccess(data) {
            let name = localStorage.getItem('name');
            toastr.success(`До скоро, ${name}`);
            localStorage.clear();
            $('#greeting, #logout').hide();
            ctx.redirect('#/');
        }
    }, 100)
};
export { logout }