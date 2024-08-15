import { Sequelize } from "sequelize";

export const database = new Sequelize({
    dialect: 'sqlite',
    storage: "./database.sqlite"
});

try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
