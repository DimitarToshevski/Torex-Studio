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
            ctx.role = localStorage.getItem('name');
            ctx.render('./templates/common/header/header_menu.hbs')
                .replace('#greeting');
            setTimeout(()=> {
                $('#greeting').show()
            },100);
        } else { $('#greeting').hide(); }
    }, 100)
};
export { adaptNav }