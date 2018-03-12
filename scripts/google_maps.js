function googleMaps() {
    setTimeout(()=> {
        let map = new GMaps({
            div: '#google_map',
            lat: 42.69253730000001,
            lng: 23.32633169999997,
            zoom: 18
        });
        map.addMarker({
            lat: 42.69253730000001,
            lng: 23.32633169999997,
            title: 'Studio Torex',
            infoWindow: {
                content: '<p style="color: black">Studio Torex:<br>Open 24/7</p>'
            }
        })
    }, 200)
}
