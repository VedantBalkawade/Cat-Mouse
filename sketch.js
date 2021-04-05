var catImage
var mouseImage
var backgroundImage

function preload() {
    catImage= loadAnimation("images/cat1.png")
    catImage2= loadAnimation("images/cat2.png","images/cat3.png")
   
    catImage4= loadAnimation("images/cat4.png")
    



    mouseImage=loadAnimation("images/mouse1.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    
    mouseImage4=loadImage("images/mouse4.png")
    backgroundImage=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(850,700,50,50)
cat.addAnimation("tomSleeping",catImage)
cat.scale=0.1



    mouse=createSprite(100,650,50,50)
    mouse.addAnimation("jerryStanding",mouseImage)
mouse.scale=0.15
   

}

function draw() {

    background(backgroundImage);
   // Write condition here to evalute if tom and jerry collide
     if(cat.x-mouse.x<(cat.width-mouse.width)/2){
         cat.addImage("catImage")
         mouse.addImage("mouseImage")
     }

    drawSprites();
}


 function keyPressed(){
    if(keyDown===Left_Arrow){
        mouse.addAnimation("mouseTeasing",mouseImage2)
        mouse,changeAnimation("mouseTeasing")
        mouse.frameDelay=25
    }
    

  
 }