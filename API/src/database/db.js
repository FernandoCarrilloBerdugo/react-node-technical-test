const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/techtask`,
	{
		logging: false,
		native: false,
	}
);

const basename = path.basename(__filename); //db.js
const modelDefiners = []; //Array to store the models

// Reads the files from the folder "Models", requires them and adds them to the modelDefiners array 
fs.readdirSync(path.join(__dirname, "/models"))
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "/models", file)));
	});

//Injecting the connection to all models
modelDefiners.forEach((model) => model(sequelize));

// Capitalizes the names of the models (comment => Comment)
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

module.exports = { 
	...sequelize.models, //To import the models as const { Product, User } = require('../../db.js') in the controllers
	conn: sequelize, //To import the connection as: const { conn } = require('./src/database/db')
};
