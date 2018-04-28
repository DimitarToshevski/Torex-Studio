let sortableMode = () => {
    function attachSortable() {
        $('#gallery').sortable();
        $('#gallery').disableSelection();
    }

    function editMode() {
        $('#edit_mode').click(() => {

            attachSortable();

            $('#edit_mode').val('Запиши промените');
            $('#cancel_mode').show();
            $('.gallery_wrapper').css('background', 'linear-gradient(to bottom, rgba(181,250,0,0.35) 0%,rgba(0,0,0,0) 100%)')

            $('#edit_mode').click(() => {
                $('#edit_mode').val('Режим sortable');
                $('#cancel_mode').hide();
                $('.gallery_wrapper').css('background', 'linear-gradient(180deg,rgba(0,0,0,.5) 31%,rgba(173,61,32,.5))')
                editMode();
            });

            $('#cancel_mode').click(() => {
                $('#edit_mode').val('Режим sortable');
                $('#cancel_mode').hide();
                $('.gallery_wrapper').css('background', 'linear-gradient(180deg,rgba(0,0,0,.5) 31%,rgba(173,61,32,.5))')
                editMode();
                toastr.info(`Не са направени промени. <br> Натисни F5!`)
            });
        })
    }

    setTimeout(() => {
        editMode();
    }, 100)
};
export {sortableMode}