var backgroundColors, moveX;


function setup () {
  createCanvas(400, 400);
backgroundColor = color(255, 99, 71);
moveX = mouseX;
// yove = mouseY;

  // Step 3b: assign a color using the color function
}

 function creature(){
   
   fill(93, 173, 226);
 ellipse (moveX + 80, 80,80,80);
 fill(255);
 ellipse(moveX + 56,70,30,30);
 ellipse(moveX + 95,71,30,30);
 fill(0);
 ellipse(moveX + 46,67,10,10);
 ellipse(moveX + 87,69, 10, 10);
 stroke(0);
 line(moveX + 60,96, moveX + 79,96);
   
 }
 function speed(){
   //How fast the creature will move
moveX = moveX + 1;
// yove = yove + 0.5;
 }
 

function draw () {
  background(backgroundColor); // Step 3c: use the color variable
  
  creature();
  speed();
    line(mouseX, mouseY, mouseX + 90, mouseY + 120);
    line(mouseX + 20, mouseY + 120, mouseX, mouseY);
    
    line(mouseX + 20, mouseY + 120, mouseX + 90, mouseY + 120);
    line(mouseX, mouseY, mouseX + 90, mouseY + 240);
}


