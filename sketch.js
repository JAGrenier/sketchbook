function setup() {
  createCanvas(400, 400);
  background(52, 198, 235);
}

function draw() {
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 25, 25);
  }
}