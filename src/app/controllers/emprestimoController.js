const db = require('../../db');

// Função para obter todos os empréstimos
exports.getAllEmprestimos = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM T_EMPRESTIMO');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para obter um empréstimo por ID
exports.getEmprestimoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM T_EMPRESTIMO WHERE EMP_CODIGO = ?', [id]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
    res.status(200).json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para criar um novo empréstimo
exports.createEmprestimo = async (req, res) => {
  const { LIV_CODIGO, USU_CODIGO, EMP_DATA_INICIO, EMP_DATA_FIM, EMP_ATIVO } = req.body;
  try {
    const result = await db.query('INSERT INTO T_EMPRESTIMO (LIV_CODIGO, USU_CODIGO, EMP_DATA_INICIO, EMP_DATA_FIM, EMP_ATIVO) VALUES (?, ?, ?, ?, ?)', 
    [LIV_CODIGO, USU_CODIGO, EMP_DATA_INICIO, EMP_DATA_FIM, EMP_ATIVO]);
    res.status(201).json({ id: result[0], message: 'Empréstimo criado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para atualizar um empréstimo
exports.updateEmprestimo = async (req, res) => {
  const { id } = req.params;
  const { LIV_CODIGO, USU_CODIGO, EMP_DATA_INICIO, EMP_DATA_FIM, EMP_ATIVO } = req.body;
  try {
    const result = await db.query('UPDATE T_EMPRESTIMO SET LIV_CODIGO = ?, USU_CODIGO = ?, EMP_DATA_INICIO = ?, EMP_DATA_FIM = ?, EMP_ATIVO = ? WHERE EMP_CODIGO = ?', 
    [LIV_CODIGO, USU_CODIGO, EMP_DATA_INICIO, EMP_DATA_FIM, EMP_ATIVO, id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
    res.status(200).json({ message: 'Empréstimo atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para deletar um empréstimo
exports.deleteEmprestimo = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM T_EMPRESTIMO WHERE EMP_CODIGO = ?', [id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
    res.status(200).json({ message: 'Empréstimo deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};