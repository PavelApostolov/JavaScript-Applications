(function () {
    var geolocationPromise = new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                resolve(pos);
            },
            (error) => {
                reject(error);
            }
        );
    });

    function parsePosition(position) {
        return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };
    }

    // displayMap's argument "position" is the return from the function parsePosition
    function displayMap(position) {
        let map = document.getElementById('map'),
            imgSrc = `http://maps.googleapis.com/maps/api/staticmap?center=${position.latitude},${position.longitude}&zoom=15&size=500x500&sensor=false`;

        map.setAttribute('src', imgSrc);
    }

    function notFound(error) {
        map.innerText = error.message;
    }

    geolocationPromise
        .then(parsePosition)
        .then(displayMap)
        .catch(notFound);
} ());

