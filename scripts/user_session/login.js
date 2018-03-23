const authorization = 'Basic ' + btoa('kid_ByC4Pz0wz:' + 'c47c381ad9234508be7cb15d8d42c2aa');
const url = 'https://baas.kinvey.com/user/kid_ByC4Pz0wz/login';
const secretAnswer = 'numler';

function setStorage(data) {
    localStorage.setItem('authtoken', data._kmd.authtoken);
    localStorage.setItem('username', data.username);
    localStorage.setItem('id', data._id);
}

let login = function (ctx) {

    setTimeout(() => {
        $('#admin_form').on('submit', (e) => {
            e.preventDefault();
            let username = $('#username').val();
            let password = $('#password').val();
            let secretAnswer = $('#secret').val();
            let req = {
                url: url,
                method: 'POST',
                headers: {
                    'Authorization': authorization,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    username: username,
                    password: password,
                    secretAnswer: secretAnswer
                }),
                success: (data) => {
                    if(data.secretAnswer != secretAnswer) {
                        throw new Error("Въведи правилен никнейм");
                        return;
                    }
                    ctx.redirect('#');
                    setStorage(data);
                },
                error: (err) => {
                    console.log(err.responseJSON.description);
                }
            };
            $.ajax(req);
            return false;
        })
    }, 100)
};
export {login};
