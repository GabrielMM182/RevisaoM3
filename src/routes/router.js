const express = require("express");
const { cadastrarUsuario, login } = require("../controller/usuarios");
const verificaLogin = require("../middleware/verificaLogin");
const { cadastrarTarefa, atualizarTarefa, listarTarefas, detalharTarefas, deletarTarefa } = require("../controller/todos")
const router = express.Router();

router.post("/cadastro", cadastrarUsuario);
router.post("/login", login);

router.use(verificaLogin);

router.post("/cadastrarTarefa", cadastrarTarefa),
router.put("/atualizarTarefa/:id", atualizarTarefa)
router.get("/listarTarefa", listarTarefas)
router.get("/detalharTarefa/:id", detalharTarefas)
router.delete("/deletarTarefa/:id", deletarTarefa)

module.exports = router;
