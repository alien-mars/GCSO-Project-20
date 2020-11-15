var car, wall;
var deformation;
var speed, weight;
var line1, line2, line3, line4;

function setup() {
  createCanvas(1600,400);
   car = createSprite(50, 200, 50, 50);
   car.shapeColor = "white";

   wall = createSprite(1500,200,60,height/2);
   wall.shapeColor = color(80,80,80);

   speed = Math.round(random(55,90));
   weight = Math.round(random(400,1500));
   
   line1 = createSprite(800,5,1600,10);
   line1.shapeColor = "white";

   line2 = createSprite(800,1595,1600,10);
   line2.shapeColor = "white";

   line3 = createSprite(5,200,10,400);
   line3.shapeColor = "white";

   line4 = createSprite(1595,200,10,400);
   line4.shapeColor = "white";
}

function draw() {
  background(0,0,0);  

  car.velocityX = speed;

  for(var i = 10; i < 1600; i = i+60){
    var lane1 = createSprite(i,130,40,10);
    lane1.shapeColor = "white";
    wall.depth = lane1.depth;
    wall.depth += 1;
  }

  for(var m = 10; m < 1600; m = m+60){
    var lane2 = createSprite(m,270,40,10);
    lane2.shapeColor = "white";
    wall.depth = lane2.depth;
    wall.depth += 1;
  }

  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;
    car.x = 1445;
    var deformation = (0.5*weight*speed*speed)/22500;
    console.log(deformation);
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0); 
    }
    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}