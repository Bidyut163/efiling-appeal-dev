const Sequelize = require('sequelize');
const keys = require('../config/keys');

const sequelize = new Sequelize(keys.dbname, keys.dbuser, keys.dbpw, {
    dialect: 'mysql',
    host: keys.dbhost,
    port: keys.dbport,
});

module.exports = sequelize;
