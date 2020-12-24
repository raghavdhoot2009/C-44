const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var child,parents,chocolates,door;


function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;

  child=createSprite(50,750,10,80);
}

function draw() {
Engine.update(engine);
drawSprites();
}