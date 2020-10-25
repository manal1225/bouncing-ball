
const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;

var myworld,myengine;
var ground;



function setup() {
  createCanvas(800,400);

var option = {

  isStatic: true
}


  myengine = Engine.create();
  myworld = myengine.world;

  ground = Bodies.rectangle(200,390,400,20,option)
World.add(myworld,ground)

}

function draw() {
background(0);  
//update the engine for every frame in the game
Engine.update(myengine)
rectMode(CENTER)
fill(255)
rect(ground.position.x,ground.position.y,400,20)
 
}