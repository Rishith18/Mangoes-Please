
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,treeImage
var kid, kidImage

function preload() {
	treeImage = loadImage("tree.png");
	kidImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	tree = createSprite(580,480);
  	tree.addAnimation("trees",treeImage);
	tree.scale = 0.35;
	  
	kid = createSprite(150,620);
  	kid.addAnimation("kid",kidImage);
	kid.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground = new Ground(400,690,800,20);
	stone = new Stone(100,600,40,40);
	string = new String(stone.body,{x:100,y:560});
	mango1 = new Mangoes(460,410,70,70);
	mango2 = new Mangoes(700,390,60,60);
	mango3 = new Mangoes(500,350,50,50);
	mango4 = new Mangoes(570,320,50,50);
	mango5 = new Mangoes(550,390,60,60);
	mango6 = new Mangoes(630,360,70,70);
	mango7 = new Mangoes(650,430,50,50);
	mango8 = new Mangoes(750,440,40,40);
}

function draw() {
  rectMode(CENTER);
  background(235);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
  ground.display();
  string.display();
  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
    string.fly();
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:100,y:600});
		string.attach(stone.body);

	}
}
function detectCollision(bodyA,bodyB) {
	mPos = bodyB.body.position
	sPos = bodyA.body.position

	var distance = dist(sPos.x, sPos.y, mPos.x, mPos.y)
	if (distance<=bodyB.width+bodyA.width) {
		Matter.Body.setStatic(bodyB.body,false);
	}
}