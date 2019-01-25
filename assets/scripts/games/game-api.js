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

const deleteGame = (id) => {
    // use the gameID to make a DELETE request
    return fetch( config.apiUrl + '/games/' + id,{
        method:"DELETE",
        headers: {
          "Authorization": `Token token=${store.user.token}`
    
        }
      
      })
    //   .then(response =>{return response.json()})
    
        // fetch does not easily allow a null response to be
        //  parsed into JSON
        
}


module.exports = {
    getMyGames,
    deleteGame
}