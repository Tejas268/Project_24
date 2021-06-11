
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var village, a, ground, ball, basket1, basket2, basket3, wast, ground, wastImage;

function preload() {

	village = loadImage("village.jpg");
	/*wastImage = loadImage("wast.png")*/
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(80,750,20,20);

	ground = new Line(400,770,800,50);

	basket1 = new Line(595,680,20, 120);
	basket3 = new Line(705,680,20, 120);
	basket2 = new Line(650,730,130, 20);

	/*wast = createSprite(80,750,50,50);
	wast.addImage(wastImage);
	wast.scale = 0.8;*/

	Engine.run(engine);
  
}


function draw() {
  background(village);

  rectMode(CENTER);
  Engine.update(engine);

  /*wast.x = ball.x;
  wast.y = ball.y;*/

  ball.display();
  ground.display();
  basket1.display();
  basket2.display();
  basket3.display();
  
  drawSprites();
}
