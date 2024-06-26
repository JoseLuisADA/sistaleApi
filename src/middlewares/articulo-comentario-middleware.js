import { body, validationResult, query, param } from 'express-validator';
import SistaleError from '../utils/SistaleError.js';

export const validateGetAndDelArticulo = [
  param('idArticulo').isMongoId().withMessage('El ID del artículo no es válido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(SistaleError.badRequest(errors.array().map(err => err.msg).join('. ')));
    }
    next();
  },
];

export const validateCreateArticulo = [
  body('titulo').notEmpty().withMessage('El título no puede estar vacío.'),
  body('contenido').notEmpty().withMessage('El contenido no puede estar vacío.'),
  body('categoria').notEmpty().withMessage('La categoría no puede estar vacía.'), // Validar categoría
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(SistaleError.badRequest('Asegúrate de que todos los campos estén rellenos'));
    }
    next();
  },
];

export const validateUpdateArticulo = [
  param('idArticulo').isMongoId().withMessage('El ID del artículo no es válido'),
  body('titulo').notEmpty().withMessage('El título no puede estar vacío.'),
  body('contenido').notEmpty().withMessage('El contenido no puede estar vacío.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(SistaleError.badRequest(errors.array().map(err => err.msg).join('. ')));
    }
    next();
  },
];

export const validateList = [
  query('page').optional().isInt({ gt: 0 }).withMessage('El número de página debe ser un entero positivo.'),
  query('size').optional().isInt({ gt: 0 }).withMessage('El tamaño de la página debe ser un entero positivo.'),
  query('categoria').optional().isString().withMessage('La categoría debe ser un texto.'), // Validar categoría en la lista
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(SistaleError.badRequest(errors.array().map(err => err.msg).join('. ')));
    }
    next();
  },
];

export const validateGetAndDelComentario = [
  param('idComentario').isMongoId().withMessage('El ID del comentario no es válido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(SistaleError.badRequest(errors.array().map(err => err.msg).join('. ')));
    }
    next();
  },
];

export const validateCreateComentario = [
  body('contenido').notEmpty().withMessage('El contenido no puede estar vacío.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(SistaleError.badRequest('Asegúrate de que el campo esté relleno'));
    }
    next();
  },
];

export const validateUpdateComentario = [
  param('idComentario').isMongoId().withMessage('El ID del comentario no es válido'),
  body('contenido').notEmpty().withMessage('El contenido no puede estar vacío.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(SistaleError.badRequest(errors.array().map(err => err.msg).join('. ')));
    }
    next();
  },
];