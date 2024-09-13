const db = require("./pool");
const generateDate = require("../utilities/generateDate");

async function getAllMessages() {
    try {
        const { rows } = await db.query("SELECT * FROM messages;");
        return rows;
    } catch (errors) {
        return console.error(errors);
    }
}

async function insertMessage(username, message) {
    try {
        const date = generateDate();
        await db.query(
            `
        INSERT INTO messages (username, message, added)
            VALUES ($1, $2, $3) ;
`,
            [username, message, date],
        );
    } catch (errors) {
        return console.error(errors);
    }
}

module.exports = {
    getAllMessages,
    insertMessage,
};
