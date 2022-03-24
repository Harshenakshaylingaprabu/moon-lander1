let ground;
let lander;
var lander_img;
var bg_img,invisibleland


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1
  lander.setCollider("circle",50,0,0)
  invisibleland=createSprite(400,560,300,20);
  invisibleland.visible=true

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Position: "+round(lander.y),800,75);
  pop();
  if(keyDown(LEFT_ARROW)){
    lander.x-=4
  }
  if(keyDown(RIGHT_ARROW)){
    lander.x+=4
  }
  if(keyDown(UP_ARROW)){
    lander.y-=4
  }
  if(keyDown(DOWN_ARROW)){
    lander.y+=4
  }
  if(keyDown("space")){
    lander.velocityX=0
    lander.velocityY=0
  }
  invisibleland.debug=true
  lander.debug=true
  lander.collide(invisibleland)
    
  

  //fall down
 // vy +=g;
 // lander.position.y+=vy;
  drawSprites();
}



