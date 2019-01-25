const getFormFields = require('../../../lib/get-form-fields')
const api = require('./game-api')
const ui = require('./game-ui')


const onGetMyGames = () => {
    api.getMyGames()
      .then(ui.getMyGamesSuccess)
    //   .then(addPostHandlers)
      .catch(ui.getMyGamesFailure)
  }
  



module.exports = {
    onGetMyGames 
}