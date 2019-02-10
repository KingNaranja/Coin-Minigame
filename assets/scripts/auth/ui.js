const store = require('../store')
const showToast = require('../toastr')
// showToast requires ui action as param to display
// feedback to the user


// creates ui response showing successful sign up
const signUpSuccess = () => {
  // clear form values for signup form
  $('#sign-up')[0].reset()

  // showToast takes two arguments, (action, event)
  showToast('signup-pass', 'ui')
  // hide modal
  $('#signup-modal').modal('hide')
  $('#game').removeClass('demo')

}

const signUpFailure = () => {
  // clear form values
  $('#sign-up')[0].reset()

  showToast('signup-fail', 'ui')
}

const signInSuccess = data => {
  // clear form values
  $('#sign-in')[0].reset()

  // assigns api response data into the store object within store.js
  // the data's user object is assigned to a user object within the store
  store.user = data.user

  // user login feedback
  showToast('signin-pass', 'ui')

  // toggle view for online users
  if ( $('#game').is(':hidden') ) {
    $('#game-container').toggle('fast')
  }
  $('#show-auth-modal').toggle('fast')
  // hide modal
  $('#signin-modal').modal('hide')

  // Remove auth menu items 
  $('#demo').toggle('fast')
  $('#show-signin-modal').toggle()
  $('#show-signup-modal').toggle()


  // if demo is currently running 
  if ( $('#game').hasClass('demo') ) {
		showToast('demo-game', 'game')
	}


  return ''
}

const signInFailure = () => {
  // clear form values
  $('#sign-in')[0].reset()

  showToast('signin-fail', 'ui')
}

const changePassSuccess = () => {
  // $('#change-pass-form')[0].reset()

  showToast('changepass-success', 'ui')

  
  $('.pass-form').val('')
  // hides modal
  $('#user-modal').modal('hide')
}

const changePassFailure = () => {
  // clear password form
  $('.pass-form').val('')

  showToast('changepass-fail', 'ui')
}

const signOutSuccess = () => {
  showToast('signout-pass', 'ui')

  // close user-auth modal
  $('#user-modal').modal('hide')

  // removes game container from view 
  $('#game-container').toggle('fast')

  // removes user data from the local store
  store.user = ''

  // bring user back to initial view 
  $('#demo').toggle('fast')
  $('#show-signin-modal').toggle()
  $('#show-signup-modal').toggle()
  $('#show-auth-modal').toggle('fast')
}

const signOutFailure = () => {
  showToast('signout-fail', 'ui')

  store.user = ''
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}