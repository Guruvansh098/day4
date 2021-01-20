
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
  //creating the canvas of width 600 and height 600. 
  
  
  //Creating the player, tracks, startImage and groups.
  player = createSprite(300,500,20,20);
// player.addAnimation("player",ball);
  //player.visible = false;
  //player.shapeColor=("red")
 // player.scale=0.2      
   /*ball=Bodies.circle(300,500,10,{isStatatic:false,restitution:0.2,friction:1})
   World.add(world,ball)
  coinRand = Math.round(random(1,3));
  energyRand = Math.round(random(1,3));
  bombRand = Math.round(random(1,3));*/
  
  
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
  tiles();
  
  score = score + Math.round(getFrameRate()/60);
  
  if(gameState === START){
    if(keyDown("space")){
      gameState = PLAY;
    }   
  } else if (gameState === PLAY){
    start.destroy();
   // player.visible = true;
  /*   if(keyIsDown("UP_ARROW")){
  for (var i = 0; i < counter; i++) {
    var temp=tilesgroup.get(i);
   // text(i, temp.x, temp.y);
  }   
   
      player.x=tilesgroup.x                     
    player.y=tilesgroup.y
  }*/
 //   if(mousePressedOver(tilesgroup)){
  //   player.x=mouseX                     
  //  player.y=mouseY
//Matter.Body.setPosition(ball.body,ball.body.position,{x:mouseX,y:mouseY})
// }
   //Selecting random things to spawn it
  /* var select_object = Math.round(random(1,3));
   if(World.frameCount % 30 == 0){
     if(select_object == 1){
       coin();
     }
     else if(select_object == 2){
       bomb();
     }
     else{
       energy();
     }
   }*/
   
    
 

    //if(player.x == 300||player.x == 500||player.x == 100){
     // player.velocityX = 0;
   // } 

    if(keyDown(RIGHT_ARROW)){
    //  player.x=player.x + 15;
    player.visible=false
    player.x=tilesgroup.x
    player.visible=true
    }

    if(keyDown(LEFT_ARROW)&&player.x>100){
      player.velocityX = -8;
    }
    if(keyDown(UP_ARROW)){
      player.velocityY = -50;
    }
    
    /*if(coinGp.isTouching(player)){
      coinGp.destroyEach();
    }
    
    if(bombGp.isTouching(player)){
      gameState = END;
    }
    
    if(energyGp.isTouching(player)){
      energyGp.destroyEach();
    }*/
  }  else if (gameState === END){
     player.destroy();
     //coinGp.destroyEach();
    // bombGp.destroyEach();
     //energyGp.destroyEach();
   
    
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
