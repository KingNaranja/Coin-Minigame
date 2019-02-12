// const showToast = require('../toastr')
const leaderboardTemplate = require('../templates/leaderboard.handlebars')

const getLeaderboardSuccess = data => {
    // pass api data into handlebars template 
    const leaderboardEntries = leaderboardTemplate({ players: data.players })
    // append formatted template to the DOM
    $('#leaderboard').html(leaderboardEntries)

}

const getLeaderboardFailure = data => {
    console.log('cant GET leaderboard')
    
}


module.exports = {
    getLeaderboardSuccess,
    getLeaderboardFailure
}