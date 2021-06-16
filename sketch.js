var man,Img;
var bg,bgImg;

function preload(){

  bgImg=loadImage("snow1.jpg")
  Img=loadImage("Man walking.png");
}

function setup() {
  createCanvas(800,400);

  

  man = createSprite(700, 300, 50, 50);
  man.scale=0.050;
  man.velocityX=-3
  man.addImage(Img);
}

function draw() {
  
  background(bgImg);
  

  if(man.x<100){
    bgImg=loadImage("snow2.jpg")
    man.x=700;
  }

 if(keyCode===32){
   bgImg=loadImage("snow3.jpg")
   man.x=700;
   man.velocityX=-3;
   fill("yellow");
   textSize(50);
   text("h2")
   text("Anime Was Ended",200,200)
 }
  


 
  drawSprites();
}

    
    


   

