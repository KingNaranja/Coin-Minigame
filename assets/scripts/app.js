'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// import 'phaser'
// const scene = require('./game')

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

    
  }
  // game logic
  update() {


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
