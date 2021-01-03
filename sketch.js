const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball1, ball2, ball3, ball4, ball5;
 
var rope1, rope2, rope3, rope4, rope5;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,600,1200,20);
    ball1 = new Ball(200, 200);
     rope1 = new Rope(ball.body, {x:500, y:50});

     ball2 = new Ball(250, 200);
     rope2 = new Rope(ball.body, {x:550, y:50});

     ball3 = new Ball(300, 200);
     rope3 = new Rope(ball.body, {x:600, y:50});

     ball4 = new Ball(350, 200);
     rope4 = new Rope(ball.body, {x:650, y:50});

     ball5 = new Ball(400, 200);
     rope5 = new Rope(ball.body, {x:700, y:50});
    
    

    

}

function draw(){
    background(180);
    Engine.update(engine);
    
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    
}

function mouseDragged() { Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY }); }