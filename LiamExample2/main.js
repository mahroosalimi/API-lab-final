var two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

var star = two.makeStar(300, 350, 65, 100);
var rect = two.makeRectangle(450, 350, 100, 100);
var poly = two.makePolygon(295, 200, 60, 8);
var ellip = two.makeEllipse(450, 200, 70, 40);

star.fill = "orange";
star.stroke = "orangered";
rect.fill = "blue";
poly.stroke = "turquoise";
ellip.fill = "lightgreen";
ellip.stroke = "green";

rect.noStroke();

var group = two.makeGroup(star, rect, poly, ellip);
group.translation.set(1150, 200);
group.linewidth = 10;


  two.bind("update", function(frameCount) {
    if (group.scale > 0.9999) {
      group.scale = group.rotation = 0;
    }
    var t = (1 - group.scale) * 0.075;
    group.scale += t;
    group.rotation += t * 0.75 * Math.PI;
    
    ellip.rotation += 0.05;
    star.rotation += 0.05;
    rect.rotation += 0.05;
    poly.rotation += 0.05;
  })
  .play();
