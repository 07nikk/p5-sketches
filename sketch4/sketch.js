let bullets = [];
let score = 0;

// Flower position (will change randomly)
let flowerX;
let flowerY; // fixed vertical position near bottom
const flowerSize = 75;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  resetFlower();
}

function draw() {
  background(31, 190, 222);
  
  // Sun
  fill(255, 255, 51);
  stroke(253, 255, 178);
  strokeWeight(10);
  circle(550, 50, 100);
  
  // Grass
  fill(0, 255, 0);
  strokeWeight(2);
  rect(0, height/2, width, height/2);
  
  // Flower emoji at random horizontal position near bottom
  textSize(flowerSize);
  noStroke();
  text("🌸", flowerX, flowerY);
  
  // Gun emoji follows mouse when not pressed
  if (!mouseIsPressed) {
    textSize(40);
    text("🔫", mouseX, mouseY);
  }
  
  // Update and show bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].show();
    
    // Check if bullet hits flower
    if (bullets[i].hits(flowerX, flowerY, flowerSize / 2)) {
      score++;
      bullets.splice(i, 1);
      resetFlower();
    } else if (bullets[i].offscreen()) {
      bullets.splice(i, 1);
    }
  }
  
  // Display score
  fill(0);
  textSize(32);
  text("Score: " + score, width - 100, 50);
}

// Reset flower position randomly on X axis
function resetFlower() {
  flowerX = random(flowerSize/2, width - flowerSize/2 - 100); // keep some margin on right
  flowerY = random(flowerSize/2, height - flowerSize/2 - 100)
}

// Shoot bullet on mouse click
function mousePressed() {
  // Shoot bullet from right side of canvas, at mouseY height (or mouseY if you want)
  // Here, bullets start at right edge, y at mouseY or fixed height
  bullets.push(new Bullet(width, mouseY));
}

// Bullet class
class Bullet {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-7, 0); // move left
    this.r = 15;
  }
  
  update() {
    this.pos.add(this.vel);
  }
  
  show() {
    textSize(this.r * 2);
    fill(0);
    noStroke();
    text("💥", this.pos.x, this.pos.y);
  }
  
  offscreen() {
    return this.pos.x < 0;
  }
  
  hits(fx, fy, fradius) {
    let d = dist(this.pos.x, this.pos.y, fx, fy);
    return d < this.r + fradius;
  }
}
