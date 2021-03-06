const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const leaderboard = require('../leaderboard/leaderboard-events')
const games = require('../games/game-events')



const addEvents = function() {

    // buttons to submit sign in / up data from forms
    $('#sign-up').on('submit', onSignUp)
    $('#sign-in').on('submit', onSignIn)

    // displays auth-modal
    $('#show-auth-modal').on('click', () => {
        $('#user-modal').modal('show')
    })
    $('#show-signup-modal').on('click', () => {
        $('#signup-modal').modal('show')
    })
    $('#show-signin-modal').on('click', () => {
        $('#signin-modal').modal('show')
    })

    // displays the change password form
    $('#launch-change-password').on('click', () => {
        $('#change-password-form').toggle()
        // clear form response
        $('#changePassResponse').text('')
    })
    // submits change pass form data
    $('#change-password-form').on('submit', onChangePass)

    // triggers sign out request
    $('#sign-out').on('click', onSignOut)

}


const onSignUp = event => {
    // prevents page reload
    event.preventDefault()
  
    // get form data from the form inputs
    const data = getFormFields(event.target)
  
    // passes data to signUp function in the auth/api module.
    api.signUp(data)
      // upon successful response triggers function in ui module
      .then(ui.signUpSuccess)
      // if failure response triggers function in ui module
      .catch(ui.signUpFailure)
  }


const onSignIn = event => {
    event.preventDefault()
  
    const data = getFormFields(event.target)
    
    api.signIn(data)
      .then(ui.signInSuccess)
      // after successful ui response, then triggers gets all games function in game/game-event
    //   .then(posts.onGetAllGames)
      .then(leaderboard.onGetLeaderboard)
      .then(games.onGetMyGames)  
      .catch(ui.signInFailure)
  }
  
  const onChangePass = event => {
    event.preventDefault()
  
    const data = getFormFields(event.target)
  
    api.changePass(data)
      .then(ui.changePassSuccess)
      .catch(ui.changePassFailure)
  }
  
  const onSignOut = () => {
    api.signOut()
      .then(ui.signOutSuccess)
      .catch(ui.signOutFailure)
  }
  

module.exports = {
    addEvents,
    onSignUp,
    onSignIn,
    onChangePass,
    onSignOut
}