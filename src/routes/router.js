const express = require("express");
const { cadastrarUsuario } = require('../controller/usuarios')
const router = express.Router();

router.post('/cadastro', cadastrarUsuario)

module.exports = router;
