import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// export const sequelize = new Sequelize(
//   "postgres://postgres:postgres@database-1.cyqnh78m9tjv.us-east-1.rds.amazonaws.com:5432/postgres"
// );
export const sequelize = new Sequelize(
  // 'postgres://postgres:postgres@database-1.cyqnh78m9tjv.us-east-1.rds.amazonaws.com:5432/postgres',
  {
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  // port: config.dbPort,

  
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // Require SSL
      rejectUnauthorized: false, // Allow self-signed certificates (for dev environments)
    }},
  
  storage: ":memory:",
});

sequelize.authenticate()
.then(() => {
  console.log("Connection has been established successfully.");
})
.catch((err) => {
  console.error("Unable to connect to the database:", err);
});
