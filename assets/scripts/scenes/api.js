const store = require('../store')
const ui = require('./ui')
const config = require('../config')
const leaderboard = require('../leaderboard/leaderboard-events')


// send a post request to create a game 
const createGame = score => {
  fetch( config.apiUrl + '/games',{
    method:"POST",
    body: JSON.stringify({
      game: {
        score:score
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": `Token token=${store.user.token}`

    }
  
  })
    .then(response =>{return response.json()})
    .then(ui.createGameSuccess)
    

}

// updates the players total score for the leaderboard
const updateScore = (score) => {
  fetch( config.apiUrl + '/users/' + store.user._id,{
    method:"PATCH",
    body: JSON.stringify({
      user: {
        totalScore:score
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": `Token token=${store.user.token}`

    }
  
  })
  .then(response =>{return response.json()})
  .then(leaderboard.onGetLeaderboard)
  .then(ui.newHighScore)
}





module.exports = {
  createGame,
  updateScore
}