var pc;
var pcimg,npc1,npc1img,npc2,npc2img,npc3,npcimg;
gameState = "wait";

function preload(){
//acimg = loadImage("name");
//bgimg = loadImage("name");
}

function setup() {
  createCanvas(1200,500);

 pc = createSprite(210,450,100,50);
 npc1 = createSprite(555,335,50,100);
 npc2 = createSprite(490,335,50,100);
 npc3 = createSprite(520,240,100,50);
 policeman = createSprite(1055,75,50,50);
// npc1.addImage(npc1img);
// npc1.visible=false;
// pc.addImage(pcimg);
// pc.visible=false;
// npc2.addImage(npc2img);
// npc2.visible=false;
// npc3.addImage(npc3img);
 //npc3.visible=false;
 //policeman.addImage();
}

function draw() {
  
   fill("black");
   text(mouseX+" , "+ mouseY,200,100); 
   if (gameState === "wait"){

   //background(bgimg);
   text("Press space to move ahead",495,150);
   if (keyCode === 32){
     gameState = "play";
   }
   }
   if (gameState === "play"){
    // background(bgimg2)
    //npc1.visible = true;

    if (keyCode = 39){
      pc.x = pc.x+10;
    }
    if (keyCode = 37){
      pc.x = pc.x-10;
    }
    if (keyCode = 38){
      pc.y = pc.y-10;
    }
    if (keyCode = 40){
      pc.y = pc.y+10;
    }
    if(pc.isTouching(npc1)||pc.isTouching(npc2)||pc.isTouching(npc3)){
      gameState = "wait"
    }
    
   }
  drawSprites();
}