let lightGallery = function () {
    setTimeout(()=>{
        $('#gallery').lightGallery({
            subHtmlSelectorRelative: true,
            download: false
        });
    },50);
};
export { lightGallery }
