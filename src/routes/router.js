const express = require("express");
const router = express.Router();

const {
  getCharacters,
  getCharacter,
  abc
} = require("./Character/CharacterControler");

router.get("/v1/public/characters", getCharacters);
router.get("/v1/public/characters/:id", getCharacter);

module.exports = router;
