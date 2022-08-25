const express = require("express");
const axios = require("axios");

const app = express();

const instanciaAxios = axios.create({
  baseURL: "https://www.breakingbadapi.com/api",

});

app.use(express.json());

const todosPersonagens = async (req, res) => {
  try {
    const breaking = await instanciaAxios.get("/characters");
    return res.status(200).json(breaking.data);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

app.get("/characters", todosPersonagens);

const consultadorPersonagem = async (req, res) => {
  const { id } = req.params;
  try {
     const personagem = await instanciaAxios.get(`/characters/${id}`)
     return res.json(personagem.data)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

app.get("/characters/:id", consultadorPersonagem);

app.listen(3001);
