const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world,ground;



function preload() {
 bg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(600,580,1200,10,{isStatic:true})
  World.add(world,ground)
  
  tower = Bodies.rectangle(160,350,160,310,{isStatic:true})
  World.add(world,tower)

  cannon = new Cannon(180,110,130,100,-PI/5)
  
  ball = new Ball(cannon.x,cannon.y,30)

}

function draw() {
  background(bg);
 
  Engine.update(engine);
  rectMode(CENTER)
  //rect(ground.position.x,ground.position.y,1200,10)
  
  push()
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310)
  pop()

 cannon.display()
 ball.display() 
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    ball.fire()
  }
}