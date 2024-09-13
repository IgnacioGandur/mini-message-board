const { Client } = require("pg");
const { argv } = require("node:process");
const generateDate = require("../utilities/generateDate");

const dateOne = generateDate();
const dateTwo = generateDate();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(40),
        message VARCHAR(400),
        added VARCHAR(100)
    );

    INSERT INTO messages (username, message, added)
        VALUES 
            ('Amando', 'Hello there!',  '${dateOne}' ),
            ('Charles', 'Hello world!',  '${dateTwo}' );
`;

async function main() {
    console.log("Seeding...");

    const client = new Client({
        connectionString: argv[2],
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("Done!");
}

main();
