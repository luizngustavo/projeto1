// import { Client } from "pg";
// import dbConfig from "./dbConfig";
// import productsList from "./productsList";

// const connectToPool = async () => {
//   try {
//     const client = new Client(dbConfig);
//     await client.connect();
//     console.log("Connection to Pool succesffully!");
//     await client.end();
//   } catch (error) {
//     console.error(error.message, error.stack);
//   }
// };

// const createProducts = async (pool) => {
//   try {
//     for (const product of productsList) {
//       const { name, description, price } = product;
//       const results = await pool.query(
//         "INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *",
//         [name, description, price]
//       );
//       console.log(
//         `A new product has been added: ${JSON.stringify(results.rows[0])}`
//       );
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// const getProducts = async () => {
//   try {
//     const results = await pool.query("SELECT * FROM products ORDER BY id ASC");
//     return results.rows;
//   } catch (error) {
//     throw error;
//   }
// };

// export { connectToPool, createProducts, getProducts };
