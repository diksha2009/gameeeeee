var bg, bgImg;
var player, shooterImg, shooter_shooting;
var bullet, bulletImg;
var edges
var zombie, zombieImg

function preload() {
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  bulletImg = loadImage("assets/download-bullet-image-old-10.png");
  bgImg = loadImage("assets/bg.jpeg");
  zombieImg=loadImage("assets/zombie.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
  bg.addImage(bgImg);
  bg.scale = 1.1;

  //creating the player sprite
  player = createSprite(displayWidth - 1300, displayHeight - 300, 50, 50);
  player.addImage(shooterImg);
  player.scale = 0.3;

  player.debug = true;
  //  player.debug = false
  // player.Debug =false
  // Player.debug = true

  //player.Collider("rectagle",0,0,300,300)
  //player.setcollider("rectangle",0,0)
  player.setCollider("rectangle", 0, 0, 300, 300);
  // player.Setcollider("rectangle",0,0,300,300)
}

function draw() {
  background(0);

  edges=createEdgeSprites()
  player.collide(edges)

  //moving the player up and down and making the game mobile compatible using touches
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 30;
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 30;
  }

  //release bullets and change the image of shooter to shooting position when space is pressed
  if (keyWentDown("space")) {
    bullet = createSprite(player.x+20,player.y);
    player.addImage(shooter_shooting);
    bullet.addImage("bullet", bulletImg);
    bullet.velocityX = 6;
    bullet.scale=0.05
  }

  //player goes back to original standing image once we stop pressing the space bar
  else if (keyDown("space")) {
    player.addImage( shooter_shooting )
    // player.addImage()
    // player.addImage(shooterImg);
    //  player.addImage(shooter_1.png)
  }
  if(player.y<80){
    player.y=80
  }
  if(player.y>630){
    player.y=630
  }

  drawSprites();
  spawnZombies()
}

function spawnZombies(){



if(frameCount%60===0){
  zombie=createSprite(width-20,random(300,1000))
  zombie.addImage("zombie",zombieImg)
  zombie.scale=0.1
  zombie.velocityX = -4
  zombie.debug=true
  zombie.setCollider("rectangle",0,0,1000,1000)
  zombie.lifetime=200
}
}
