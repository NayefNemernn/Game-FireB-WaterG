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
  this.load.image("bg", "assets/bg.png");
  this.load.image("ground", "assets/platform.png");
  this.load.image("diamond", "assets/diamond.png");
  this.load.image("bomb", "assets/bomb.png");
  this.load.spritesheet("watergirl", "assets/watergirl.png", {
    frameWidth:   42,
    frameHeight: 46,
  });

  let characterImageURL1 = localStorage.getItem("savedCharacter1");

  console.log("characterImageURL", characterImageURL1);

  // Check if a character image URL was retrieved
  if (characterImageURL1) {
    // Load spritesheet using retrieved URL
    this.load.spritesheet("watergirl", characterImageURL1, {
      frameWidth: 40,
      frameHeight: 48,
    });
  } else {
    // Fallback or default loading if no image is found in local storage
    this.load.spritesheet("watergirl", "assets/fireboy-character.png", {
      frameWidth: 60,
      frameHeight: 69,
    });
  }
  let characterImageURL = localStorage.getItem("savedCharacter");

  console.log("characterImageURL", characterImageURL);

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
  this.add.image(400, 300, "bg").setScale(3, 1.3);
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 670, "ground").setScale(6, 0.5).refreshBody();
  platforms.create(800, 0, "ground").setScale(6, 0.8).refreshBody();
  platforms.create(1505, 320, "ground").setScale(0.05, 14).refreshBody();
  platforms.create(10, 320, "ground").setScale(0.05, 14).refreshBody();
  platforms.create(600, 450, "ground").setScale(1.5, 0.5).refreshBody();
  platforms.create(30, 300, "ground").setScale(0.2, 0.3).refreshBody();
  platforms.create(1500, 550, "ground").setScale(0.2, 0.3).refreshBody();
  platforms.create(895, 220, "ground").setScale(1.43, 0.5).refreshBody();

  player = this.physics.add.sprite(75, 450, "fireboy");
  player1 = this.physics.add.sprite(100, 450, "watergirl").setScale(1);

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player1.setBounce(0.2);
  player1.setCollideWorldBounds(true);

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
    frames: this.anims.generateFrameNumbers("fireboy", { start: 2, end: 3  }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "left1",
    frames: this.anims.generateFrameNumbers("watergirl", { start: 1, end: 0 }),
    frameRate: 15,
    repeat: -1,
  });

  this.anims.create({
    key: "turn1",
    frames: [{ key: "watergirl", frame: 2 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right1",
    frames: this.anims.generateFrameNumbers("watergirl", { start: 3, end: 4 }),
    frameRate: 10,
    repeat: -1,
  });

  cursors = this.input.keyboard.createCursorKeys();
  cursors1 = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
  });

  diamonds = this.physics.add.group({
    key: "diamond",
    repeat: 11,
    setXY: { x: 80, y: 0, stepX: 70 },
  });

  diamonds.children.iterate(function (child) {
    child
      .setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
      .setScale(0.1)
      .refreshBody();
  });

  bombs = this.physics.add.group();

  scoreText = this.add.text(28, 4, "score: 0", {
    fontSize: "25px",
    fill: "white",
  });

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(diamonds, platforms);
  this.physics.add.collider(bombs, platforms);
  this.physics.add.collider(player1, platforms);

  this.physics.add.overlap(player, diamonds, collectdiamond, null, this);
  this.physics.add.collider(player, bombs, hitBomb, null, this);
  this.physics.add.overlap(player1, diamonds, collectdiamond, null, this);
  this.physics.add.collider(player1, bombs, hitBomb, null, this);
}

function update() {
  if (gameOver) {
    //navigate to gameover
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

  if (cursors1.left.isDown) {
    player1.setVelocityX(-160);
    player1.anims.play("left1", true);
  } else if (cursors1.right.isDown) {
    player1.setVelocityX(160);
    player1.anims.play("right1", true);
  } else {
    player1.setVelocityX(0);
    player1.anims.play("turn1");
  }

  if (cursors1.up.isDown && player1.body.touching.down) {
    player1.setVelocityY(-330);
  }
}

function collectdiamond(player, diamond) {
  diamond.disableBody(true, true);

  score += 10;
  scoreText.setText("Score: " + score);

  if (diamonds.countActive(true) === 0) {
    diamonds.children.iterate(function (child) {
      child.enableBody(true, child.x, 0, true, true);
    });

    var x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);

    var bomb = bombs.create(x, 16, "bomb");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;

    checkScoreAndNextLevel();
  }
}

function displayWinMessage(message) {
  gameOver = true;
  this.add
    .text(400, 300, message, { fontSize: "64px", fill: "#fff" })
    .setOrigin(0.5);
  this.physics.pause();
}

function hitBomb(player, bomb) {
  this.physics.pause();
  player.setTint(0xff0000);
  player.anims.play("turn");
  gameOver = true;
}

function checkScoreAndNextLevel() {
  if (score >= 500) {
    window.location.href = "level2.html";
  }
}
