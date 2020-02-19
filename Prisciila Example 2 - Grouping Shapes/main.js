var elem = document.getElementById('draw-shapes'); //Add the id of your div inside the quotes//
var params = { fullscreen: true }; //To set whole browser window as the canvas; otherwise, specify dimensions//
var two = new Two(params).appendTo(elem); //An instance of Two, which is necessary to append the TwoJS to the DOM//

var poly = two.makePolygon(150, 100, 80, 6);
var rou = two.makeRoundedRectangle(400, 100, 200, 120, 6);
var tri = two.makePolygon(150, 300, 100, 3);
var squ = two.makeRectangle(400, 270, 150, 150);

poly.fill = 'gray';
rou.fill = 'pink',
tri.fill = 'orange';
squ.fill = 'green';


group = two.makeGroup(poly, rou, tri, squ);

group.linewidth = 4;
group.stroke = 'black';
group.opacity = 0.5;
two.update();





