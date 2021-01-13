var fixedRect, movingRect,ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  ob1=createSprite(200,200,50,50)
  ob2=createSprite(200,100,50,50);
  ob3=createSprite(400,20,60,40);
  ob4=createSprite(600,600,50,53);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1.shapeColor='green';
  ob2.shapeColor='green';
  ob3.shapeColor='green';
  ob4.shapeColor='green';
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouch(movingRect,ob1)){
  movingRect.shapeColor = "";
  ob1.shapeColor = "";
 }
else {
  movingRect.shapeColor = "red";
  ob1.shapeColor = "red";
}
  drawSprites();
}


