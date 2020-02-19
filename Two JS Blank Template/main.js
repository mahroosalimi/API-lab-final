var elem = document.getElementById(' '); //Add the id of your div inside the quotes//
var params = { fullscreen: true }; //To set whole browser window as the canvas; otherwise, specify dimensions//
var two = new Two(params).appendTo(elem); //An instance of Two, which is necessary to append the TwoJS to the DOM//

two.makePolygon(250, 150, 100, 5)


two.update();





