import mongoose from "mongoose";
import livroModel from "../model/livro.model";

async function buscarPorID(req, res) {
   return livroModel.findById(id).lean().exec();   
}