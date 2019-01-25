const getFormFields = require('../../../lib/get-form-fields')
const api = require('./game-api')
const ui = require('./game-ui')


const addGameHandlers = () => {
    $('.delete-game').on('click', onDeleteGame)
}

const onGetMyGames = () => {
    api.getMyGames()
      .then(ui.getMyGamesSuccess)
      .then(addGameHandlers)
      .catch(ui.getMyGamesFailure)
  }
  
  const onDeleteGame = () => {
    event.preventDefault()
  
    const gameId = $(event.target).closest('section').data('id')
    api.deleteGame(gameId)
      .then(ui.deleteGameSuccess)
      // calls the get all my games to show that the game has been deleted
      .then(onGetMyGames)
      .catch(ui.deleteGameFaliure)
  
  }

  
  


module.exports = {
    onGetMyGames,
    onDeleteGame
}