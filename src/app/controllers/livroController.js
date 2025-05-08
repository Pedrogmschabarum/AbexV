const db = require('../../db');

// Função para obter todos os livros
exports.getAllLivros = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM T_LIVRO');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para obter um livro por ID
exports.getLivroById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM T_LIVRO WHERE LIV_CODIGO = ?', [id]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.status(200).json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Função para criar um novo livro
exports.createLivro = async (req, res) => {
  const { LIV_TITULO, LIV_DISPONIBILIDADE, LIV_SINOPSE, LIV_MEDIA_AVALIACAO, AUT_CODIGO } = req.body;
  console.log(req)
  try {
    const result = await db.query('INSERT INTO T_LIVRO (LIV_TITULO, LIV_DISPONIBILIDADE, LIV_SINOPSE, LIV_MEDIA_AVALIACAO, AUT_CODIGO) VALUES (?, ?, ?, ?, ?)', 
    [LIV_TITULO, LIV_DISPONIBILIDADE, LIV_SINOPSE, LIV_MEDIA_AVALIACAO, AUT_CODIGO]);
    res.status(201).json({ id: result[0], message: 'Livro criado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para atualizar um livro
exports.updateLivro = async (req, res) => {
  const { id } = req.params;
  const { LIV_TITULO, LIV_DISPONIBILIDADE, LIV_SINOPSE, LIV_MEDIA_AVALIACAO, AUT_CODIGO } = req.body;
  try {
    const result = await db.query('UPDATE T_LIVRO SET LIV_TITULO = ?, LIV_DISPONIBILIDADE = ?, LIV_SINOPSE = ?, LIV_MEDIA_AVALIACAO = ?, AUT_CODIGO = ? WHERE LIV_CODIGO = ?', 
    [LIV_TITULO, LIV_DISPONIBILIDADE, LIV_SINOPSE, LIV_MEDIA_AVALIACAO, AUT_CODIGO, id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.status(200).json({ message: 'Livro atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para deletar um livro
exports.deleteLivro = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM T_LIVRO WHERE LIV_CODIGO = ?', [id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.status(200).json({ message: 'Livro deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
