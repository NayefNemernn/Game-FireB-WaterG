let scale = 0.13; // Scale factor

function setup() {
  createCanvas(100, 23);
  saveButton = createButton("Save Character as PNG");
  saveButton.position(0, 0);
  saveButton.mousePressed(saveCharacter);
}

function draw() {
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
  fill(121, 68, 59);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(255, 0, 0);
  ellipse(x, y - 25 * scale, 50 * scale, 50 * scale);

  fill(121, 68, 59);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //mouth
  stroke(2);
  fill(255, 204, 204);
  rect(x - 5 * scale, y - 15 * scale, 10 * scale, 5 * scale); // Rectangle mouth

  //body
  stroke(1);
  fill(251, 204, 109);
  rect(x - 20 * scale, y, 40 * scale, 60 * scale);

  //arms
  fill(255, 0, 0);
  push();
  translate(x + 32 * scale, y + 18 * scale);
  rotate(radians(-30));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();
  push();
  translate(x - 32 * scale, y + 18 * scale);
  rotate(radians(30));
  ellipse(0, 0, 10 * scale, 40 * scale);
  pop();

  //legs
  fill(255, 0, 0);
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
  fill(121, 68, 59);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(255, 0, 0);
  ellipse(x, y - 25 * scale, 40 * scale, 50 * scale);

  fill(121, 68, 59);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //body
  stroke(1);
  fill(251, 204, 109);
  rect(x - 20 * scale, y, 40 * scale, 60 * scale);

  //arms - running pose
  fill(255, 0, 0);
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
  fill(255, 0, 0);
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
  fill(121, 68, 59);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(255, 0, 0);
  ellipse(x, y - 25 * scale, 40 * scale, 50 * scale);

  fill(121, 68, 59);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //body
  stroke(1);
  fill(251, 204, 109);
  rect(x - 20 * scale, y, 40 * scale, 60 * scale);

  //arms - running pose
  fill(255, 0, 0);
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
  fill(255, 0, 0);
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
  fill(121, 68, 59);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(255, 0, 0);
  ellipse(x, y - 25 * scale, 40 * scale, 50 * scale);

  fill(121, 68, 59);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //body
  stroke(1);
  fill(251, 204, 109);
  rect(x - 20 * scale, y, 40 * scale, 60 * scale);

  //arms - running pose
  fill(255, 0, 0);
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

  //legs - running pose
  fill(255, 0, 0);
  push();
  translate(x - 20 * scale, y + 60 * scale);
  rotate(radians(30));
  rect(0, 0, 10 * scale, 40 * scale);
  pop();
  push();
  translate(x + 10 * scale, y + 65 * scale);
  rotate(radians(-30));
  rect(0, 0, 10 * scale, 40 * scale);
  pop();

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
  fill(121, 68, 59);
  ellipse(x - 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // left side of hair
  ellipse(x + 15 * scale, y - 50 * scale, 30 * scale, 40 * scale); // right side of hair
  ellipse(x, y - 60 * scale, 40 * scale, 30 * scale); // top of hair

  //head
  stroke(0);
  fill(255, 0, 0);
  ellipse(x, y - 25 * scale, 40 * scale, 50 * scale);

  fill(121, 68, 59);
  noStroke();
  arc(x, y - 40 * scale, 45 * scale, 35 * scale, PI, TWO_PI);

  //body
  stroke(1);
  fill(251, 204, 109);
  rect(x - 20 * scale, y, 40 * scale, 60 * scale);

  //arms - running pose
  fill(255, 0, 0);
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

  //legs - running pose
  fill(255, 0, 0);
  push();
  translate(x - 20 * scale, y + 60 * scale);
  rotate(radians(30));
  rect(0, 0, 10 * scale, 40 * scale);
  pop();
  push();
  translate(x + 10 * scale, y + 65 * scale);
  rotate(radians(-30));
  rect(0, 0, 10 * scale, 40 * scale);
  pop();

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
  saveCanvas("character", "png");
}
