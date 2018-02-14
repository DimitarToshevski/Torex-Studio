function googleMaps() {
    setTimeout(()=> {
        let map = $('#contact_google_map');
        map.googleMap();
        map.addMarker({
            coords: [48.895651, 2.290569], // GPS coords
            url: 'http://www.tiloweb.com', // Link to redirect onclick (optional)
            id: 'marker1', // Unique ID for your marker
            title: 'Studio Torex' // Title
        });
    }, 200)
}
