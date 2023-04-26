const {Sequelize} = require("sequelize");

let sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

// let sequelize = new Sequelize('sqlite::memory:')

module.exports = {sequelize};