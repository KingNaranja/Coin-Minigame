const showToast = require('../toastr')
const myGamesTemplate = require('../templates/get-my-games.handlebars')

const getMyGamesSuccess = data => {
    console.log('the api data is', data)
    // pass api data into handlebars template 
    const myGames = myGamesTemplate({ games: data.games })
    // append formatted template to the DOM
    $('#myGames').html(myGames)
}

const getMyGamesFailure = data => {
    console.log('cant GET my games')
    showToast('game', 'allmygames-fail')
    
}

module.exports = {
    getMyGamesFailure,
    getMyGamesSuccess
}