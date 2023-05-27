const dbConfig = {
  user: "postgres",
  database: "db_store",
  port: 5432,
  host: "localhost",
  password: "123",
  ssl: true,
};

// you can pass properties to the pool
// these properties are passed unchanged to both the node-postgres Client constructor
// and the node-pool (https://github.com/coopernurse/node-pool) constructor
// allowing you to fully configure the behavior of both

export default dbConfig;
