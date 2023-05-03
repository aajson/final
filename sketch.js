// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=0;
let y=0;
let hit=false;

let bullets = [];

function setup() {
  createCanvas(windowWidth/2.7, windowHeight);
  
}

function draw() {
  background(220);
  guy();
  badguy();
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

    bullets.push(new Bullet(10, x, y,"guy",5 ));

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
  constructor(speed, x, y,type,size) {
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.type = type;
    this.size =size;
  }

  update() {
    this.y -= this.speed;
  }

  draw(){
    if ( this.type === "guy"){
      circle(this.x, this.y, this.size);
    }  

  }
}

function Bgone(group){
  if (group.y > windowHeight || group.y < 0){
    console.log("woah");
    return false;
  }


  return true;
}
function badguy(){
 
 
  ellipse(100,100,25);

  hit = collideCircleCircle(100,100,25,);
  stroke(hit ? color(red) : 0);
  print("colliding?", hit);

}