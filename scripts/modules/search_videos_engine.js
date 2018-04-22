let searchVideosEngine = () => {
setTimeout(()=>{
    let videos = $('#gallery a');
    $('#search_button').on('click', ()=> {
        let searchedVideo = $('#search_input').val();
        if(searchedVideo) { //Checking if there is search input
            if($(`#gallery a[data-sub-html]`).is(`:contains(${searchedVideo})`)) { //If result found
                videos.hide(); //hide all
                $(`#gallery a[data-sub-html]:contains(${searchedVideo})`).show(); //show result
                $('#search_input').on('keyup', ()=> { //attaching event listener on deleting search text show all
                    if($('#search_input').val().length === 0) {
                        videos.show();
                    }
                })
            } else {
                toastr.info(`Няма намерени клипове съдържащи: ${searchedVideo}`); //if no results found
                return false;
            }
        } else { // If no search input Warning is shown instead of showing results
            toastr.warning('Въведи заглавие на клип.')
        }
    })
}, 500)
};
export { searchVideosEngine }