let angle=7;
let bodyColor= '#12d9cf';
let hairColor = '#79443b';
let bodyWidth=20;
let armShape= 'ellipse';
let legShape= 'rectangle';

function setup() {
  createCanvas(525,170);
  saveButton = createButton('Save Character as PNG');
  saveButton.position(0,0);
  saveButton.mousePressed(saveCharacter);

  document.getElementById('bodyColor').addEventListener ('input', (event) => {
    bodyColor= event.target.value;
  });
  document.getElementById('hairColor').addEventListener ('input', (event) => {
    hairColor= event.target.value;
  });
  document.getElementById('bodyWidth').addEventListener ('input', (event) => {
    bodyWidth= parseInt(event.target.value);
  });
  document.getElementById('armShape').addEventListener ('input', (event) => {
    armShape= event.target.value;
  });
  document.getElementById('legShape').addEventListener ('input', (event) => {
    legShape= event.target.value;
  });
}



function draw() {
  clear();
  createCharacter(200,70);
}

function createCharacter(x,y) {
  //hair
  fill(hairColor);
  rect(160,5,80,120,60);
  stroke(2);
  
  //head
  stroke(0);
  fill (178,217,225);
  ellipse (x,y-30,50,50);
  
  fill(hairColor);
  noStroke();
  arc(x, y - 40, 45, 35, PI, TWO_PI);

  //body
  stroke(1);
  fill(bodyColor);
  
  beginShape();
  vertex(x - bodyWidth, y + 60); 
  bezierVertex(x - bodyWidth-10, y + 40, x - 10, y + 20, x, y - 5); 
  bezierVertex(x + 10, y + 20, x + bodyWidth+10, y + 40, x + bodyWidth, y + 60); 
  endShape(CLOSE);
  
  //arms
  fill(178,217,225);
  if (armShape==='ellipse') {
    push(); 
    translate(x + 20, y + 20); 
    rotate(radians(-30)); 
    ellipse(0, 0, 10, 40); 
    pop();
    push(); 
    translate(x -20, y + 20); 
    rotate(radians(30)); 
    ellipse(0, 0, 10, 40); 
    pop();
  } else if (armShape==='rectangle') {
    push();
    translate(x + 15, y + 20);
    rotate(radians(-30));
    rect(-5, 0, 10, 40);
    pop();
    push();
    translate(x - 18, y + 20);
    rotate(radians(30));
    rect(-5, 0, 10, 40);
    pop();
  }
  
  //legs
  fill(178,217,225); 
  if (legShape==='ellipse') {
    ellipse(x - 5, y + 80, 10, 40);
    ellipse(x + 5, y + 80, 10, 40);
  } else if (legShape==='rectangle') {
    rect(x - 10, y + 60, 10, 40);
    rect(x + 2, y + 60, 10, 40);
  }
  
  stroke(0);

  //eyes
  fill(0); 
  ellipse(x - 10, y - 35, 5, 5); 
  // ellipse(x + 8, y - 35, 5, 5);

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1);
  arc(x-13, y - 20, 20, 10, 0, PI); 
  createCharacter2(310,70);
  createCharacter3(95,70);
  createCharacter4(290,70);
  createCharacter5(380,70);
}

