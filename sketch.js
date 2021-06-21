
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var village, a, ground, ball, dustbin, dustbinIMG, basket1, basket2, basket3, waste, ground, wasteImage;

function preload() {

	village = loadImage("village.jpg");
	dustbinIMG = loadImage("dustbin.png")
	wasteImage = loadImage("waste.png");
	
}

function setup() {
	createCanvas(700, 700);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(80,650,20,20);

	ground = new Line(350,670,700,40);

	basket1 = new Line(495,600,14, 120);
	basket3 = new Line(605,600,14, 120);
	basket2 = new Line(550,650,130, 14);

	dustbin = createSprite(550,590,20,20);
	dustbin.addImage(dustbinIMG);
	dustbin.scale = 0.5;

	waste = createSprite(80,750,50,50);
	waste.addImage(wasteImage);
	waste.scale = 0.06;

	Engine.run(engine);
  
}


function draw() {
  background(village);

  rectMode(CENTER);
  Engine.update(engine);

  ball.display();
  ground.display();
  basket1.display();
  basket2.display();
  basket3.display();

  waste.x = mouseX;
  waste.y = mouseY;
  
  drawSprites();
}
