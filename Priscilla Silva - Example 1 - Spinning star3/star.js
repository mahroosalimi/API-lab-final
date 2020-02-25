var elem = document.getElementById('draw-shapes');
var params = { fullscreen: true };
var two = new Two(params).appendTo(elem);


var Star = two.makeStar(300, 200, 250, 150, 15);
Star.fill = '#f5389f';
Star.noStroke();

var green = two.makeStar(500, 300, 250, 150, 15);
green.fill = 'green';
green.noStroke();

two.update();

two.bind("update", function(frameCount) {
    Star.rotation += 0.5 * Math.PI/2;
    green.rotation += 0.7 * Math.PI;
    
  })
  .play();


