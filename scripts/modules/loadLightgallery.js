let lightGallery = function () {
    setTimeout(()=>{
        $('#gallery').lightGallery({
            subHtmlSelectorRelative: true,
            download: false
        });
    },50);
    setTimeout(() => {
        $('.delete').click((e) => {
            e.preventDefault();
            alert('clicked')
        });
    }, 2000)
};
export { lightGallery }
