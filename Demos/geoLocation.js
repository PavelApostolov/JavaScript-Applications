(function(){
    navigator.geolocation.getCurrentPosition(function success(pos){
        //console.log(pos);

        var src = "http://maps.googleapis.com/maps/api/staticmap?center=" 
        + pos.coords.latitude + "," + pos.coords.longitude +
        "&zoom=13&size=500x500&sensor=false",
        map = document.getElementById('map');
        map.setAttribute('src', src);
    }, function error(data){

    });
}());

    (function(){
    var myPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            resolve(pos);
        })
    });

    function parsePosition(pos){
        return {
            lat: pos.coords.latitude,
            long: pos.coords.longitude
        };
    }

    function displayMap(pos){
        var map = document.getElementById('map');
         src = "http://maps.googleapis.com/maps/api/staticmap?center=" 
        + pos.coords.latitude + "," + pos.coords.longitude +
        "&zoom=13&size=500x500&sensor=false",      
        map.setAttribute('src', src);

        return map;
    }

    function wait(time, map){
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                resolve(map); 
            }, time);
        });
    }

    function fadeout(mapEl){
        setInterval(() => {
            var opa = mapEl.style['opacity'] || 1;
            mapEl.style['opacity'] = opa - 0.1;
        }, 100);
    }
    
    myPromise
    .then(parsePosition)
    .then(displayMap)
    .then((map) => wait(3000, map))
    .then(fadeout)
    .catch((err) => { });
}());
