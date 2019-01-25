const config = require('../config')
const store = require('../store')

const getLeaderboard = () => {
    return fetch( config.apiUrl + '/leaderboard',{
        method:"GET",
        headers: {
          "Authorization": `Token token=${store.user.token}`
    
        }
      
      })
        .then(response =>{return response.json()})
        
       
}


module.exports = {
    getLeaderboard
}