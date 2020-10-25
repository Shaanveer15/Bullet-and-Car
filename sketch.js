var car,wall,speed,weight;



function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="blue";
  car.velocityX=speed;
  wall=createSprite(1200,200,60,200);
  wall.shapeColor="white";
}

function draw() {
  background(0);
  if(collided(car,wall)){

  
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
  car.shapeColor="yellow";
  }
  if(deformation<180&&deformation>100){
    car.shapeColor="white";
    }
    if(deformation<100){
      car.shapeColor="green";
      }
  }



  drawSprites();
}
function collided(bullet,Wall){
bulletright=bullet.x+bullet.width;
Wallleft=Wall.x
if(bulletright>=Wallleft){
  return true
}
else{return false}


}