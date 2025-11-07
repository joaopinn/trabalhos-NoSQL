import mongoose from "mongoose";

const bookSchema = {
    title: String,
    autor: String,
    anoPublicacao: Number,
    genero: String,
    detalhesDoExemplar: {
        editora: String,
        numeroDePaginas: Number,
        idioma: String,
    },
};

const livroModel = mongoose.model('Book', new mongoose.Schema(bookSchema));

export default livroModel;