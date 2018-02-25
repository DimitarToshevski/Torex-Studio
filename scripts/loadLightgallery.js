function lightGallery() {
    setTimeout(()=>{
        $('#gallery').lightGallery({
            subHtmlSelectorRelative: true,
            download: false
        });
    },50);
}
