//make an instance of two and place it on the page 
var elem = document.getElementById('draw-shapes');
var params = { width: 285, height: 200 };
var two = new Two(params).appendTo(elem);

//two has convenience method to creat shapes 
var circle = two.makeCircle(72, 100, 50);
var rect = two.makeRectangle(213, 100, 100, 100);

//The object returned has many stylable properties
circle.fill = "blue";
circle.stroke = "orange";
circle.linewidth = 5;

rect.fill = "red";
rect.opacity = 0.75;
rect.noStroke();

two.update();
