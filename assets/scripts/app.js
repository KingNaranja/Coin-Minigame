'use strict'

const authEvents = require('./auth/events')

// import game scenes  
import {Menu} from './scenes/main-menu'
import {Demo} from './scenes/demo'
import {mainScene} from './scenes/gameplay'


const store = require('./store')
const leaderboard = require('./leaderboard/leaderboard-events')
const gameEvents = require('./games/game-events')

$(() => {
  
  
  const game = new Phaser.Game(store.config)

  // adds user auth event handlers 
  authEvents.addEvents()
  // get current leaderboard rankings 
  leaderboard.onGetLeaderboard()


  // if user is a guest 
  $('#demo').on('click', gameEvents.onDemoGame)
  
  

})
