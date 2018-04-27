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
    }, 500);
};
export { adaptNav }