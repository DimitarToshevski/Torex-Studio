import {months} from "./posts_form_module";

let sortableMode = () => {
    let savedElements = [];

    //on submit changes send array with sorted elements to server
    function saveChanges(elements) {
        for(let element of elements) {
            let id = $(element).prop('id');
            let video_url = $(element).prop('href');
            let video_title = $(element).attr("data-sub-html").match(/[^<h4>].*[^<\/h4>]/g)[0];
            let img_url = $(element).attr('data-poster');
            let type = $(element).attr('data-type');
            let newDate = new Date();
            let video_date = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
            let exactTime = `${newDate.getHours()} ${newDate.getMinutes()} ${newDate.getSeconds()}`;
            let reqBody = JSON.stringify({
                video_url,
                video_title,
                img_url,
                type,
                "date": video_date,
                "exact_time": exactTime,
                "long_date": newDate
            });
            console.log(video_url);
            console.log(video_title);
            console.log(img_url);
            console.log(type);
        }
        toastr.success(`Промените са записани успешно!<br> Натисни F5!`);
    }

    function arrangeElements(event, element) {
        // if the element has been already dragged, get the date of the new prev el
        // set it to the dragged element
        // splice the new element with the new date with the old one
        if(savedElements.indexOf(element.item[0]) !== -1) {

            let prevDate = $(element.item[0]).prev().attr('data-long-date');
            let nextDate = $(element.item[0]).next().attr('data-long-date');
            let matches = /(\d*)\./g.exec(prevDate);
            let changedSeconds = (parseInt(matches[1]) - 1) + '.';
            let newDate = prevDate.replace(/(\d*)\./g, changedSeconds );
            $(element.item[0]).attr('data-long-date', newDate);

            savedElements.splice(savedElements.indexOf(element.item[0]) , 1, element.item[0]);
        } else {
        //else if it has NOT been dragged before get the date of prev el and set it to the dragged and push
            let prevDate = $(element.item[0]).prev().attr('data-long-date');
            let nextDate = $(element.item[0]).next().attr('data-long-date');
            let matches = /(\d*)\./g.exec(prevDate);
            let changedSeconds = (parseInt(matches[1]) - 1) + '.';
            let newDate = prevDate.replace(/(\d*)\./g, changedSeconds );
            $(element.item[0]).attr('data-long-date', newDate);
            if(newDate === nextDate) {
                let matchesNext = /(\d*)\./g.exec(nextDate);
                let changedSecondsNext = (parseInt(matchesNext[1]) - 1) + '.';
                let newDateNext = nextDate.replace(/(\d*)\./g, changedSecondsNext );
                $(element.item[0]).next().attr('data-long-date', newDateNext);
                savedElements.push(element.item[0].next())
            }
            savedElements.push(element.item[0])
        }
    }

    //on enter edit mode attach sortable function to drag and push dragged elements to the array
    function attachSortable() {
        $('#gallery').sortable({
            placeholder: 'sortable_placeholder',
            update: (event, ui) => {
                arrangeElements(event, ui);
            }
        });
        $( "#gallery" ).sortable( "option", "disabled", false );
        $('#gallery').disableSelection();
    }

    function detachSortable() {
        $( "#gallery" ).sortable("disable");
        return false;
    }

    //attach listeners to buttons edit mode and cancel edit mode
    function editMode() {
        $('#edit_mode').click(() => {

            //Entering edit mode
            attachSortable();

            $('#cancel_mode').show();
            $('.gallery_wrapper').css('background', 'linear-gradient(to bottom, rgba(181,250,0,0.35) 0%,rgba(0,0,0,0) 100%)')

            //if the value is Запиши промените get updated elements and send to server
            if ($('#edit_mode').val() === 'Запиши промените') {
                saveChanges(savedElements);
                detachSortable();
                $('#edit_mode').val('Режим sortable');
                $('#cancel_mode').hide();
                $('.gallery_wrapper')
                    .css('background', 'linear-gradient(180deg,rgba(0,0,0,.5) 31%,rgba(173,61,32,.5))');
                return
            }

            //else change value to Запиши промените
            $('#edit_mode').val('Запиши промените');

            //Attach cancel button action to empty the array with dragged elements and close edit mode
            $('#cancel_mode').click(() => {
                savedElements = [];
                detachSortable();
                $('#edit_mode').val('Режим sortable');
                $('#cancel_mode').hide();
                $('.gallery_wrapper')
                    .css('background', 'linear-gradient(180deg,rgba(0,0,0,.5) 31%,rgba(173,61,32,.5))');
                toastr.info(`Не са направени промени. <br> Натисни F5!`)
            });
        })
    }

    setTimeout(() => {
        editMode();
    }, 100)
};
export {sortableMode}