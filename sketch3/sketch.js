let graph;
// const PI = 22/7;
var theta = 0;
let x = 0;
let y = 0;
let circleRadius = 100;
let speed = 0.005;
let waveOffset = 10;

let distFromCenter = 4;

function setup() {
  createCanvas(600, 600); 
}



function draw() {
  // background(0);
  
  translate(width/2, height/2);
  
  // distFromCenter++;
  //here 10 is distance from center of curve
  waveOffset = sin(theta * 10) * 100;
  // waveOffset = cos(theta * 5) * 100; 
  // waveOffset = 10;
  
  let finalX = cos(theta) * ( circleRadius + waveOffset);
  let finalY = sin(theta) * ( circleRadius + waveOffset);
  
  // stroke(255);
  fill(random(0,255), random(0,255), random(0,255));
  ellipse(finalX, finalY, 5, 5);
  theta += speed;
  
}