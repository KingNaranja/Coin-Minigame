'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// import 'phaser'
const scene = require('./game')

$(() => {
  
class mainScene {
  // load game assets
  preload() {
    console.log('this loaded')
    this.load.image('player','./assets/monster/player.png')
    this.load.image('coin', './assets/monster/coin.png')
  }
  // initialize the scene 
  create() {
    // the player is stored inside this.player 
    // create player with phsyics engine 
    this.player = this.physics.add.sprite(100,180,'player')
    this.coin = this.physics.add.sprite(300,300, 'coin')

    // the game score is stored in a variable
    this.score = 0 
    let style = { font: '20px Arial', fill: '#fff' };
    // use style to display score in the top left corner
    this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);

    // define arrow key inputs 
    this.arrow = this.input.keyboard.createCursorKeys();
  }
  // game logic
  update() {
    // check if player is overlapping
    // If the player is overlapping with the coin
    if (this.physics.overlap(this.player, this.coin)) {
      // Call the new hit() method
      this.hit();
    }   

    // Handle horizontal movements
    if (this.arrow.right.isDown) {
      // If the right arrow is pressed, move to the right
          this.player.x += 3;
    } else if (this.arrow.left.isDown) {
      // If the left arrow is pressed, move to the left
          this.player.x -= 3;
    } 
    
    // Do the same for vertical movements
    if (this.arrow.down.isDown) {
      this.player.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3;
    } 
    

  }

  // every time the player grabs a coin
  // it is moved to a new position
  hit() {
    // randomly change the position of x and y
    this.coin.x = Phaser.Math.Between(100,600)
    this.coin.y = Phaser.Math.Between(100,300);

    // increment the game score
    this.score += 10

    // display the updated score on the screen
    this.scoreText.setText('score: ' + this.score)
  }
}

const config = {
  type: Phaser.auto,
  width: 700,
  height: 400,
  backgroundColor: '#3498db',
  parent: 'game',
  scene:mainScene,
  physics: {default: 'arcade'}
  

}


const game = new Phaser.Game(config)


})
