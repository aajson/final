// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let guys;
function setup() {
  
  createCanvas(windowWidth/2.7, windowHeight);
  
  guys= new guy();
}

function draw() {
  background(220);
  guys.move();
  guys.display();

}


class guy {
  constructor(x,y,Bspeed){
    this.pos = createVector(x,y);
    this.speed = 5;
    this.Bspeed = Bspeed;
    this.flip = false;
    this.bullet = [];
  }
  
  
  move() {
    this.speed = 5;
    if (keyIsDown("16")){
      this.flip = true;
    }
    else{
      this.flip = false;
    }
    if (this.flip === true ){
      this.speed = 3;
    }

    if (keyIsDown(LEFT_ARROW)){
      //left
      this.pos.x-=this.speed;
    }
    if (keyIsDown(UP_ARROW)){
      //up
      this.pos.y-=this.speed;
    }
    if (keyIsDown(DOWN_ARROW)){
      //down
      this.pos.y+=this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)){
      //right
      this.pos.x+=this.speed;
    }
    if (keyIsDown(90)){
      //shoot
    
      this.bullet.push(new Bullet( this.pos.x,this.pos.y,5 ));
           
    }  


  }
  display() {
    ellipse(this.pos.x, this.pos.y,15);

  }

}

class Bullet {
  constructor(x,y,size,speed,type,hit) {
    this.pos = createVector(x,y);
    this.speed = speed; 
    this.type = type;
    this.size =size;
    this.hit = hit;
  }
}
