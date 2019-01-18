const store = require('../store')
const ui = require('./ui')

// send a post request to create a game 
const createGame = score => {
  fetch('http://localhost:4741/games',{
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





module.exports = {createGame}