//Position on canvas
var centerX = 740;
var centerY = 380;

var elem = document.getElementById("atoms");
//Different elements
var elementNames = [
  "",
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon"
];
//How the names are going to appear
var styles = {
  alignment: "center",
  size: 40,
  family: "Roboto"
};
//Controls the number of times the action can happen
var nucleusCount = 10;
var nucleusArray = Array();

var electronCount = 10;
var electronArray = Array();

function intRange(min, max) {
  return Math.random() * (max - min) + min;
}

var two = new Two({ fullscreen: true }).appendTo(elem);
//Properties of the protons
var protonColor = two.makeRadialGradient(
  0,
  0,
  15,
  new Two.Stop(0, "red", 1),
  new Two.Stop(1, "black", 1)
);
//Properties of the neutrons
var neutronColor = two.makeRadialGradient(
  0,
  0,
  15,
  new Two.Stop(0, "blue", 1),
  new Two.Stop(1, "black", 1)
);
//Controls the flow of the actions
for (i = 0; i < nucleusCount; i++) {
  nucleusArray.push(two.makeCircle(intRange(-10, 10), intRange(-10, 10), 8));
}

nucleusArray.forEach(function(nucleus, index) {
  if (index % 2 == 0) {
    nucleus.fill = protonColor;
  }
  if (index % 2 == 1) {
    nucleus.fill = neutronColor;
  }
  nucleus.noStroke();
});
//Positions of the rings
for (var i = 0; i < 10; i++) {
  if (i < 2) {
    var shellRadius = 40;
    var angle = i * Math.PI;
    electronArray.push(
      two.makeCircle(
        Math.cos(angle) * shellRadius,
        Math.sin(angle) * shellRadius,
        6
      )
    );
  }
  if (i >= 2 && i < 10) {
    var shellRadius = 100;
    var angle = (i - 2) * Math.PI / 3;
    electronArray.push(
      two.makeCircle(
        Math.cos(angle) * shellRadius,
        Math.sin(angle) * shellRadius,
        6
      )
    );
  }
}
//Properties of the rings
var orbitA = two.makeCircle(centerX, centerY, 40);
orbitA.fill = "transparent";
orbitA.linewidth = 6;
orbitA.stroke = "rgba(0, 0, 0, 0.2)";

var orbitB = two.makeCircle(centerX, centerY, 100);
orbitB.fill = "transparent";
orbitB.linewidth = 6;
orbitB.stroke = "rgba(0, 0, 0, 0.2)";
//Properties of the electrons
var groupElectronA = two.makeGroup(electronArray.slice(0, 2));
groupElectronA.translation.set(centerX, centerY);
groupElectronA.fill = "green";
groupElectronA.linewidth = 2;

var groupElectronB = two.makeGroup(electronArray.slice(2, 10));
groupElectronB.translation.set(centerX, centerY);
groupElectronB.fill = "red";
groupElectronB.linewidth = 2;

var groupNucleus = two.makeGroup(nucleusArray);
groupNucleus.translation.set(centerX, centerY);
//Speed of the rotation
two
  .bind("update", function(frameCount) {
    groupElectronA.rotation += 0.025 * Math.PI;
    groupElectronB.rotation += 0.005 * Math.PI;
    groupNucleus.rotation -= 0.08;
  })
  .play();

var text = two.makeText("", centerX, 100, styles);

nucleusArray.forEach(function(nucleus, index) {
  nucleus.opacity = 0;
});

electronArray.forEach(function(electron, index) {
  electron.opacity = 0;
});

visible = 0;
//The event listeners
document.addEventListener("click", function(event) {
  if (visible < nucleusArray.length) {
    nucleusArray[visible].opacity = 1;
    electronArray[visible].opacity = 1;
    visible++;
    text.value = elementNames[visible];
  }
  else {
    nucleusArray.forEach(el => el.opacity=0);
    electronArray.forEach(el => el.opacity=0);
    visible = 0;
    text.value = elementNames[0];
  }
});         

