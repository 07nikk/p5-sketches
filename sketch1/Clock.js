class Clock {
  
  constructor()
  {
    this.x = 0 ;
    this.y = 0 ;
    this.finalX = 0;
    this.finalY = 0;
    this.waveOffset = 0;
  }
  
  ticks()
  {    
        for(let j=1; j <= 12; j++ )
          {
    
            // stroke(random(0, 255), random(0, 255), random(0, 255));
            text(j, sin(6) * 400, -85);
            rotate(second()/2);
          }
  }  
}