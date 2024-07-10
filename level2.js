var config = {
  type: Phaser.AUTO,
  width: "100%",
  height: "100%",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 350 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var player;
var diamonds;
var bombs;
var platforms;
var cursors;
var cursors1;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload() {
  // Load other assets as usual
  this.load.image("bg", "assets/bg.png");
  this.load.image("ground", "assets/platform.png");
  this.load.image("box", "assets/box.png");
  this.load.image("diamond", "assets/diamond.png");
  this.load.image("bomb", "assets/bomb.png");
  this.load.image("stone", "assets/stone.png");
  this.load.image("riverred", "assets/river-red.png");
  this.load.image("riverblue", "assets/river-blue.png");
  this.load.image("rivergreen", "assets/green-river.png");

  // Retrieve character image URL from local storage

  this.load.spritesheet("watergirl", "assets/fireboy-character.png", {
    frameWidth: 60,
    frameHeight: 69,
  });

  let characterImageURL = localStorage.getItem("savedCharacter");
  console.log("characterImageURL", characterImageURL);

  // Check if a character image URL was retrieved
  if (characterImageURL) {
    // Load spritesheet using retrieved URL
    this.load.spritesheet("fireboy", characterImageURL, {
      frameWidth: 40,
      frameHeight: 48,
    });
  } else {
    // Fallback or default loading if no image is found in local storage
    this.load.spritesheet("fireboy", "assets/fireboy-character.png", {
      frameWidth: 60,
      frameHeight: 69,
    });
  }
}

function create() {
  // Create character fireboy

  // Colliders for the character
  this.riverred = this.physics.add.staticGroup();
  this.riverblue = this.physics.add.staticGroup();
  this.rivergreen = this.physics.add.staticGroup();
  this.stone = this.physics.add.staticGroup();

  // A simple background for our game
  this.add.image(400, 300, "bg").setScale(3, 1.3);

  this.stone.create(1422, 615, "stone").setScale(1, 1.3).refreshBody();
  this.riverred.create(622, 690, "riverred").setScale(0.5, 0.5).refreshBody();
  this.rivergreen
    .create(950, 470, "rivergreen")
    .setScale(0.5, 0.5)
    .refreshBody();
  this.riverblue.create(900, 690, "riverblue").setScale(0.5, 0.5).refreshBody();
  this.riverblue.create(600, 209, "riverred").setScale(0.5, 0.5).refreshBody();
  this.riverblue.create(650, 428, "riverred").setScale(0.5, 0.5).refreshBody();
  this.riverblue
    .create(300, 380, "rivergreen")
    .setScale(0.5, 0.5)
    .refreshBody();
  this.riverblue.create(900, 209, "riverblue").setScale(0.5, 0.5).refreshBody();
  this.stone.setDepth(4);
  this.riverred.setDepth(4);
  this.riverblue.setDepth(4);
  this.rivergreen.setDepth(4);

  // The platforms group contains the ground and the 2 ledges we can jump on
  platforms = this.physics.add.staticGroup();

  // Here we create the ground.
  // Scale it to fit the width of the game (the original sprite is 400x32 in size)
  platforms.create(300, 710, "ground").setScale(6, 0.7).refreshBody();
  platforms.create(800, 10, "ground").setScale(6, 0.8).refreshBody();
  // create wall-right
  platforms.create(1515, 320, "ground").setScale(0.05, 14).refreshBody();
  // create wall-left
  platforms.create(20, 320, "ground").setScale(0.05, 14).refreshBody();

  // create ledges
  platforms.create(180, 400, "ground").setScale(1, 0.5).refreshBody(); // in the center
  platforms.create(20, 580, "ground").setScale(0.7, 0.5).refreshBody(); // wall under character-girl
  platforms.create(680, 440, "ground").setScale(0.25, 0.5).refreshBody();
  platforms.create(970, 480, "ground").setScale(0.5, 0.5).refreshBody(); // in the center 2nd
  // bottom long ledge
  platforms.create(902, 220, "ground").setScale(1.43, 0.5).refreshBody(); // top long ledge
  // platforms.create(100, 380, "ground").setScale(0.3, 0.3).refreshBody();// no need
  platforms.create(370, 380, "box").setScale(0.05, 0.2).refreshBody(); // click 2osonser 1

  // The player and its settings
  player = this.physics.add.sprite(50, 450, "watergirl");
  player1 = this.physics.add.sprite(50, 450, "fireboy");
  // Player physics properties. Give the little guy a slight bounce.
  player.setBounce(0.2);
  player.setCollideWorldBounds(true); // to prevent exit canvas walls
  player1.setBounce(0.2);
  player1.setCollideWorldBounds(true); // to prevent exit canvas walls

  // Our player animations, turning, walking left and walking right.
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("fireboy", { start: 1, end: 0 }),
    frameRate: 15,
    repeat: -1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "fireboy", frame: 2 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("fireboy", { start: 3, end: 4 }),
    frameRate: 10,
    repeat: -1,
  });

  // Input Events: keys(up down left right)
  cursors = this.input.keyboard.createCursorKeys();

  // Some diamonds to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
  diamonds = this.physics.add.group({
    key: "diamond",
    repeat: 11,
    setXY: { x: 80, y: 0, stepX: 70 },
  });

  diamonds.children.iterate(function (child) {
    // Give each diamond a slightly different bounce
    child
      .setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
      .setScale(0.1)
      .refreshBody();
  });

  bombs = this.physics.add.group();

  // The score
  scoreText = this.add.text(28, 4, "score: 0", {
    fontSize: "25px",
    fill: "white",
  });

  cursors1 = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
  });

  // Collide the player and the diamonds with the platforms
  this.physics.add.collider(player, platforms);
  this.physics.add.collider(player1, platforms);
  // this.physics.add.collider(player, box);
  // this.physics.add.collider(player1, box);
  this.physics.add.collider(player, this.ground);
  this.physics.add.collider(player1, this.ground);
  this.physics.add.collider(diamonds, platforms);
  this.physics.add.collider(bombs, platforms);
  this.physics.add.collider(player, this.bluePlatforms); // used in next level
  this.physics.add.collider(player1, this.bluePlatforms); // used in next level
  // this.physics.add.collider(player, this.redPlatforms);
  this.physics.add.collider(player, this.riverblue, hitRiverBlue, null, this);
  this.physics.add.collider(player, this.riverred, hitRiverBlue, null, this);
  this.physics.add.collider(player, this.rivergreen, hitRiverBlue, null, this);
  this.physics.add.collider(player, this.riverred);
  this.physics.add.collider(player, this.stone);
  this.physics.add.collider(player1, this.riverred);
  this.physics.add.collider(player1, this.stone);
  // Checks to see if the player overlaps with any of the diamonds, if he does call the collectdiamond function
  this.physics.add.overlap(player, diamonds, collectdiamond, null, this);
  this.physics.add.collider(player, bombs, hitBomb, null, this);
  this.physics.add.overlap(player1, diamonds, collectdiamond, null, this);
  this.physics.add.collider(player1, bombs, hitBomb, null, this);
}

