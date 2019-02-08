const getFormFields = require('../../../lib/get-form-fields')
const api = require('./leaderboard-api')
const ui = require('./leaderboard-ui')



const onGetLeaderboard = () => {
  if (event) { event.preventDefault() }
  // send a fetch request to the leaderboard 
  api.getLeaderboard()
    .then(data => {
      ui.getLeaderboardSuccess(data)})
    .catch(ui.getLeaderboardFailure)
}

module.exports = {
  onGetLeaderboard
}