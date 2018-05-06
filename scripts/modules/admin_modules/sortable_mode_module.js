import {months} from "./posts_form_module";
import {requestData} from "../requester";

let sortableMode = (type) => {
    let savedElements = [];

    //on submit changes send array with sorted elements to server
    function saveChanges(elements, type) {
        if(type === 'videos') {
            for(let element of elements) {
                let id = $(element).prop('id');
                let video_url = $(element).prop('href');
                let video_title = $(element).attr("data-sub-html").match(/[^<h4>].*[^<\/h4>]/g)[0];
                let img_url = $(element).attr('data-poster');
                let type = $(element).attr('data-type');
                let newDate = new Date();
                let longDate = $(element).attr('data-long-date');
                let video_date = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
                let exactTime = `${newDate.getHours()} ${newDate.getMinutes()} ${newDate.getSeconds()}`;
                let reqBody = JSON.stringify({
                    video_url,
                    video_title,
                    img_url,
                    type,
                    "date": video_date,
                    "exact_time": exactTime,
                    "long_date": longDate
                });
                requestData('appdata', 'videos', `/${id}`, 'PUT', reqBody).then(() => {
                    savedElements = [];
                    toastr.success(`Промените са записани успешно!<br> Натисни F5!`);
                })
            }
        } else if(type === 'photos') {
            console.log('photos');
            for(let element of elements) {
                let id = $(element).prop('id');
                let url = element.attr('data-url');
                let title= element.attr('data-sub-html');
                let type = $(element).attr('data-type');
                let newDate = new Date();
                let longDate = $(element).attr('data-long-date');
                let photoDate = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
                let exactTime = `${newDate.getHours()} ${newDate.getMinutes()} ${newDate.getSeconds()}`;
                let reqBody = JSON.stringify({
                    url,
                    title,
                    type,
                    "date": photoDate,
                    "exact_time": exactTime,
                    "long_date": longDate
                });
                requestData('appdata', 'photos', `/${id}`, 'PUT', reqBody).then(() => {
                    savedElements = [];
                    toastr.success(`Промените са записани успешно!<br> Натисни F5!`);
                })
            }
        }

    }

    function arrangeElements(event, element) {
        // if the element has been already dragged, get the date of the new prev el
        // set it to the dragged element
        // splice the new element with the new date with the old one
        if(savedElements.indexOf($(element.item[0])[0]) !== -1) {
            let prevDate = $(element.item[0]).prev().attr('data-long-date');
            let nextDate = $(element.item[0]).next().attr('data-long-date');
            //if we put the element on first position and there is no previous to take it's date
            //take the next element date and add 1
            if(!prevDate) {
                let matchesNext = /(\d*)\./g.exec(nextDate);
                let changedSecondsNext = (parseInt(matchesNext[1]) + 1) + '.';
                let newDateCurrent = nextDate.replace(/(\d*)\./g, changedSecondsNext );
                $(element.item[0]).attr('data-long-date', newDateCurrent);
                return
            }
            let matches = /(\d*)\./g.exec(prevDate);
            let changedSeconds = (parseInt(matches[1]) - 1) + '.';
            let newDate = prevDate.replace(/(\d*)\./g, changedSeconds );
            $(element.item[0]).attr('data-long-date', newDate);
            savedElements.splice(savedElements.indexOf($(element.item[0])[0]) , 1, $(element.item[0])[0]);

            //if the current element after it has been dragged has the same date as the next element
            //get and set the next element date to be less than the current and save it to the array
            if(newDate === nextDate) {
                let matchesNext = /(\d*)\./g.exec(nextDate);
                let changedSecondsNext = (parseInt(matchesNext[1]) - 1) + '.';
                let newDateNext = nextDate.replace(/(\d*)\./g, changedSecondsNext );
                $(element.item[0]).next().attr('data-long-date', newDateNext);
                //if we already have the next item in the array with moved elements
                //splice it without changing it
                if(savedElements.indexOf($(element.item[0]).next()[0]) !== -1) {
                    savedElements
                        .splice(savedElements.indexOf($(element.item[0]).next()[0]), 1, $(element.item[0]).next()[0]);
                } else {
                    savedElements.push($(element.item[0]).next()[0]);
                }
            }
        } else {
        //else if it has NOT been dragged before get the date of prev el and set it to the dragged and push
            let prevDate = $(element.item[0]).prev().attr('data-long-date');
            let nextDate = $(element.item[0]).next().attr('data-long-date');
            //if we put the element on first position and there is no previous to take it's date
            //take the next element date and add 1
            if(!prevDate) {
                let matchesNext = /(\d*)\./g.exec(nextDate);
                let changedSecondsNext = (parseInt(matchesNext[1]) + 1) + '.';
                let newDateCurrent = nextDate.replace(/(\d*)\./g, changedSecondsNext );
                $(element.item[0]).attr('data-long-date', newDateCurrent);
                return
            }
            let matches = /(\d*)\./g.exec(prevDate);
            let changedSeconds = (parseInt(matches[1]) - 1) + '.';
            let newDate = prevDate.replace(/(\d*)\./g, changedSeconds );
            $(element.item[0]).attr('data-long-date', newDate);
            //if the current element after it has been dragged has the same date as the next element
            //get and set the next element date to be less than the current and save it to the array
            if(newDate === nextDate) {
                let matchesNext = /(\d*)\./g.exec(nextDate);
                let changedSecondsNext = (parseInt(matchesNext[1]) - 1) + '.';
                let newDateNext = nextDate.replace(/(\d*)\./g, changedSecondsNext );
                $(element.item[0]).next().attr('data-long-date', newDateNext);

                //if we already have the next item in the array with moved elements
                //splice it without changing it
                if(savedElements.indexOf($(element.item[0]).next()[0]) !== -1) {
                    savedElements
                        .splice(savedElements.indexOf($(element.item[0]).next()[0]),1,$(element.item[0]).next()[0]);
                } else {
                    savedElements.push($(element.item[0]).next()[0]);
                }
            }
            savedElements.push($(element.item[0])[0]);
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
                saveChanges(savedElements, type);
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

        editMode();
};
export {sortableMode}