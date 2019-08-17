const axios = require('axios');

const searchPokemonAPI = {
  get: (callback) => {
    axios.get('/')
      .then(response => {
        callback(response);
      })
      .catch(error => {
        console.log('Error retreiving all pokemons', error);
      });
  }
};

export default searchPokemonAPI;