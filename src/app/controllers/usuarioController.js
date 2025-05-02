const db = require('../../db');

// Função para obter todos os usuários
exports.getAllUsuarios = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM T_USUARIO');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para obter um usuário por ID
exports.getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM T_USUARIO WHERE USU_CODIGO = ?', [id]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para criar um novo usuário
exports.createUsuario = async (req, res) => {
  const { USU_NOME, USU_EMAIL } = req.body;
  try {
    const result = await db.query('INSERT INTO T_USUARIO (USU_NOME, USU_EMAIL) VALUES (?, ?)', [USU_NOME, USU_EMAIL]);
    res.status(201).json({ id: result[0], message: 'Usuário criado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para atualizar um usuário
exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { USU_NOME, USU_EMAIL } = req.body;
  try {
    const result = await db.query('UPDATE T_USUARIO SET USU_NOME = ?, USU_EMAIL = ? WHERE USU_CODIGO = ?', 
    [USU_NOME, USU_EMAIL, id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para deletar um usuário
exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM T_USUARIO WHERE USU_CODIGO = ?', [id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};