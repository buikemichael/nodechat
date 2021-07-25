const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodechat', 'laptop', null, {
    host: 'localhost',
    dialect: 'postgres'
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection()