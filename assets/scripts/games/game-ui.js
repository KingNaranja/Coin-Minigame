const showToast = require('../toastr')
const myGamesTemplate = require('../templates/get-my-games.handlebars')

const getMyGamesSuccess = data => {
    // pass api data into handlebars template 
    const myGames = myGamesTemplate({ games: data.games })
    // append formatted template to the DOM
    $('#myGames').html(myGames)
}

const getMyGamesFailure = data => {
    console.log('cant GET my games')
    showToast('game', 'allmygames-fail')
    
}


const deleteGameSuccess = () => {
    showToast('game', 'deletegame-pass')
}

const deleteGameFailure = () => {
    console.log('cant delete your game !')
    showToast('game', 'deletegame-fail')
    
}
module.exports = {
    getMyGamesFailure,
    getMyGamesSuccess,
    deleteGameSuccess,
    deleteGameFailure
}