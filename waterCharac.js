const sketch1 = (p) => {
    let bodyColor = '#20D5D5';
    let hairColor = '#79443b';
    let bodyWidth = 20;
    let armShape = 'ellipse';
    let legShape = 'ellipse';
  
    p.setup = () => {
      let canvas = p.createCanvas(400, 400);
      canvas.parent('character1-canva'); // Set parent element ID
      p.noLoop();
      drawCharacter(100, 100); // Initial drawing with default position (200, 200)
  
      
      document.getElementById('waterBodyColor').addEventListener('input', (event) => {
        bodyColor = event.target.value;
        drawCharacter(100, 100); // Redraw with default position
      });
      document.getElementById('waterHairColor').addEventListener('input', (event) => {
        hairColor = event.target.value;
        drawCharacter(100,100); // Redraw with default position
      });
      document.getElementById('waterBodyWidth').addEventListener('input', (event) => {
        bodyWidth = parseInt(event.target.value);
        drawCharacter(100, 100); // Redraw with default position
      });
      document.getElementById('waterArmShape').addEventListener('change', (event) => {
        armShape = event.target.value;
        drawCharacter(100, 100); // Redraw with default position
      });
      document.getElementById('waterLegShape').addEventListener('change', (event) => {
        legShape = event.target.value;
        drawCharacter(100, 100); // Redraw with default position
      });
    };
  
    function drawCharacter(x, y) {
      p.clear();

      //hair
      p.fill(hairColor);
      p.rect(x + 60, y + 10, 80, 120, 60); // Hair
      p.stroke(2);
  
      // Head
      p.stroke(0);
      p.fill(178, 217, 225);
      p.ellipse(x + 100, y + 50, 50, 50); // Head
  
      p.fill(hairColor);
      p.noStroke();
      p.arc(x + 100, y + 40, 45, 35, p.PI, p.TWO_PI); // Hair arc
  
      // Body
      p.stroke(1);
      p.fill(bodyColor);
      p.beginShape();
      p.vertex(x + 80 - bodyWidth, y + 130);
      p.bezierVertex(x + 100 - bodyWidth, y + 110, x + 110 - bodyWidth, y + 90, x + 100, y + 75);
      p.bezierVertex(x + 80 + bodyWidth, y + 75, x + 100 + bodyWidth, y + 110, x + 120 + bodyWidth, y + 130);
      p.endShape(p.CLOSE);
  
      // Arms
      p.fill(178, 217, 225);
      if (armShape === 'ellipse') {
        p.push();
        p.translate(x + 120, y + 100);
        p.rotate(p.radians(-30));
        p.ellipse(0, 0, 10, 40);
        p.pop();
        p.push();
        p.translate(x + 80, y + 100);
        p.rotate(p.radians(30));
        p.ellipse(0, 0, 10, 40);
        p.pop();
      } else if (armShape === 'rectangle') {
        p.push();
        p.translate(x + 110, y + 85);
        p.rotate(p.radians(-30));
        p.rect(-5, 0, 10, 40);
        p.pop();
        p.push();
        p.translate(x + 90, y + 85);
        p.rotate(p.radians(30));
        p.rect(-5, 0, 10, 40);
        p.pop();
      }
  
      // Legs
      p.fill(178, 217, 225);
      if (legShape === 'ellipse') {
        p.ellipse(x + 95, y + 150, 10, 40);
        p.ellipse(x + 105, y + 150, 10, 40);
      } else if (legShape === 'rectangle') {
        p.rect(x + 90, y + 130, 10, 40);
        p.rect(x + 100, y + 130, 10, 40);
      }
  
      // Eyes
      p.fill(0);
      p.ellipse(x + 90, y + 45, 5, 5);
      p.ellipse(x + 110, y + 45, 5, 5);
  
      // Mouth
      p.noFill();
      p.stroke(3);
      p.strokeWeight(1);
      p.arc(x + 100, y + 60, 20, 10, 0, p.PI);
    }
};
  
  new p5(sketch1);