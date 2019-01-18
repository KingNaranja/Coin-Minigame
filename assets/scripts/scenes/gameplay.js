// game file 
const api = require('./api')
// const ui = require('./ui')

class mainScene extends Phaser.Scene {
  
    // load monster game assets 
    preload() {
      console.log('mainscene is loading assets')
      this.load.image('platform', '../public/monster/platform.png')
      this.load.image('player','../public/monster/player.png')
      this.load.image('coin', '../public/monster/coin.png')
      
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
      // 50 seconds
      this.timer = 2000
      
      
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
      this.coin.x = Phaser.Math.Between(100,600)
      this.coin.y = Phaser.Math.Between(100,300)
  
      // increment the game score
      this.score += 10
  
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

      this.timeText = this.add.text(580, 30, "Start",{font: '30px Arial', fill: 
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
    //record the game
    api.createGame(this.score)
    
    // remove the game player and coin
    this.player.destroy()
    this.coin.destroy()
       

  }
}


module.exports = { mainScene }