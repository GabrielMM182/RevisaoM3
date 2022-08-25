const {
    consumeCharacters,
    consumeCharacter,
  } = require("./CharacterConsulmer");
  
  function getCharacters(req, res) {
    consumeCharacters(req.query.limit, req.query.page)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }
  
  function getCharacter(req, res) {
    const characterId = req.params.id;
  
    consumeCharacter(characterId)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }
  
  module.exports = {
    getCharacters,
    getCharacter,
  };
  