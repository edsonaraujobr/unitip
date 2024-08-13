import { Sequelize } from "sequelize";

export const database = new Sequelize('universidade_do_bem', 'root', 'root', {
    host: 'mysql',
    dialect: 'mysql'
});

await new Promise(resolve => setTimeout(resolve, 120000));

try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
