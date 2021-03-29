const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, rope1, rope2 , rope3, rope4 ,rope5;

function preload()
rope1=new rope1(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  {
	  var pointA=this.rope.bodyA.position;
	  var pointB=this.rope.bodyB.position;

	  StrokeWeight(2);

	  var Anchor1X=pointA.x
	  var Anchor1Y=pointA.y

	  var Anchor2X=pointB.x+this.offsetX
	  var Anchor2Y=pointB.y+this.offsetY

	  Line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
  }
 
}



