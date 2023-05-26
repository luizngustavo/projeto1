import pg from "pg";
const { Pool } = pg;


const databaseConfig = { 
  
  user: 'postgres',
  host: 'localhost',
  database: 'projeto1',
  password: '123',
  port: 5432 
};

const pool = new Pool(databaseConfig);

export default pool;