function createCharacter2(x,y) {
  //hair
  fill(hairColor);
  rect(432,5,80,120,60);
  stroke(0);
  //head
  stroke(0);
  fill (178,217,225);
  ellipse (x+175,y-30,50,50);
  
  fill(hairColor);
  noStroke();
  arc(x+175, y - 40, 45, 35, PI, TWO_PI);

  // mouth
  stroke(2);
  fill(255, 204, 204);

  //body
  stroke(1);
  fill(bodyColor);
  beginShape();
  beginShape();
  vertex(x - bodyWidth+195, y + 60); 
  bezierVertex(x - bodyWidth+200, y + 60, x + 205, y + 70, x+175, y - 5); 
  bezierVertex(x + 150, y + 40, x + bodyWidth +120, y + 65, x + 165, y + 60); 
  endShape(CLOSE);

  //arms
  fill(178,217,225);
  if (armShape==='ellipse') {
  push(); 
  translate(x + 200, y + 10); 
  rotate(radians(40)); 
  ellipse(0, 0, 10, 40); 
  pop();
  push(); 
  translate(x +150, y + 30); 
  rotate(radians(40)); 
  ellipse(0, 0, 10, 40); 
  pop();
  } else if (armShape==='rectangle') {
    push();
    translate(x + 200, y -2);
    rotate(radians(40));
    rect(5, 0, 10, 40);
    pop();
    push();
    translate(x +153, y + 25);
    rotate(radians(40));
    rect(-5, 0, 10, 40);
    pop();
  }
  //legs
  fill(178,217,225); 
  if (legShape==='ellipse') {
    drawLeg(x +165, y + 80, angle);
    drawLeg(x + 205, y + 55, -angle);
  } else if (legShape === 'rectangle') {
    drawLeg(x + 160, y + 50, 7);
    drawLeg(x + 180, y + 50, -angle);
  }
  stroke(0);

  //eyes
  fill(0); 
  ellipse(x+ 180, y - 35, 5, 5); 

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1);
  arc(x +187, y - 20, 20, 10, 0, PI); 
}
function createCharacter3 (x,y) {
  //hair
  fill(hairColor);
  rect(68,5,80,120,60);
  stroke(0);
  //head
  stroke(0);
  fill (178,217,225);
  ellipse (x,y-30,50,50);
  
  fill(hairColor);
  noStroke();
  arc(x, y - 40, 45, 35, PI, TWO_PI);

  //body
  stroke(1);
  fill(bodyColor);
  beginShape();
  vertex(x - bodyWidth, y + 60); 
  bezierVertex(x - bodyWidth, y + 40, x - 10, y + 20, x, y - 5); 
  bezierVertex(x + 10, y + 20, x + bodyWidth, y + 40, x + bodyWidth, y + 60); 
  endShape(CLOSE);
  
  //arms
  fill(178,217,225);
  if (armShape === 'ellipse') {
    push();
    translate(x + 20, y + 30);
    rotate(radians(-40));
    ellipse(0, 0, 10, 40);
    pop();
    push();
    translate(x - 25, y + 10);
    rotate(radians(-40));
    ellipse(0, 0, 10, 40);
    pop();
  } else if (armShape === 'rectangle') {
    push();
    translate(x + 20, y + 30);
    rotate(radians(-40));
    rect(-5, -4, 10, 40);
    pop();
    push();
    translate(x - 35, y);
    rotate(radians(-40));
    rect(-5, 0, 10, 40);
    pop();
  }
  //legs
  fill(178,217,225); 
  if (legShape==='ellipse') {
    drawLeg(x - 5, y + 80, angle);
    drawLeg(x + 40, y + 55, -angle);
  } else if (legShape === 'rectangle') {
    drawLeg(x - 10, y + 50, 7);
    drawLeg(x + 15, y + 50, -angle);
  }

  stroke(0);
  //eyes
  fill(0); 
  ellipse(x - 10, y - 35, 5, 5); 
  
  //mouth
  noFill();
  stroke(3);
  strokeWeight(1);
  arc(x-12, y - 20, 20, 10, 0, PI); 
}

