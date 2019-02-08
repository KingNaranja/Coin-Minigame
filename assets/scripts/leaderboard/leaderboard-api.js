const config = require('../config')
const store = require('../store')

const getLeaderboard = () => {
    return fetch( config.apiUrl + '/leaderboard',{
        method:"GET"
      })
        .then(response =>{return response.json()})
        
       
}


module.exports = {
    getLeaderboard
}