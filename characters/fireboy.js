let scale = 0.13; // Scale factor
let bodyColor = "#20D5D5";
let hairColor = "#79443b";
let bodyWidth = 20;
let armShape = "ellipse";
let legShape = "ellipse";

function setup() {
  let canvas = createCanvas(100, 24);
  canvas.parent("character2-canva"); // Set parent element ID
  noLoop(); // Prevent continuous draw calls

  drawCharacter(width / 2, height / 2 - 25); // Initial drawing with default position (center of canvas)

  document
    .getElementById("fireBodyColor2")
    .addEventListener("input", (event) => {
      bodyColor = event.target.value;
      drawCharacter(width / 2, height / 2 - 25); // Redraw with default position
    });

  document
    .getElementById("fireHairColor2")
    .addEventListener("input", (event) => {
      hairColor = event.target.value;
      drawCharacter(width / 2, height / 2 - 25); // Redraw with default position
    });

  document
    .getElementById("fireBodyWidth2")
    .addEventListener("input", (event) => {
      bodyWidth = parseInt(event.target.value);
      drawCharacter(width / 2, height / 2 - 25); // Redraw with default position
    });

  document
    .getElementById("fireArmShape2")
    .addEventListener("change", (event) => {
      armShape = event.target.value;
      drawCharacter(width / 2, height / 2 - 25); // Redraw with default position
    });

  document
    .getElementById("fireLegShape2")
    .addEventListener("change", (event) => {
      legShape = event.target.value;
      drawCharacter(width / 2, height / 2 - 25); // Redraw with default position
    });

  saveButton = createButton("Save Character as PNG");
  saveButton.position(0, 0);
  saveButton.mousePressed(saveCharacter);
  document
    .getElementById("saveButton")
    .addEventListener("click", saveCharacter);
}

function draw() {
  clear();
  createRunningCharacterBoytoleft(10, 10);
  createCharacterBoystoptoleft(30, 10);
  createCharacterBoy(50, 10);
  createCharacterBoystoptoright(70, 10);
  createRunningCharacterBoytoright(90, 10);
}
function drawCharacter(x, y) {
  clear();
  createRunningCharacterBoytoleft(10, 10);
  createCharacterBoystoptoleft(30, 10);
  createCharacterBoy(50, 10);
  createCharacterBoystoptoright(70, 10);
  createRunningCharacterBoytoright(90, 10);
}

