

var elem = document.getElementById('logo');
var params = { fullscreen: true };
var two = new Two(params).appendTo(elem);

var cross = two.makeRectangle(200, 200, 200, 50);
cross.fill = "#ffcdd2";
cross.opacity = 0.5;
cross.stroke = "#b71c1c";

var crossa = two.makeRectangle(200, 200, 50, 200);
crossa.fill = "#ffcdd2";
crossa.opacity = 0.5;
crossa.stroke = "#b71c1c";

var dubbel = two.makePath(400,300,300,100, 500, 100,  closed);
dubbel.fill = "orange";
dubbel.opacity = 0.5;
dubbel.stroke = "orangered";

var ve = two.makePath(500,300,400,100, 600, 100,  closed);
ve.fill = "orange";
ve.opacity = 0.5;
ve.stroke = "orangered";

var ou = two.makeCircle(700, 200, 100);
ou.fill = "#bd82ff";
ou.opacity = 0.5;
ou.stroke = "#5525a8";

var oucenter = two.makeCircle(700, 200, 30);
oucenter.fill = "#bd82ff";
oucenter.opacity = 0.5;
oucenter.stroke = "#5525a8";

var group = two.makeGroup(cross, crossa, dubbel, ve, ou, oucenter)
group.linewidth = 3;
group.scale = 1.70;

two.update();