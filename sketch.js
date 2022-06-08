const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var otherGround
var otherBall

function setup() {
  engine = Engine.create();

  createCanvas(400,400);

  world = engine.world;

  var ball_options = {
    restitution : 1,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var block1_options = {
    restitution:0.5,
    friction:0.02,
    frictionAir:0
  }

  var block2_options = {
    restitution:0.7,
    friction:0.01,
    frictionAir:0.1
  }

  var block3_options = {
    restitution:0.01,
    friction:1,
    frictionAir:0.3
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  otherBall = Bodies.circle(250,0,20,ball_options);
  World.add(world,otherBall);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  otherGround = Bodies.rectangle(300, 150, 100, 20, ground_options)
  World.add(world, otherGround)
  
  block1 = Bodies.circle(220, 10, 10, block1_options)
  World.add(world, block1)

  block2 = Bodies.rectangle(110,50, 10, 10, block2_options)
  World.add(world, block2)

  block3 = Bodies.rectangle(350,50, 10, 10, block3_options)
  World.add(world, block3)
   
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 ellipse(otherBall.position.x,otherBall.position.y,20);
 fill("violet")
 rect(ground.position.x,ground.position.y,400,20);
 rect(otherGround.position.x,otherGround.position.y,100,20);
 ellipse(block1.position.x,block1.position.y, 20,20);
 rect(block2.position.x,block2.position.y,120,10);
 rect(block3.position.x,block3.position.y,60,10);
}

