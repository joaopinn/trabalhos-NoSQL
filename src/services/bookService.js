import mongoose from "mongoose";

async function buscarTodosOsLivros(req, res) {
    const livros = await mongoose.model('Book').find();
    res.status(200).json(livros);
}  

async function buscarPorTitulo(req, res) {
    const { title } = req.params;

    try {
        const titulo = await mongoose.model('Book').findOne({ title: title });
        if (titulo) {
            res.status(200).json(titulo);
        } else {
            res.status(404).json({ message: "Livro não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o livro." });
    }
}

async function buscarPorAutor(req, res) {
    const { autor } = req.params;

    try {
        const autor = await mongoose.model('Book').find({ autor: autor });
        if (autor) {
            res.status(200).json(autor);
        } else {
            res.status(404).json({ message: "Autor não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o autor." });
    }
}

async function buscarPorGenero(req, res) {
    const { genero } = req.params;

    try {
        const genero = await mongoose.model('Book').find({ genero: genero });

        if (genero) {
            res.status(200).json(genero);
        } else {
            res.status(404).json({ message: "Gênero não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o gênero." });
    }
}

async function buscarPorAnoPublicado(req, res){
    const {anoPublicado} = req.params;

    try {
        const anoPublicacao = await mongoose.model('Book').find({ anoPublicacao: anoPublicado})
        
        if (anoPublicacao) {
            res.status(200).json(anoPublicacao)
        } else {
            res.status(404).json({message: "Nao encotramso nenhum livro por esse período"})
        }
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar"})
    }
}

async function buscarPorIdioma(req, res){

    const{ idioma } = req.params;

    try {
        const idioma = await mongoose.model('Book').find({idioma: idioma})

        if(idioma){
            res.status(200).json(idioma)
        }else {
            res.status(404).json({message: "Não foi encontrado nenhum livro com esse idioma"})
        }
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar os livros com esse idioma"})
    }
}
