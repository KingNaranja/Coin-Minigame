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
  $('#game-container').toggle()
  // $('#sign-up').toggle()
  // $('#sign-in').toggle()
  

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

  // removes user data from the local store
  store.user = ''
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