function createCharacter4(x,y) {
  //hair
  fill(hairColor);
  rect(250,5,80,120,60);
  stroke(2);
  
  //head
  stroke(0);
  fill (178,217,225);
  ellipse (x,y-30,50,50);
  
  fill(hairColor);
  noStroke();
  arc(x, y - 40, 45, 35, PI, TWO_PI);
  //body
  stroke(1);
  fill(bodyColor);
  
  beginShape();
  vertex(x - bodyWidth, y + 60); 
  bezierVertex(x - bodyWidth-10, y + 40, x - 10, y + 20, x, y - 5); 
  bezierVertex(x + 10, y + 20, x + bodyWidth+10, y + 40, x + bodyWidth, y + 60); 
  endShape(CLOSE);
  
  //arms
  fill(178,217,225);
  if (armShape==='ellipse') {
    push(); 
    translate(x + 20, y + 20); 
    rotate(radians(-30)); 
    ellipse(0, 0, 10, 40); 
    pop();
    push(); 
    translate(x -20, y + 20); 
    rotate(radians(30)); 
    ellipse(0, 0, 10, 40); 
    pop();
  } else if (armShape==='rectangle') {
    push();
    translate(x + 15, y + 20);
    rotate(radians(-30));
    rect(-5, 0, 10, 40);
    pop();
    push();
    translate(x - 18, y + 20);
    rotate(radians(30));
    rect(-5, 0, 10, 40);
    pop();
  }
  
  //legs
  fill(178,217,225); 
  if (legShape==='ellipse') {
    ellipse(x - 5, y + 80, 10, 40);
    ellipse(x + 5, y + 80, 10, 40);
  } else if (legShape==='rectangle') {
    rect(x - 10, y + 60, 10, 40);
    rect(x + 2, y + 60, 10, 40);
  }
  stroke(0);
  //eyes
  fill(0); 
  ellipse(x - 10, y - 35, 5, 5); 
  ellipse(x + 8, y - 35, 5, 5);

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1);
  arc(x, y - 20, 20, 10, 0, PI); 
}

function createCharacter5(x,y) {
  //hair
  fill(hairColor);
  rect(340,5,80,120,60);
  stroke(2);
  
  //head
  stroke(0);
  fill (178,217,225);
  ellipse (x,y-30,50,50);
  
  fill(hairColor);
  noStroke();
  arc(x, y - 40, 45, 35, PI, TWO_PI);
  //body
  stroke(1);
  fill(bodyColor);
  
  beginShape();
  vertex(x - bodyWidth, y + 60); 
  bezierVertex(x - bodyWidth-10, y + 40, x - 10, y + 20, x, y - 5); 
  bezierVertex(x + 10, y + 20, x + bodyWidth+10, y + 40, x + bodyWidth, y + 60); 
  endShape(CLOSE);
  
  //arms
  fill(178,217,225);
  if (armShape==='ellipse') {
    push(); 
    translate(x + 20, y + 20); 
    rotate(radians(-30)); 
    ellipse(0, 0, 10, 40); 
    pop();
    push(); 
    translate(x -20, y + 20); 
    rotate(radians(30)); 
    ellipse(0, 0, 10, 40); 
    pop();
  } else if (armShape==='rectangle') {
    push();
    translate(x + 15, y + 20);
    rotate(radians(-30));
    rect(-5, 0, 10, 40);
    pop();
    push();
    translate(x - 18, y + 20);
    rotate(radians(30));
    rect(-5, 0, 10, 40);
    pop();
  }
  
  //legs
  fill(178,217,225); 
  if (legShape==='ellipse') {
    ellipse(x - 5, y + 80, 10, 40);
    ellipse(x + 5, y + 80, 10, 40);
  } else if (legShape==='rectangle') {
    rect(x - 10, y + 60, 10, 40);
    rect(x + 2, y + 60, 10, 40);
  }
  
  stroke(0);

  //eyes
  fill(0); 
  // ellipse(x - 10, y - 35, 5, 5); 
  ellipse(x + 8, y - 35, 5, 5);

  //mouth
  noFill();
  stroke(3);
  strokeWeight(1);
  arc(x+13, y - 20, 20, 10, 0, PI); 
  
}

function saveCharacter() {
  let canvas = document.getElementById("defaultCanvas1"); // Replace with your canvas ID
  if (canvas) {
    let imgData = canvas.toDataURL("image/png");
    localStorage.setItem("savedCharacter1", imgData);
  }
}


setup()
draw()
function drawLeg (x,y,angle) {
  push(); 
  translate(x, y); 
  rotate(angle);
  if (legShape==='rectangle') {
  rect(-5, 8, 10, 40); 
  } else if (legShape==='ellipse') {
    ellipse(-20,7,10,40)
  }
 pop(); 
}