'use strict'

const authEvents = require('./auth/events')
import {menu} from './scenes/main-menu'
import {mainScene} from './scenes/gameplay'

const myGame = require('./store')


$(() => {
  
  

  // initialize phaser game 
  const config = {
    type: Phaser.auto,
    width: 500,
    height: 400,
    backgroundColor: '#3498db',
    parent: 'game',
    scene: myGame.scenes,
    physics: {default: 'arcade'}
    
  }
  const game = new Phaser.Game(config)

  // adds user auth event handlers 
  authEvents.addEvents()
  
  

})
