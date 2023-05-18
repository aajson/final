// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 100;
let y = 100;
let guys;
let bulet1;
let eny;
let hit;
function setup() {
  
  createCanvas(windowWidth/2.2, windowHeight);
  //bulet1= new  Bullet(100,50,20,2,"weave");
  guys= new guy();
  eny= new Enemy(200,200,20);
  // frameCount();
}

function draw() {
  background(220);
  guys.move();
  guys.update();
  guys.display();
  eny.display();
  // bulet1.update( eny );
  // bulet1.draw();
  
  // Bupdate(guys);
}



// function Bupdate(group) {
//   for (let bullet of group.bullets) {
//     bullet.update();
//     bullet.draw();
  
//   }    

// }

class guy {
  constructor(x,y,Bspeed){
    this.pos = createVector(x,y);
    this.speed = 5;
    this.Bspeed = Bspeed;
    this.flip = false;
    this.bullets = [];
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
    
      this.bullets.push(new Bullet( this.pos.x, this.pos.y, 5, 10,"guy"));
           
    }  


  }
  display() {
    ellipse(this.pos.x, this.pos.y,12);

  }
  update() {
    for (let bullet of this.bullets) {
      //console.log("huh");
      bullet.update( eny );
      bullet.draw();

      
      this.bullets = this.bullets.filter(Bgone);
    
    }    
    
  }
} 

class Bullet {
  constructor(x, y, size,speed,type,) {
    this.pos = createVector(x,y); //x, y, magnitude, direction
    this.speed = speed; 
    this.type = type; 
    this.size =size;
    //this.hit = hit;
  }

  update( group ) {


    if (this.type === "guy"){
      this.pos.y -= this.speed;
    } 
    if (this.type === "norm") {
      this.pos.y += this.speed;      
    }
    if (this.type === "weave"){
      this.pos.add(createVector((sin(frameCount/8)*4),this.speed));
    }

    console.log(group.pos.x, group.pos.y);
    console.log(this.pos.x, this.pos.y);
    hit = collideCircleCircle( group.pos.x ,group.pos.y,group.size,this.pos.x,this.pos.y, this.size);
    print("colliding?", hit);
  }  
 
  draw(){
    if ( this.type === "guy"){
      ellipse(this.pos.x, this.pos.y, this.size);
    }  
    if ( this.type === "norm"){
      ellipse(this.pos.x, this.pos.y, this.size);
    }
    if ( this.type === "weave"){
      ellipse(this.pos.x, this.pos.y, this.size);
    }
  }

}

function Bgone(group){
  if (group.pos.y > windowHeight || group.pos.y < 0 ){
    console.log("woah");
    return false;
  }


  return true;
}
//|| group.hit===true

// function enemyStatus(){
//   // if (acten.alive === false){
//   //   actEnemy =  
//  // }
//   ellipse(200,200,50);
  
// }
  
class Enemy{
  constructor(x, y, size, health, attackType, attackBuffer, bulletspeed){
    this.pos = createVector(x, y);
    this.size = size;
    this.health = health;
    this.attackType = attackType;
    this.attackBuffer = attackBuffer;
    this.bulletspeed = bulletspeed;
    this.Alive = true;
  }
  display(){
    ellipse(this.pos.x, this.pos.y, this.size);


  }


}
function collider(group,group2){
  hit= collideCircleCircle(group2.x,group2.y,group2.size,group.x,group.y,group.size);
  group.hit =hit;
  print("colliding?", hit);
  return hit;

}