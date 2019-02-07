const myGame = require('../store')
// const mainScene = require('../scenes/gameplay')

// const logoImg = 
// 'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/logo.png'

const logoImg = require('../../monster/logo.png')

class menu extends Phaser.Scene {
  constructor(){
    super({key:"MainMenu"}) // unique identifier for Phaser scenes 
  }

  preload(){
    this.load.image('logo', logoImg)
  }
  
  create(){
    let logo = this.logo 
    logo = this.add.image(240,100,'logo')  
    // reduce the size of the logo 
    logo.scaleX = .5
    logo.scaleY = .5

    let playButton = this.playButton
    playButton = this.add.text(180,250, 'Play', { fontFamily: "Montserrat", fontSize: 74, color: "#E4FDE1" })
    // make text interactive with user
    // and emit events 
    playButton.setInteractive()
    // when the game object is touched or clicked
    // start the gameplay scene 
    playButton.on('pointerdown', () => { this.scene.start('GamePlay')})
    
  }

  update() {

  }
}
// add scene to list of scenes 
myGame.scenes.push(menu)

module.exports = {menu}