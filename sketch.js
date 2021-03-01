const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var soldier1Img,soldier1;
var villager1,villager2,villager3,terrorist1;
var villager1Img,villager2Img,villager3Img,terrorist1Img;
var backgroundImg,background1;
var bullet,bulletImg;
var canvas;
var bulletGroup;
var villagerGroup;
var edges;
var terrorist;
var explosionImg;
var explosion;
var score=0;

function preload(){
villager1Img=loadImage("villager 1.jpg");
villager2Img=loadImage("villager 2.jpg");
villager3Img=loadImage("villager 3.jpg");
terrorist1Img=loadImage("terrorist1.jpg");
soldier1Img=loadImage("army1.jpg");
backgroundImg=loadImage("background 2.jpg");
bulletImg=loadImage("bullet1.jpg");
explosionImg=loadImage("explosion.jpg");
}
function createEnemies() {
  if(frameCount%200===0){
 
  var terrorist= createSprite(10, 480, 30, 10);
  terrorist.addImage(terrorist1Img);


 terrorist.depth=scene.depth;
 terrorist.x=Math.round(random(1100,1100));
  
 terroristGroup.add(terrorist);
  }
   
  }
function setup() {
  canvas=createCanvas(displayWidth-10,displayHeight-200);
scene=createSprite(0,0,displayWidth,displayHeight);
scene.addImage(backgroundImg);
scene.scale=3.5;
scene.x=scene.width/2;
explosion=createSprite(1120,460,10,10);
explosion.addImage(explosionImg);
explosion.visible=false;
explosion.scale=0.3
  engine=Engine.create();
  world=engine.world;

soldier1=createSprite(10,480,10,10);
soldier1.addImage(soldier1Img);
soldier1.scale=0.2;

bulletGroup=new Group();
villagerGroup=new Group();
terroristGroup=new Group();
}

function draw() {

 background(0);
 scene.velocityX=-3;

 if(scene.x<0){
   scene.x=scene.width/2;
  }
 Engine.update(engine);

 if (keyDown("space")){
  createBullet();
  }
 if(keyDown("right_arrow")){
   soldier1.velocityX=4;
   soldier1.velocityY=0;
 }
 if(keyDown("left_arrow")){
  soldier1.velocityX=-4;
  soldier1.velocityY=0;
}
createEnemies();

if(bulletGroup.isTouching(terroristGroup)){
terroristGroup[0].destroy();
 explosion.visible=true;
 explosion.lifetime=50;
  score=score+1;
 
   
}

edges=createEdgeSprites();
soldier1.bounceOff(edges);


  Villagers();
 
  
  drawSprites();
 // text(mouseX+","+mouseY,mouseX,mouseY)
}
function Villagers(){
  if(frameCount % 60===0){
    var villager1=createSprite(290,480,10,10);
    villager1.addImage(villager1Img);
  //  villager1.x=Math.round(random(280,320));
    villager1.scale=0.5;
    villagerGroup.add(villager1)
  }
}
function createBullet() {
   bullet= createSprite(10, 200, 60, 10);
  bullet.addImage(bulletImg);
  bullet.x = soldier1.x;
 bullet.y=displayHeight-360;
  bullet.velocityX = 10;
  bullet.lifetime = 100;
  bullet.scale = 0.05;
  bulletGroup.add(bullet);
  
   
  }

 
  //  // function isTouching(object1,object2){
  //  //    if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
  //     object2.x - object1.x < object2.width/2 + object1.width/2 &&
  //      object1.y - object2.y < object2.height/2 + object1.height/2 &&
  //       object2.y - object2.y < object2.height/2 + object1.height/2){
  //           return true;
  //        } 
  //        else
  //         { return false;
  //          }
  //          }