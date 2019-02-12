const showToast = require('../toastr')
const store = require('../store')

const createGameSuccess = data => {
    showToast('creategame-pass','game')
}

const newHighScore = () => {
    showToast('high-score','game')
}


module.exports = {
    createGameSuccess,
    newHighScore 
}