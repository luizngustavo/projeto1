const express = require('express');
const app = express();
const { pool } = require('./db.js');

// Rota para adicionar um novo produto
app.post('/api/products', (req, res) => {
  const { name, description, price } = req.body;

  // Insira os dados do produto na tabela "products"
  pool.query(
    'INSERT INTO products (name, description, price) VALUES ($1, $2, $3)',
    [name, description, price],
    (error, result) => {
      if (error) {
        console.error('Erro ao adicionar o produto:', error);
        res.status(500).json({ error: 'Erro ao adicionar o produto' });
      } else {
        res.status(200).json({ message: 'Produto adicionado com sucesso' });
      }
    }
  );
});

// Rota para obter todos os produtos
app.get('/api/products', (req, res) => {
  // Consulta SQL para recuperar todos os produtos da tabela "products"
  pool.query('SELECT * FROM products', (error, result) => {
    if (error) {
      console.error('Erro ao recuperar os produtos:', error);
      res.status(500).json({ error: 'Erro ao recuperar os produtos' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

// Inicie o servidor
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
