const db = require('../../db');

// Função para obter todas as multas
exports.getAllMultas = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM T_MULTA');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para obter uma multa por ID
exports.getMultaById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM T_MULTA WHERE MUL_CODIGO = ?', [id]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Multa não encontrada' });
    }
    res.status(200).json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para criar uma nova multa
exports.createMulta = async (req, res) => {
  const { USU_CODIGO, EMP_CODIGO, MUL_VALOR, MUL_PAGO } = req.body;
  try {
    const result = await db.query('INSERT INTO T_MULTA (USU_CODIGO, EMP_CODIGO, MUL_VALOR, MUL_PAGO) VALUES (?, ?, ?, ?)', 
    [USU_CODIGO, EMP_CODIGO, MUL_VALOR, MUL_PAGO]);
    res.status(201).json({ id: result[0], message: 'Multa criada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para atualizar uma multa
exports.updateMulta = async (req, res) => {
  const { id } = req.params;
  const { USU_CODIGO, EMP_CODIGO, MUL_VALOR, MUL_PAGO } = req.body;
  try {
    const result = await db.query('UPDATE T_MULTA SET USU_CODIGO = ?, EMP_CODIGO = ?, MUL_VALOR = ?, MUL_PAGO = ? WHERE MUL_CODIGO = ?', 
    [USU_CODIGO, EMP_CODIGO, MUL_VALOR, MUL_PAGO, id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Multa não encontrada' });
    }
    res.status(200).json({ message: 'Multa atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para deletar uma multa
exports.deleteMulta = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM T_MULTA WHERE MUL_CODIGO = ?', [id]);
    if (result[0] === 0) {
      return res.status(404).json({ message: 'Multa não encontrada' });
    }
    res.status(200).json({ message: 'Multa deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};