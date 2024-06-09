// src/services/articulo-services.js
import ArticuloModel from '../models/articulo-modelo.js';
import SistaleError from '../utils/SistaleError.js';

export async function createArticulo(titulo, contenido, username) {
  const articulo = new ArticuloModel({
    titulo,
    contenido,
    username: username
  })
  if(articulo.titulo === '' || articulo.contenido === '' || articulo.username === '') throw SistaleError.badRequest('Asegurate de que todos los campos esten rellenos')
  await articulo.save()
  return articulo
}

export async function getArticuloById(id) {
   const articulo = await ArticuloModel.findById(id)
  if (!articulo) throw SistaleError.badRequest('Artículo no encontrado')
   return articulo;
}

export async function updateArticulo(id, titulo, contenido) {
  const fecha = new Date()
  const articulo = await ArticuloModel.findByIdAndUpdate(id, { titulo, contenido, fecha }, { new: true })
  if (!articulo) throw SistaleError.badRequest('Artículo no encontrado')
  return articulo
}

export async function deleteArticulo(id) {
  const articulo = await ArticuloModel.findByIdAndDelete(id)
  if (!articulo) throw SistaleError.badRequest('Artículo no encontrado')
  return articulo
}

export async function listArticulos(page, size) {
  const articulos = await ArticuloModel.find()
    .limit(size)
    .skip(size * (page - 1))
  const total = await ArticuloModel.countDocuments()
  return { total, articulos }
}
