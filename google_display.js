
var buttonText = '{ "Coffee": "", "Restaurants":"", "Groceries":"", "Hotels":"", "Clothing Stores":""}'

const buttons = JSON.parse(buttonText);

function initializeMap(){
    map = new google.maps.Maps(document.getElementById('map'), {center: {lat: 30.601433, lng: -96.314464}, zoom: 8, mapID: 'map_id'});
}
function getQuery(){
    return;
}

function mapDisplay(){
    return;
}

function makeButtons(buttons){
    return;
}