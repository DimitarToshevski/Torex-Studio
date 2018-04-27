import { requestData } from "../modules/requester";
import { role } from "../router";

const authorization = 'Basic ' + btoa('kid_ByC4Pz0wz:' + 'c47c381ad9234508be7cb15d8d42c2aa');
const url = 'https://baas.kinvey.com/user/kid_ByC4Pz0wz/login';
const secretAnswer = 'numler';

let myMessages = [];

function setStorage(data) {
    localStorage.setItem('authtoken', data._kmd.authtoken);
    localStorage.setItem('username', data.username);
    localStorage.setItem('id', data._id);
    localStorage.setItem('role', data._kmd.roles[0].roleId);
    localStorage.setItem('name', data.name);
}

let login = function (ctx) {
    setTimeout(() => {      //Attaching event listener on form
        let loadingAdminPanel = $('#loadingAdminPanel');
        let loginSubmitButton = $('#loginSubmit');

        $(document).ajaxStart(() => {
            loadingAdminPanel.show();
            loginSubmitButton.prop('disabled', 'true');
        });

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
                    if (data.secretAnswer !== secretAnswer) { //Security question check because the
                        toastr.error('Въведи правилен никнейм');   // server is configured to check only username and password
                        return;
                    }
                    setStorage(data);
                    if(data._kmd.roles[0].roleId === role)
                    requestData('appdata', 'messages', '', 'GET').then((messages) => {
                        myMessages = messages;
                        localStorage.setItem('messages', messages.length)
                    }).then(() => {
                        loadingAdminPanel.hide();
                        loginSubmitButton.prop('disabled', '');
                        ctx.redirect('#/');
                        toastr.success(`Добре дошъл, ${data.name}`);
                    })
                },
                error: (err) => {
                    toastr.error(err.responseJSON.description);
                    return;
                }
            };
            $.ajax(req);
            return false;
        })

    }, 100)
};
export { login, myMessages };
