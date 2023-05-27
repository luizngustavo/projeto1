import { pool } from "./db.js";

const insertProducts = (client) => {
  client.query(
    `
    INSERT INTO products (name, description, price)
    VALUES
      ('Placa de Vídeo RTX 3060 Ti OC Galax NVIDIA GeForce, 8GB', 'Placa de Vídeo Galax NVIDIA GeForce RTX 3060 Ti 1-Click OC Equipado com ventoinhas gêmeas de 90 mm e design prático especial para dissipação de calor, a textura e aparência de carbono exclusivas trazem o máximo de frescor da placa. Textura Carbono Exclusiva: O Melhor Jogo Permite enfrentar os últimos jogos usando o poder da arquitetura RTX de 2ª geração da Ampere-NVIDIA. Obtenha desempenho incrível com núcleos Ray Tracing aprimorados, novos multiprocessadores de streaming e memória G6 de alta velocidade. Versão móvel para Xtreme Tuner Exclusivo para usuários de placas gráficas Galax, e a nova versão do sintonizador xtreme já está online! Aumento de desempenho alimentado por IAA renderização AI em Tensor Cores dedicados oferece um desempenho incrível, aumentando as taxas de quadros e fornecendo o espaço necessário para maximizar as configurações gráficas e a resolução até 8K', 2000),

      ('FIGURE DEMON SLAYER: KIMETSU NO YAIBA - SANEMI SHINAZUGAWA', 'Descrição da figura do Demon Slayer', 1000),

      ('CANECA DARTH VADER BUCK - STAR WARS', 'Descrição da caneca do Darth Vader', 1500);
    `,
    (err, res) => {
      if (err) {
        console.error("Erro ao inserir os produtos:", err);
      } else {
        console.log("Produtos inseridos com sucesso");
      }

      client.release(); // Libera o cliente para o pool
      pool.end(); // Encerra o pool de conexões somente após a conclusão da inserção
    }
  );
};

pool.connect((err, client) => {
  if (err) {
    return console.error("Erro ao obter cliente do pool", err);
  }

  client.query(
    `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(500),
      description TEXT,
      price NUMERIC(10,2)
    );
    `,
    (err, res) => {
      if (err) {
        console.error("Erro ao criar a tabela:", err);
      } else {
        console.log("Tabela criada com sucesso");
        insertProducts(client); // Passa o cliente para a função de inserção de produtos
      }
    }
  );
});
