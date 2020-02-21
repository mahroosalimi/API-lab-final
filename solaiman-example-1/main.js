// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes');
var params = { width: 500, height: 500 };
var two = new Two(params).appendTo(elem);
let x;
let y;
let arrayX = [];
let arrayY = [];
let counter = 0;

//Return random X position
function randPosX(){
    x = Math.random() * 500;
    x = Math.floor(x);
    savePosX(x);
    return x;
}
//Returns random Y position
function randPosY(){
    y = Math.random() * 500;
    y = Math.floor(y);
    savePosY(y);
    return y;
}
//Function to save Y position into array
function savePosY(arg){
    arrayY.push(arg);
    console.log(arrayY);

}
//Function to save X position into array
function savePosX(arg){
    arrayX.push(arg);
    console.log(arrayX);
}
//creates 5 orange circles on random positions
for(let i = 0; i<5; i++){
    let circle = two.makeCircle(randPosX(), randPosY(), 50);
    circle.fill = "rgb(255, 80, 00)";
    circle.stroke = 'orangered';
    circle.linewidth = 5;
    two.update();   
}

//Event listener to draw a white circle where the mouse is pressed
elem.addEventListener("mousedown", function(e){
    let mouseX = e.clientX;
    let mouseY = e.clientY
    var circle = two.makeCircle(mouseX, mouseY, 60);
    circle.fill = "rgb(255, 255, 255)";
    circle.stroke = 'white'; // Accepts all valid css color
    circle.linewidth = 5;
    two.update();

    //Conditional to check wether the mouse is clicked on a circle or not
    //Atm the wrong position is checked. Need to involve width and height to determine where the middle is
    if(arrayX[0] == mouseX && arrayY[0] == mouseY){
        counter++;
        console.log(counter);
    }else if(arrayX[1] == mouseX && arrayY[1] == mouseY){
        counter++;
        console.log(counter);
    }else if(arrayX[2] == mouseX && arrayY[2] == mouseY){
        counter++;
        console.log(counter);
    }else if(arrayX[3] == mouseX && arrayY[3] == mouseY){
        counter++;
        console.log(counter);
    }else if(arrayX[4] == mouseX && arrayY[4] == mouseY){
        counter++;
        console.log(counter);
    }

    //If all circles have been covered, change the div to Cool stuff
    if(counter == 5){
        elem.innerHTML = "Cool stuff!";
    }
});

