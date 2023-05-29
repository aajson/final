// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=0;
let y=0;
let hit=false;
let badgu;
let bullets = [];

function setup() {
  createCanvas(windowWidth/2.7, windowHeight);
  badgu = new badguys(100,100,25);
}

function draw() {
  background(220);
  guy();
  //badguy();
  badgu.draw();
  updateBullet();
  
}


// function updatecollide() {
//   for (let  of object) {
    
//   } 

// }



function updateBullet() {
  for (let bullet of bullets) {
    bullet.update();
    bullet.draw();
    // hit = collideCircleCircle(100,100,25,bullet.x,bullet.y,bullet.size);
    // print("colliding?", hit);
    collider(bullet,badgu);
    bullets = bullets.filter(Bgone);
  }
  
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
  constructor(speed, x, y,type,size,hit) {
    this.speed = speed;
    this.pos = createVector(x,y);
    
    this.type = type;
    this.size =size;
    this.hit = hit;
  }

  update() {
    if (this.type === "guy"){
      this.pos.y -= this.speed;
    } 
  }

  draw(){
    if ( this.type === "guy"){
      circle(this.pos.x, this.pos.y, this.size);
    }  

  }
}

function Bgone(group){
  if (group.y > windowHeight || group.y < 0 || group.hit===true){
    console.log("woah");
    return false;
  }


  return true;
}

class badguys{
  constructor(x,y, size, Btype,Mtype,Htype,fx,fy ){
    this.size = size;
    this.Btype = Btype;
    this.Mtype = Mtype;
    this.Htype = Htype;
    this.pos = createVector(x,y);
    
    this.fx =fx;
    this.fy =fy;

  }

  draw(){
    ellipse(this.x, this.y, this.size);  

  }
  
  // update(){
  //   if (this.Mtype === "strait" && this.x != this.fx || this.y != this.fy){
      

  //   }
  // }

}



// function nextbadguy(actguy){
//   if (actguy.alive === false){
//     actguy == Badguys.shift();
    
//   }
// } 


function collider(group,group2){
  hit= collideCircleCircle(group2.x,group2.y,group2.size,group.x,group.y,group.size);
  group.hit =hit;
  print("colliding?", hit);


}

// 

