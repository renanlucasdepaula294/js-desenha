function setup() {
    createCanvas(1920, 1080);
    background("black")
  }
  
  function draw() {
    stroke("white")
    fill("white")
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35)
     }
  }
  