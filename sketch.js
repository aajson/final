// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=0;
let y=0;
function setup() {
  createCanvas(windowWidth/2.7, windowHeight);
  
}

function draw() {
  background(220);
  guy();
}




function guy() {
  if (keyIsDown(LEFT_ARROW)){
    //left
    x-=3;
  }
  if (keyIsDown(UP_ARROW)){
    //up
    y-=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    //down
    y+=3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    //right
    x+=3;
  }
  ellipse(x, y, 15);
}

