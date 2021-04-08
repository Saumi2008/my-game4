var track,trackimg;
var runner,runnerimg;
var cash,cashimg,cashgroup;
var diamond,diamondimg,diamondgroup;
var jwell,jwellimg,jwellgroup;
var sword,swordimg,swordgroup;


var PLAY=1;
var END=0;
var gameState=1;



function preload(){
  trackimg=loadImage("images/track.jpg");
  runnerimg=loadAnimation("images/Runner-1.png","images/Runner-2.png");
  cashimg=loadImage("images/cash.png");
  diamondimg=loadImage("images/diamonds.png");
  jwellimg=loadImage("images/jwell.png");
  swordimg=loadImage("images/sword.png");
}

function setup() {
  createCanvas(800,600);
  
  track=createSprite(400, 200, 50, 50);
  track.addImage(trackimg);
  track.velocityY=1;
  
  runner=createSprite(400,500,50,50);
  runner.addAnimation("running",runnerimg);
  runner.scale=0.1;

  cashgroup=new Group();   
  diamondgroup=new Group();
  jwellgroup=new Group();
  swordgroup=new Group();

  





 

  
}

function draw() {

  if (gameState === PLAY){
    background("black");
    runner.x=World.mouseX;

    edges=createEdgeSprites();
    runner.collide(edges);


    if(track.y > 400 ){
      track.y = height/2;
    }

    createCash();
    creatediamond();
    createjwell();
    createsword();

   if (cash. isTouching(runner)){
    cash. destroyEach();
   }
   else if( diamond.isTouching(runner)){
     diamond.destroyEach();

   }else if(jwell. isTouching(runner)){
     jwell.destroyEach();

   }else{
    if(swordgroup. isTouching(runner)){
     gameState=END;

     cash.destroyEach();
     diamond.destroyEach();
     jwell.destroyEach();
     sword.destroyEach();

     cash. setVelocityYEach(0);
     diamond. setVelocityYEach(0);
     jwell.setVelocityYEach(0);
     sword.setVelocityYEach(0);

    }

   }

    drawSprites();

  }
  
}

function createCash(){
  if(frameCount % 200 ==0){
    cash=createSprite(Math.round(random(100,700)),10,20,20);
    cash.velocityY=3;
    cash.addImage(cashimg);
    cash.scale=0.15;
    cash.lifetime=150;
    cashgroup.add(cash);
    
  }
}

function creatediamond(){
  if(frameCount % 100 ==0){
    diamond=createSprite(Math.round(random(200,500)),10,10,20);
    diamond.velocityY=4;
    diamond.addImage(diamondimg);
    diamond.scale=0.05;
    diamond.lifetime=150;
    diamondgroup.add(diamond);
  }
}

function createjwell(){
  if(frameCount % 150 ==0){
    jwell=createSprite(Math.round(random(300,400)),10,10,20);
    jwell.velocityY=2;
    jwell.addImage(jwellimg);
    jwell.scale=0.2;
    jwell.lifetime=150;
    jwellgroup.add(jwell);
  }
}

function createsword(){
  if(frameCount % 300 ==0){
    sword=createSprite(Math.round(random(200,500)),10,15,30);
    sword.velocityY=5;
    sword.addImage(swordimg);
    sword.scale=0.1;
    sword.lifetime=150;
    swordgroup.add(sword);
  }
}














