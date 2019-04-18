//variables for horizontal position and diameter
var xPos = 0;
var diam1 =50;
function setup() {
  // put setup code here
    createCanvas(500,500);
}  


  
function draw() {    
    // put drawing code here
background("#f4f442");
fill("#7df442");
    stroke("#f4417d");
    strokeWeight(10);
    //increase the value of xPos so it moves
    xPos = xPos + 10;
    //set up xPos back to 0
    if(xPos >= width){
    xPos =0;
    }
    ellipse(xPos, height/2, diam1, diam1);
    ellipse(350,225, 50, 50);
    fill("#FF0000");
    noStroke();
    ellipse(250, 350, 100, 40);
    textSize(40);
      
    textFont("Bodoni");
    text("MMP100", 200, 100,);
     noFill();
    stroke("#FF0000");
}
function mousePressed(){
    diam1 = diam1 + 10;
    if (diam1 >= height){
        diam1 = 50;   
    }
    //strokeWeight(20);
    //ellipse(250, 250, 430, 430);
}
//ellipse(width/2, height 2, 100, 100);
//line below sets circle to position                                    cursor
//ellipse(mouseX, mouseY , 100, 100);
         