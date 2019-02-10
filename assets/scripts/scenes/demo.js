// game file 
const api = require('./api')
const store = require('../store')
// const ui = require('./ui')

const platformImg = 'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/platform.png'

const monsterImg = 'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/player.png'

const coinImg = 
'https://raw.githubusercontent.com/KingNaranja/Coin-Minigame/master/assets/monster/coin.png'

class Demo extends Phaser.Scene {
    constructor(){
      super({
        key:"Demo",
      })
      
    }
    init(data){
      this.msg = data.msg
    }
    // load monster game assets 
    preload() {
      this.load.image('platform', platformImg)
      this.load.image('player', monsterImg)
      this.load.image('coin', coinImg)
      
    }
  
  
    // initialize the scene
    create() {
      // attach a class that indicates this scene is running 
      $('#game').addClass('demo')


      this.cameras.main.setBackgroundColor('#EF9797') 

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

      
      let style = { font: '20px Montserrat', fill: '#fff' };
      // use style to display score in the top left corner
      this.scoreText = this.add.text(20, 20, 'Login to save your high score ', style)
  
      // assign arrow key inputs 
      this.arrow = this.input.keyboard.createCursorKeys();
      
      // set game bounderies so that player 
      // can not fall through ground platform 
      this.physics.world.bounds.height =  350 // game world height == 400
      
      
      // initialize the current state of the game timer
      // timer is gameTime ** 100 
      this.timer = 1000
      
      
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
    let restartDemo = this.restartDemo
      
    // add user interactive text
    restartDemo = this.add.text(120,250, 'Sign up for more!', { fontFamily: "Montserrat", fontSize: 30, color: "#E4FDE1" })
    // restart gameplay scene on click/touch
    restartDemo.setInteractive()
    restartDemo.on('pointerdown', () => {this.scene.restart()})

    // return to main menu
    this.scene.start('MainMenu')
    $('#game').removeClass('demo')
    // $('#game-container').toggle('fast')
  }
}

store.myGame.scenes.push(Demo)

module.exports = { Demo }