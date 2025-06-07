let clock;
let basex = 0;
let basey = 0;
let finalX = 0;
let finalY = 0;
let theta = 0;
let speed = 0.1;
let theta2 = 0;



function setup() {
  createCanvas(200, 200);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  clock  = new Clock();
  translate(width/2, height/2);
  
  let sec = map(second(), 0, 60, 0, 360)-180;
  let min = map(minute(), 0, 60, 0, 360) - 180;
  let hr = map(hour(), 0, 12, 0, 360) - 180;
  
  push()
  clock.ticks();
  pop()
  
  push()
  pop()
  
  //MIN
  stroke(255);
  push();
  strokeWeight(3);
  stroke(255);
  rotate(min);
  line(0,0,0, 70);
  pop();
  
  //Hour
   push();
  strokeWeight(5);
  stroke(0, 0, 255);
  rotate(hr);
  line(0,0,0, 25);
  pop();
  
  stroke(255);
  strokeWeight(10);
  text(`${hour()} : ${minute()} : ${second()}`, 100, 150);
  
}
