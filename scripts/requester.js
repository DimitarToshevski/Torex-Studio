let requester = (() => {
    function get(url) {
        return $.get(`https://torex-studio.firebaseio.com/${url}.json`)
    }

    return {
        get
    }
})();