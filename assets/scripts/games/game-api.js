const config = require('../config')
const store = require('../store')

const getMyGames = () => {
    return fetch( config.apiUrl + '/games/myGames',{
        method:"GET",
        headers: {
          "Authorization": `Token token=${store.user.token}`
    
        }
      
      })
        .then(response =>{return response.json()})
        
       
}


module.exports = {
    getMyGames
}