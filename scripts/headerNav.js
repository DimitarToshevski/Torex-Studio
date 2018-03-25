import { role } from "./router";

let adaptNav = function (ctx) {
    setTimeout(() => {
        let shown = false;
        $('#btn_menu').on('click', () => {
            if (!shown) {
                $('.header_nav').css('display', 'block');
                shown = true;
            } else {
                $('.header_nav').css('display', 'none');
                shown = false;
            }
        });
        if(localStorage.getItem('role') === role) {
            setTimeout(()=> {
                $('#greeting, #logout').show()
            },100);
        } else { $('#greeting, #logout').hide(); }
    }, 100);
};
export { adaptNav }