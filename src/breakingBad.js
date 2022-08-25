const express = require("express");
const axios = require("axios");

const app = express();

const instanciaAxios = axios.create({
  baseURL: "https://www.breakingbadapi.com/api",

});

const instanciaGatosAxios = axios.create({
  baseURL: "https://http.cat/",
});

app.use(express.json());

// const retornarGatos = async (req, res) => {
//   try {
//     const gatos = await instanciaGatosAxios.get("/100");
//     return res.status(200).json(gatos);
//   } catch (error) {
//     return res.status(500).json({ mensagem: "Erro interno do servidor" });
//   }
// };

// app.get("/status/:id", getGatos);

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

// const consultarPersonagem = async (req, res) => {
//   try {
//     const personagem = await instanciaAxios.get(`/characters?name=${nome}`);
//     return res.status(200).json(personagem.data);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ mensagem: "Erro interno do servidor" });
//   }
// };

// app.get(`/characters?name=${nome}`, consultarPersonagem);

app.listen(3001);
