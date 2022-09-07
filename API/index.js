const server = require("./src/app");
const { conn } = require("./src/database/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

conn.sync({ force: true }).then(() => {
	server.listen(PORT, () => {
		console.log(`listening on port ${PORT}`);
	});
});
