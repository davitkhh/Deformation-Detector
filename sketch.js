var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(800, 400);
  speed = random(50, 90);
  weight = random(400, 1500);
  // speed = 90;
  // weight = 1500;
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed / 2;
  car.shapeColor = "white";
  wall = createSprite(570, 200, 65, 300);
  textSize(20);
  fill(255, 255, 255);
  
  


}

function draw() {
  background(0, 0, 0);  
  if (wall.x - car.x < car.width / 2 + wall.width / 2) {
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / 22500;

    car.x = wall.x - wall.width / 2 - car.width / 2 + deformation / 8;


    if (deformation <= 80) {
      car.shapeColor = "green"
    }
    else if (deformation > 80 && deformation < 180) {
      car.shapeColor = "yellow"
    }
    else if (deformation >= 180) {
      car.shapeColor = "red"
    }
  }

  drawSprites();
  text("Speed: " + Math.round(speed), 80, 20);                           //
  text("Weight: " + Math.round(weight), 80, 40);                        //
  text("Deformation: " + Math.round(deformation), 80, 60);             //
  
}