function createCharacterBoy(x, y) {
  //hair
  noStroke();
  fill(hairColor);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(178, 217, 225);
  ellipse(x, y - 25 * scale, 50 * scale, 50 * scale);

  fill(hairColor);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //mouth
  stroke(2);
  fill(255, 204, 204);
  rect(x - 5 * scale, y - 15 * scale, 10 * scale, 5 * scale); // Rectangle mouth

  //body
  stroke(1);
  fill(bodyColor);
  rect(x - (bodyWidth / 2) * scale, y, bodyWidth * scale, 60 * scale);

  //arms - running pose
  fill(178, 217, 225);
  push();
  translate(x + 32 * scale, y + 18 * scale);
  rotate(radians(-60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();
  push();
  translate(x - 32 * scale, y + 18 * scale);
  rotate(radians(60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();

  //legs
  fill(178, 217, 225);
  rect(x - 20 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  rect(x + 10 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  stroke(0);
  //eyes
  fill(0);
  ellipse(x - 10 * scale, y - 35 * scale, 5 * scale, 5 * scale);
  ellipse(x + 8 * scale, y - 35 * scale, 5 * scale, 5 * scale);

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1 * scale);
  arc(x, y - 20 * scale, 20 * scale, 10 * scale, 0, PI);
}

function createCharacterBoystoptoright(x, y) {
  //hair
  noStroke();
  fill(hairColor);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(178, 217, 225);
  ellipse(x, y - 25 * scale, 40 * scale, 50 * scale);

  fill(hairColor);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //body
  stroke(1);
  fill(bodyColor);
  rect(x - (bodyWidth / 2) * scale, y, bodyWidth * scale, 60 * scale);

  //arms - running pose
  fill(178, 217, 225);
  push();
  translate(x + 32 * scale, y + 18 * scale);
  rotate(radians(-60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();
  push();
  translate(x - 32 * scale, y + 18 * scale);
  rotate(radians(60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();

  //legs
  fill(178, 217, 225);
  rect(x - 20 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  rect(x + 10 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  stroke(0);

  //eyes
  fill(0);
  ellipse(x + 5 * scale, y - 30 * scale, 5 * scale, 5 * scale);

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1 * scale);
  arc(x + 10 * scale, y - 15 * scale, 15 * scale, 10 * scale, 0, PI);
}

function createCharacterBoystoptoleft(x, y) {
  //hair
  noStroke();
  fill(hairColor);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(178, 217, 225);
  ellipse(x, y - 25 * scale, 40 * scale, 50 * scale);

  fill(hairColor);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //body
  stroke(1);
  fill(bodyColor);
  rect(x - (bodyWidth / 2) * scale, y, bodyWidth * scale, 60 * scale);

  //arms - running pose
  fill(178, 217, 225);
  push();
  translate(x + 32 * scale, y + 18 * scale);
  rotate(radians(-60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();
  push();
  translate(x - 32 * scale, y + 18 * scale);
  rotate(radians(60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();

  //legs
  fill(178, 217, 225);
  rect(x - 20 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  rect(x + 10 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  stroke(0);
  //eyes
  fill(0);
  ellipse(x - 5 * scale, y - 30 * scale, 5 * scale, 5 * scale);

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1 * scale);
  arc(x - 10 * scale, y - 15 * scale, 15 * scale, 10 * scale, 0, PI);
}

function createRunningCharacterBoytoleft(x, y) {
  //hair
  noStroke();
  fill(hairColor);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(178, 217, 225);
  ellipse(x, y - 25 * scale, 40 * scale, 50 * scale);

  fill(hairColor);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //body
  stroke(1);
  fill(bodyColor);
  rect(x - (bodyWidth / 2) * scale, y, bodyWidth * scale, 60 * scale);

  //arms - running pose
  fill(178, 217, 225);
  push();
  translate(x + 32 * scale, y + 18 * scale);
  rotate(radians(-60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();
  push();
  translate(x - 32 * scale, y + 18 * scale);
  rotate(radians(60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();

  //legs
  fill(178, 217, 225);
  rect(x - 20 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  rect(x + 10 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  stroke(0);

  //eyes
  fill(0);
  ellipse(x - 5 * scale, y - 30 * scale, 5 * scale, 5 * scale);

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1 * scale);
  arc(x - 10 * scale, y - 15 * scale, 15 * scale, 10 * scale, 0, PI);
}

function createRunningCharacterBoytoright(x, y) {
  //hair
  noStroke();
  fill(hairColor);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(178, 217, 225);
  ellipse(x, y - 25 * scale, 40 * scale, 50 * scale);

  fill(hairColor);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //body
  stroke(1);
  fill(bodyColor);
  rect(x - (bodyWidth / 2) * scale, y, bodyWidth * scale, 60 * scale);

  //arms - running pose
  fill(178, 217, 225);
  push();
  translate(x + 32 * scale, y + 18 * scale);
  rotate(radians(-60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();
  push();
  translate(x - 32 * scale, y + 18 * scale);
  rotate(radians(60));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();

  //legs
  fill(178, 217, 225);
  rect(x - 20 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  rect(x + 10 * scale, y + 60 * scale, 10 * scale, 40 * scale);
  stroke(0);

  //eyes
  fill(0);
  ellipse(x + 5 * scale, y - 30 * scale, 5 * scale, 5 * scale);

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1 * scale);
  arc(x + 10 * scale, y - 15 * scale, 15 * scale, 10 * scale, 0, PI);
}

function saveCharacter() {
  let canvas = document.getElementById("defaultCanvas0"); // Replace with your canvas ID
  if (canvas) {
    let imgData = canvas.toDataURL("image/png");
    localStorage.setItem("savedCharacter", imgData);
  } // Save the data URL in local storage
  window.location.href = "index.html";
}
