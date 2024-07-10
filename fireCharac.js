const sketch2 = (p) => {
  let bodyColor = "#20D5D5";
  let hairColor = "#79443b";
  let bodyWidth = 20;
  let armShape = "ellipse";
  let legShape = "ellipse";

  p.setup = () => {
    let canvas = p.createCanvas(400, 400);
    canvas.parent("character2-canva"); // Set parent element ID
    p.noLoop();
    drawCharacter(p.width / 2, p.height / 2); // Initial drawing with default position (center of canvas)

    document
      .getElementById("fireBodyColor2")
      .addEventListener("input", (event) => {
        bodyColor = event.target.value;
        drawCharacter(p.width / 2, p.height / 2); // Redraw with default position
      });
    document
      .getElementById("fireHairColor2")
      .addEventListener("input", (event) => {
        hairColor = event.target.value;
        drawCharacter(p.width / 2, p.height / 2); // Redraw with default position
      });
    document
      .getElementById("fireBodyWidth2")
      .addEventListener("input", (event) => {
        bodyWidth = parseInt(event.target.value);
        drawCharacter(p.width / 2, p.height / 2); // Redraw with default position
      });
    document
      .getElementById("fireArmShape2")
      .addEventListener("change", (event) => {
        armShape = event.target.value;
        drawCharacter(p.width / 2, p.height / 2); // Redraw with default position
      });
    document
      .getElementById("fireLegShape2")
      .addEventListener("change", (event) => {
        legShape = event.target.value;
        drawCharacter(p.width / 2, p.height / 2); // Redraw with default position
      });
  };

  function drawCharacter(x, y) {
    let scale = 1; // assuming scale is 1 for now
    p.clear();

    // Hair
    p.noStroke();
    p.fill(hairColor);
    p.ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
    p.ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
    p.ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

    // Head
    p.stroke(0);
    p.fill(178, 217, 225);
    p.ellipse(x, y - 25 * scale, 50 * scale, 50 * scale); // Head

    p.fill(hairColor);
    p.noStroke();
    p.arc(x, y - 40 * scale, 45 * scale, 35 * scale, p.PI, p.TWO_PI); // Hair arc

    // Body
    p.stroke(1);
    p.fill(bodyColor);
    p.beginShape();
    p.vertex(x - bodyWidth * scale, y);
    p.vertex(x + bodyWidth * scale, y);
    p.vertex(x + bodyWidth * scale, y + 60 * scale);
    p.vertex(x - bodyWidth * scale, y + 60 * scale);
    p.endShape(p.CLOSE);

    // Arms
    p.fill(178, 217, 225);
    if (armShape === "ellipse") {
      p.push();
      p.translate(x + 32 * scale, y + 18 * scale);
      p.rotate(p.radians(-30));
      p.ellipse(0, 0, 10 * scale, 40 * scale);
      p.pop();
      p.push();
      p.translate(x - 32 * scale, y + 18 * scale);
      p.rotate(p.radians(30));
      p.ellipse(0, 0, 10 * scale, 40 * scale);
      p.pop();
    } else if (armShape === "rectangle") {
      p.push();
      p.translate(x + 23 * scale, y + 5 * scale);
      p.rotate(p.radians(-30));
      p.rect(-5 * scale, 0, 10 * scale, 40 * scale);
      p.pop();
      p.push();
      p.translate(x - 23 * scale, y + 5 * scale);
      p.rotate(p.radians(30));
      p.rect(-5 * scale, 0, 10 * scale, 40 * scale);
      p.pop();
    }

    // Legs
    p.fill(178, 217, 225);
    if (legShape === "ellipse") {
      p.ellipse(x - 13 * scale, y + 80 * scale, 10 * scale, 40 * scale);
      p.ellipse(x + 13 * scale, y + 80 * scale, 10 * scale, 40 * scale);
    } else if (legShape === "rectangle") {
      p.rect(x - 20 * scale, y + 60 * scale, 10 * scale, 40 * scale);
      p.rect(x + 10 * scale, y + 60 * scale, 10 * scale, 40 * scale);
    }

    // Eyes
    p.fill(0);
    p.ellipse(x - 10 * scale, y - 35 * scale, 5 * scale, 5 * scale);
    p.ellipse(x + 8 * scale, y - 35 * scale, 5 * scale, 5 * scale);

    // Mouth
    p.noFill();
    p.stroke(3);
    p.strokeWeight(1);
    p.arc(x, y - 20 * scale, 20 * scale, 10 * scale, 0, p.PI);
  }
};

new p5(sketch2);
