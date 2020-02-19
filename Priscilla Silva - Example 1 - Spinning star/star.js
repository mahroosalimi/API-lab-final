var elem = document.getElementById('draw-shapes');
var params = { fullscreen: true };
var two = new Two(params).appendTo(elem);


var Star = two.makeStar(300, 200, 250, 150, 15);
Star.fill = '#f5389f';
Star.noStroke();

two.update();

two.bind("update", function(frameCount) {
    Star.rotation += 0.15 * Math.PI;
    
  })
  .play();


