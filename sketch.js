


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseY,mouseX,mouseX-mouseY);
  fill("green") 
  ellipse(mouseX,mouseY,50,100);
  fill("blue")
  rect(mouseX,mouseY,50,100);
  fill("cyan")
  rect(mouseX,mouseY,100);
  fill("blue")
  rect(mouseX,mouseY,50,200);
  fill("yellow")
  triangle(mouseX, mouseY, 58, 20, 86, 75);

  stroke(500);
  line(mouseX, mouseY, 85, 20);

}