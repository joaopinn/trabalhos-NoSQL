import express from 'express';
const PORT = 3000;
const app = express();
import mongoose from 'mongoose';
import livroModel from './src/model/livro.model.js';

mongoose.connect('mongodb+srv://joaopinn_db_user:xanaxnanas12@bibliotecadigital.5os0jmn.mongodb.net/?appName=bibliotecaDigital')
.then(() => {
    console.log('Conectado ao MongoDB com sucesso');
})
.catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/books', async (req, res) => {

  try {
    const newBook = new livroModel({
    title: req.body.title,
    autor: req.body.autor,
    anoPublicacao: req.body.anoPublicacao,
    genero: req.body.genero,
    detalhesDoExemplar: {
          editora: req.body.editora,
          numeroDePaginas: req.body.numeroDePaginas,
          idioma: req.body.idioma,
      },
  });

  await newBook.save();

  res.status(201).send('Livro criado com sucesso');

  } catch (error) {
   console.error("Erro ao criar livro:", error);
      res.status(500).send({ message: "Erro interno no servidor ao salvar o livro." }); 
  }
  
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); 
    
});