import 'toastr'
const toastr = require('toastr')
const store = require('./store')

// Toast constructor function takes in type, css, and msg as parameters.
function Toast (type, css, msg) {
  this.type = type
  this.css = css
  this.msg = msg
}

// showToast is called with the auth/ui and game/game-ui modules
// an example of action would be 'signup-pass',
// an example of event would be 'ui'
function showToast (action, event, nickname) {
  // configure all toastr timeouts and position
  toastr.options.positionClass = 'toast-top-full-width'
  toastr.options.extendedTimeOut = 0
  // total duration of the message in milliseconds
  toastr.options.timeOut = 1000
  // fade out time
  toastr.options.fadeOut = 250
  // fade in time
  toastr.options.fadeIn = 250





  // uiToast is an object that defines which argument should be passed into the Toast constuctor
  const uiToasts = {
    // when signup-pass is passed to showToast, it creates a Toast instance with
    // 'success' as the 'type'
    // 'toast-top-right' as the 'css'
    // and 'Signed-Up Successfully!' as the 'msg'
    'signup-pass': new Toast('success', 'toast-top-right', 'Signed-Up Successfully!'),
    'signout-pass': new Toast('success', 'toast-top-right', 'See you next time'),
    'signin-pass': new Toast('success', 'toast-top-right', `Welcome back ${store.user.nickname}`),
    'changepass-success': new Toast('success', 'toast-top-right', 'Successfully changed password'),
    'signin-fail': new Toast('warning', 'toast-top-right', 'Failed to Sign-In! Try Again?'),
    'changepass-fail': new Toast('warning', 'toast-top-right', 'Failed to change password'),
    'signup-fail': new Toast('warning', 'toast-top-right', 'Failed to Sign-Up! Try Again?'),
    'signout-fail': new Toast('warning', 'toast-top-right', 'You couldnt signed out!')
  }

  const gameToasts = {
    'creategame-pass': new Toast('success', 'toast-top-right', 'Times Up!'),
    'creategame-fail': new Toast('warning', 'toast-top-right', 'Failed to save game!'),

    'allgames-pass': new Toast('info', 'toast-top-right', 'Loading all games...'),
    'allgames-fail': new Toast('warning', 'toast-top-right', 'Failed to load all games!'),

    'deletegame-pass': new Toast('success', 'toast-top-right', 'Removing game...'),
    'deletegame-fail': new Toast('warning', 'toast-top-right', 'Failed to remove your game!'),

    'allmygames-pass': new Toast('info', 'toast-top-right', 'Loading all of your games...'),
    'allmygames-fail': new Toast('warning', 'toast-top-right', 'Failed to load your games!'),
    'demo-game': new Toast('info', 'toast-top-right', 'Please wait for demo to complete...'),
    'high-score': new Toast('success', 'toast-top-right', 'New High Score!')

  }




  // find and display correct Toaster based on event param
  // if event is truthy run this switch
  switch (event) {
    // if event is 'ui'
    case 'ui':
      // assign the Toast constructor instance to a variable
      const uiToast = uiToasts[action]
      // defines toastr notifcation position based on constuctor instance css
      toastr.options.positionClass = uiToast.css
      // calls toastr, which will display the message with the type and msg from the constructor instance
      toastr[uiToast.type](uiToast.msg)
      break
    // if event is game
    case 'game':
      const gameToast = gameToasts[action]
      toastr.options.positionClass = gameToast.css
      toastr[gameToast.type](gameToast.msg)
      break
  }
}

module.exports = showToast