'use strict'

const authEvents = require('./auth/events')

// import game scenes  
import {Menu} from './scenes/main-menu'
import {Demo} from './scenes/demo'
import {MainScene} from './scenes/gameplay'


const store = require('./store')
const leaderboard = require('./leaderboard/leaderboard-events')
const gameEvents = require('./games/game-events')

$(() => {
  
  // if user is on a mobile device,
  // center & scale the game to that device 
  if (screen.width < 600){
    store.config.scale = {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 500,
      height: 400,
      parent: 'game',
    }
  }

  // create a Phaser game instance 
  const game = new Phaser.Game(store.config)

  // adds user auth event handlers 
  authEvents.addEvents()
  // get current leaderboard rankings 
  leaderboard.onGetLeaderboard()


  // while user is not logged in 
  // a demo game is available
  $('#demo').on('click', gameEvents.onDemoGame)
  
  

})
