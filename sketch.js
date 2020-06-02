var wall,thickness;

var bullet, speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

thickness=random(22,83);
  speed=random(223,231);
 weight=random(30,52);

 car = createSprite(40,200,50,50);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor =Color (80,80,80);

 car.velocityX = speed;

}

function draw() {

  background(255,255,255);
  
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage =0.5* weight* speed* speed/ (thickness*thickness* thickness);
 }
if (damage > 10){
  wall.shapeColor=Color(255,0,0);
}

if (damage < 10){
  wall.shapeColor=Color(0,255,0);
}
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge= wall.x;
if(bulletRightEdge >= wallLeftEdge){
  return true;
}
  return false;
}