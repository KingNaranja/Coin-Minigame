// game file 
const api = require('./api')
const store = require('../store')
// const ui = require('./ui')
const gameEvents = require('../games/game-events')



const platformImg = 'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/platform.png'

const monsterImg = 'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/player.png'

const coinImg = 
'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/coin.png'

class MainScene extends Phaser.Scene {
    constructor(){
      super({key:"GamePlay"})
      
    }
    // load monster game assets 
    preload() {
      this.load.image('platform', platformImg)
      this.load.image('player', monsterImg)
      this.load.image('coin', coinImg)
      
    }
  
  
    // initialize the scene
    create() {

      // set world gravity 
      this.physics.world.gravity.y = 50
      
      
      // create a platform game object 
      // that is immovable 
      this.platform = this.physics.add.sprite(250,5, 'platform')
      this.platform.body.moves = false
      
      
      // the player is stored inside this.player 
      // collideWorldbounds prevents the player from falling through the floor
      this.player = this.physics.add.sprite(100,180,'player')
      this.player.body.collideWorldBounds = true 
       
      
      // creates a coin object
      // that is immovable  
      this.coin = this.physics.add.sprite(300,300, 'coin')
      this.coin.body.moves = false
      
      
      this.score = 0 // the game score is stored in a variable
      

      
      let style = { font: '20px Arial', fill: '#fff' };
      // use style to display score in the top left corner
      this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style)
  
      // assign arrow key inputs 
      this.arrow = this.input.keyboard.createCursorKeys();
      
      // set game bounderies so that player 
      // can not fall through ground platform 
      this.physics.world.bounds.height =  350 // game world height == 400
      
      
      // initialize the current state of the game timer
      // timer is gameTime ** 100 
      this.timer = 2500
      
      
      // create a game timer for this scene's player 
      this.createTimer()

    }

    

    // game logic
    update() {
      // update the in-game time
      this.updateTimer()

      
      // check if player is overlapping
      // If the player is overlapping with the coin
      if (this.physics.overlap(this.player, this.coin)) {
        // Call the new hit() method
        this.hit();
      }   
      
      // Handle horizontal movements
      if (this.arrow.right.isDown) {
        // If the right arrow is pressed, move to the right
            this.player.x += 3
      } else if (this.arrow.left.isDown) {
        // If the left arrow is pressed, move to the left
            this.player.x -= 3
      } 
      
      // handle vertical movements
      if (this.arrow.down.isDown) {
        this.player.y += 3
      } else if (this.arrow.up.isDown) {
        this.player.y -= 3
      } 
      
  
    }
  
    // every time the player grabs a coin
    // it is moved to a new position
    hit() {

      // randomly change the position of x and y
      this.coin.x = Phaser.Math.Between(100,500)
      this.coin.y = Phaser.Math.Between(100,300)
  
      // increment the game score
      if (store.user){this.score += 10}
  
      // display the updated score on the screen
      this.scoreText.setText('score: ' + this.score)
      
      // tweens modify object properties over a period of time
      // creates a tween to enlarge player for each hit
      this.tweens.add({
        targets: this.player,
        duration: 400,
        scaleX: 1.5,
        scaleY: 1.5,
        yoyo: true
      })
    }

    createTimer(){

      this.timeText = this.add.text(460, 30, "Start",{font: '30px Arial', fill: 
      '#FFFFFF', align: 'center'})
      this.timeText.setOrigin(0.5, 0.5)

  }
    
  
  updateTimer() {
    if ( this.timer > 0 ) {
      // decrement the timer 
      this.timer--
      let gameTime = Math.round(this.timer / 100)
      this.timeText.setText(gameTime)

    }else if (this.timer == 0){
      this.gameOver()
      this.timer = null
  
    }
  }

  gameOver() {
    
    // remove the game player and coin
    this.player.destroy()
    this.coin.destroy()
    let restartGame = this.restartGame

    //record the game
    api.createGame(this.score) // records game
    // if user set a high score record the high score 
    if (this.score > store.user.totalScore) {
      api.updateScore(this.score)
      
    }

    // get your newest game and high score
    gameEvents.onGetMyGames()
    
    // add user interactive text
    restartGame = this.add.text(120,250, 'play again?', { fontFamily: "Montserrat", fontSize: 30, color: "#E4FDE1" })
    // restart gameplay scene on click/touch
    restartGame.setInteractive()
    restartGame.on('pointerdown', () => {this.scene.restart()})

  }
}

store.myGame.scenes.push(MainScene)

module.exports = { MainScene }