import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

console.log("USER: " + DB_NOMBRE)
const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST, //'192.168.7.126',
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;