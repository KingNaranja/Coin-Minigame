const showToast = require('../toastr')

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