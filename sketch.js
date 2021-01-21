
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var counter=1
var START = 1;
var PLAY = 2;
var END = 3;
var gameState = START;
var start, startImage,ball;
var end, endImage;
//var track1, track2, track3, track4, track5, track6, trackGp;
var player, playerAnimation;
////var rail1, rail2, rail3, railGroup;
//var bombs, bombImage, bombRand, bombGp;
//var energyDrink, energyRand, energyImage, energyGp;
//var coins, coinRand, coinImage, coinGp;
var sound;
var score;
var tilesgroup,engine,world
function preload(){
  //Loading the images and animation.
//  playerAnimation = loadAnimation("sprite1.png", "sprite2.png", "sprite3.png", "sprite4.PNG","sprite5.png");
  bg=loadImage("back.jpg")
 startImage = loadImage("subway-surfers.jpg");
  endImage = loadImage("game-over-1.jpeg")
  
 // bombImage = loadImage("bomb.png"); 
 // energyImage = loadImage("energyDrink.png");
  //coinImage = loadImage("coin.png");
 // ball=loadImage("2.png")
  
 // sound = loadSound("sound.mp3");
}

function setup(){
    createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  ball=new Ball(800,600)
  //player = createSprite(300,500,20,20);
// player.addAnimation("player",ball);
  //player.visible = false;
  //player.shapeColor=("red")
 // player.scale=0.2      
 tile1=new Titles(600,500)
 tile2=new Titles(1000,500)
  
  
  start = createSprite(400,290,30,30)
  start.addImage("start", startImage);
  start.scale = 0.79;
  start.visible=false
  end = createSprite(300,300,20,20);
  end.addImage("end", endImage);
  end.visible = false;
  
  
  
 /* railGroup = new Group();
  coinGp = new Group();
  energyGp = new Group();
  bombGp = new Group();*/
tilesgroup = new Group();

  score = 0;
}

function draw() {
  //clearing the canvas
  background(bg);
  textSize(15);
  fill("white");
  stroke("white");
  text("score :" + score, 360, 50);
//  player.x=ball.position.x 
 // player.y=ball.position.y
  //Calling the functions for the rails
  //tiles();
  
  score = score + Math.round(getFrameRate()/60);
  
  if(gameState === START){
    if(keyDown("space")){
      gameState = PLAY;
    }   
  } else if (gameState === PLAY){
    start.destroy();
  tile1.display()
  tile2.display()
  ball.display()
 //   if(mousePressedOver(tilesgroup)){
  //   player.x=mouseX                     
  //  player.y=mouseY
//Matter.Body.setPosition(ball.body,ball.body.position,{x:mouseX,y:mouseY})
// }
   
 

    
  }  else if (gameState === END){
    
   
    
     background(0);
     
    end.visible = true; 
  }
  
  drawSprites();
  
  if(gameState == START){
    stroke("white");
    fill("white")
    textSize(30);
    text("Press Space to continue ", 170, 500); 
    text("Use right and left keys to move", 150, 450);
  }
}


function tiles(){
  if (frameCount%100==0){
    var tile =createSprite(random(500,1000),10,100,100)
    tile.shapeColor=("aqua")
    tile.velocityY=+4
    player.depth=tile.depth
    player.depth=player.depth+1
    tilesgroup.add(tile)
    counter++
  }
}
function keyPressed()
{
  if(keyCode32){
    Matter.Body.setPosition(ball.body,ball.body.position,{x:tile1.x,y:tile1.y})
 }
}
