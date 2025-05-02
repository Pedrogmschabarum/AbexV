const db = require('../../db');

// Função para obter todos os autores
exports.getAllAutores = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM T_AUTOR');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para obter um autor por ID
exports.getAutorById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM T_AUTOR WHERE AUT_CODIGO = ?', [id]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    res.status(200).json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para criar um novo autor
exports.createAutor = async (req, res) => {
  const { AUT_NOME } = req.body;
  try {
    const result = await db.query('INSERT INTO T_AUTOR (AUT_NOME) VALUES (?)', [AUT_NOME]);
    res.status(201).json({ id: result[0], message: 'Autor criado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para atualizar um autor
exports.updateAutor = async (req, res) => {
  const { id } = req.params;
  const { AUT_NOME } = req.body;
  try {
    const result = await db.query('UPDATE T_AUTOR SET AUT_NOME = ? WHERE AUT_CODIGO = ?', [AUT_NOME, id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    res.status(200).json({ message: 'Autor atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para deletar um autor
exports.deleteAutor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM T_AUTOR WHERE AUT_CODIGO = ?', [id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    res.status(200).json({ message: 'Autor deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};