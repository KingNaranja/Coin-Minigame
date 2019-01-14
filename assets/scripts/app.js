'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// import 'phaser'
import {mainScene} from './scenes/gameplay'

$(() => {
  

// initialize phaser game 
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
