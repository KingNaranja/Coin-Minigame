const myGame = require('../store')

// const logoImg = 
// 'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/logo.png'

const logoImg = require('../../monster/logo.png')

class menu extends Phaser.Scene {
  preload(){
    this.load.image('logo', logoImg)
  }
  
  create(){
    this.logo = this.add.image(240,100,'logo')  
    // reduce the size of the logo 
    this.logo.scaleX = .5
    this.logo.scaleY = .5

  }

  update() {

  }
}
// add scene to list of scenes 
myGame.scenes.push(menu)
console.log('loading main menu')

module.exports = {menu}