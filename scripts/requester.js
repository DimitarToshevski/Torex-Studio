let requester = (() => {
    const basicUrl = 'https://baas.kinvey.com/appdata/kid_ByC4Pz0wz/';
    function get(url, query) {
        return $.ajax
        ({
            type: 'GET',
            url: basicUrl + url + query,
            headers: {
                "Authorization" : "Basic dXNlcjp1c2Vy"
            },
            success: (data) => {}

        })
    }

    return {
        get
    }
})();