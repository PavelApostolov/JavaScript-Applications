(function () {
    function success(pos) {
        console.log(pos);
        return pos;
    }

    function getCurrentPossition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(pos => {
                resolve(pos);
            });
        });
    }

    function getCoordinates(data) {
        return {
            lat: data.coords.latitude,
            long: data.coords.longitude
        };
    }

    function showMap(coords) {
        var img = document.getElementById("map-location"),
            src = `http://maps.googleapis.com/maps/api/staticmap?center=${coords.lat},${coords.long}&zoom=13&size=500x500&sensor=false`;
        
        img.setAttribute('src', src);
    }

    getCurrentPossition()
            .then(getCoordinates)
            .then(showMap);
} ());