//276 index34
//AIzaSyD4-ZczmKYyxHolQNza7571RCkvVxsmnUU
window.onload = init;
var m = document.getElementById('map');
function init(){
    // console.dir(navigator);
    navigator.geolocation.getCurrentPosition(placeMap);
}
function placeMap(data) {
    var options = {
        center: {
            lat: data.coords.latitude
            , lng: data.coords.longitude
        }
        , zoom: 5
    }
    var map = new google.maps.Map(m, options);
    console.dir(data);
}