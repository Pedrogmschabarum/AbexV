// app.js
const express = require('express');
const livroRoutes = require('./app/routes/livroRoutes');
const autorRoutes = require('./app/routes/autorRoutes');
const usuarioRoutes = require('./app/routes/usuarioRoutes');
const emprestimoRoutes = require('./app/routes/emprestimoRoutes');
const multaRoutes = require('./app/routes/multaRoutes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/livros', livroRoutes);
    this.server.use('/autores', autorRoutes);
    this.server.use('/usuarios', usuarioRoutes);
    this.server.use('/emprestimos', emprestimoRoutes);
    this.server.use('/multas', multaRoutes);
  }
}

module.exports = new App().server;
