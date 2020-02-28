var elem = document.getElementById('draw-shapes'); // link to the DOM
var params = { fullscreen: true }; //To set whole browser window as the canvas
var two = new Two(params).appendTo(elem); // link to the element contained in the DOM

// create different shapes with two.js  built-in methods
var poly = two.makePolygon(150, 100, 80, 6);
var rou = two.makeRoundedRectangle(400, 100, 200, 120, 6);
var tri = two.makePolygon(150, 300, 100, 3);
var squ = two.makeRectangle(400, 270, 150, 150);

// filling the shapes with different colour
poly.fill = 'gray';
rou.fill = 'pink',
tri.fill = 'orange';
squ.fill = 'green';

// make a group with the variables and style them 
group = two.makeGroup(poly, rou, tri, squ);
group.linewidth = 4;
group.stroke = 'black';
group.opacity = 0.5;
two.update();
