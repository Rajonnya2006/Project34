class Ball {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'frictionAir': 0.05
        
      };
      this.body = Bodies.rectangle(x, y, 80, 80, options);
      this.width = 80;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // strokeWeight(3);
      //stroke('blue')
      fill('blue')
      rectMode(CENTER)
      ellipse(0, 0, this.width, this.height);
      pop();
    };
  };
  