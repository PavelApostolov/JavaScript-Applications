(function () {
    var locationElement = document.getElementById("location");

    function renderLocation(position) {

        if (!position) {
            console.log('navigator.position returned invalid position object');
        } else {
            var locationImageGoogle = document.createElement("img");
            var GmapsApiCall = "http://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=500x500&sensor=false";
            locationImageGoogle.setAttribute("src", GmapsApiCall);
            locationElement.appendChild(locationImageGoogle);
        }
    }

    function logGeolocationFailure() {
        console.log('User denied access to geolocation data.');
    }

    if (!navigator.geolocation) {
        locationElement.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    } else {
        navigator.geolocation.getCurrentPosition(renderLocation, logGeolocationFailure);
    }

} ());