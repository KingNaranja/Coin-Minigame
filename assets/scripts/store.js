'use strict'

const myGame = {
    // define our game state
    scenes : [],
    
}

// initialize phaser game 
const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 400,
    backgroundColor: '#3498db',
    parent: 'game',
    scene: myGame.scenes,
    physics: {default: 'arcade'}
    // scale: 
    
  }

module.exports = {
    myGame,
    config
}
