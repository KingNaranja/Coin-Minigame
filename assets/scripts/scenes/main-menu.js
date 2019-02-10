const store = require('../store')
// const mainScene = require('../scenes/gameplay')

const logoImg = 
'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/logo.png'


class Menu extends Phaser.Scene {
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
    playButton = this.add.text(200,250, 'PLAY', { fontFamily: "Montserrat", fontSize: 40, color: "#E4FDE1" })
    // make text interactive with user
    // and emit events when the game object is touched or clicked
    playButton.setInteractive()
    
    
    // start the gameplay scene 
    playButton.on('pointerdown', ()=>{
      this.demo()
    })
    
  }

  update() {

  }

  demo(){

    // check if user is currently online
    // let nextScene
    // if (store.user) {
    //   nextScene = 'GamePlay'
    // } 

    console.log('the store is', store)
    // if user is not online 
    if (store.user) {
      // console.log(scene)
      console.log('scene is demo')
      this.scene.start('GamePlay')
    } else {
      // console.log(scene)
      console.log('scene is gameplay')
      this.scene.start('Demo' )
    }
  }
}
// add scene to list of scenes 
store.myGame.scenes.push(Menu)

module.exports = {Menu}