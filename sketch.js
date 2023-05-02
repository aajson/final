// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=0;
let y=0;

let bullets = [];

function setup() {
  createCanvas(windowWidth/2.7, windowHeight);
  
}

function draw() {
  background(220);
  guy();
  updateBullet();
}




function updateBullet() {
  for (let bullet of bullets) {
    bullet.update();
    bullet.draw();
    
  }
  bullets = bullets.filter(Bgone);
}

function guy() {
  if (keyIsDown(LEFT_ARROW)){
    //left
    x-=5;
  }
  if (keyIsDown(UP_ARROW)){
    //up
    y-=5;
  }
  if (keyIsDown(DOWN_ARROW)){
    //down
    y+=5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    //right
    x+=5;
  }
  ellipse(x, y, 15);
  if (keyIsDown(90)){
  //shoot

    bullets.push(new Bullet(10, x, y));

    // bullet(5,5,x,y,10);
    
  }
}

// function bullet(l,w,bx,by,v){
//   bx-=(w/2);
//   by-=v;
  
//   rect(bx,by,w,l);
// }

//function bulletstore(l,w,bx,by,v){

class Bullet {
  constructor(speed, x, y) {
    this.speed = speed;
    this.x = x;
    this.y = y;
  }

  update() {
    this.y -= this.speed;
  }


  draw() {
    circle(this.x, this.y, 5);
  }
}

function Bgone(group){
  if (group.y > windowHeight || group.y < 0){
    console.log("woah");
    return false;
  }


  return true;
}