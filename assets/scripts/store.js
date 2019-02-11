'use strict'

const myGame = {
    // define our game state
    scenes : [],
    
}

// initialize phaser game 
const config = {
    type: Phaser.auto,
    width: 500,
    height: 400,
    backgroundColor: '#3498db',
    parent: 'game',
    scene: myGame.scenes,
    physics: {default: 'arcade'},
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
    
  }

module.exports = {
    myGame,
    config
}