function update() {
  if (gameOver) {
    //navigate to gameover.html
    window.location.href = "gameover.html";
    return;
  }

  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("turn");
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }

  /////////////////////////////////////////////////////////
  if (cursors1.left.isDown) {
    player1.setVelocityX(-160);
    player1.anims.play("left", true);
  } else if (cursors1.right.isDown) {
    player1.setVelocityX(160);
    player1.anims.play("right", true);
  } else {
    player1.setVelocityX(0);
    player1.anims.play("turn");
  }

  if (cursors1.up.isDown && player1.body.touching.down) {
    player1.setVelocityY(-330);
  }
  /////////////////////////////////////////////////////////
}

function collectdiamond(player, diamond) {
  diamond.disableBody(true, true);

  // Add and update the score
  score += 10;
  scoreText.setText("Score: " + score);

  if (diamonds.countActive(true) === 0) {
    // A new batch of diamonds to collect
    diamonds.children.iterate(function (child) {
      child.enableBody(true, child.x, 0, true, true);
    });

    var x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400); // if else

    var bomb = bombs.create(x, 16, "bomb");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;

    checkScoreAndNextLevel();
  }
}

function hitBomb(player, bomb) {
  this.physics.pause();
  player.setTint(0xff0000);
  player.anims.play("turn");
  gameOver = true;
}

function hitRiverBlue(player, riverblue, riverred, rivergreen) {
  this.physics.pause();
  player.setTint(0x0000ff); // change color to blue to indicate losing
  player.anims.play("turn");
  gameOver = true;
  // player.disableBody();
}

function checkScoreAndNextLevel() {
  if (score >= 500) {
    // Redirect to the next level page
    window.location.href = "Win.html"; // add level 2 URL
  }
}
