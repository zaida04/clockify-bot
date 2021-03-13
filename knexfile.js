// have this read process.env variables
// reexport in proper way

const { config } = require("dotenv");
const { join } = require("path");

const requiredKeys = [
    ["POSTGRES_DB", "DATABASE NAME"],
    ["POSTGRES_USER", "MAIN USER TO ACCESS DATA"],
    ["POSTGRES_PASSWORD", "PASSWORD TO MAIN USER TO LOGIN"],
];
config({ path: join(__dirname, "knexfile.env") });


const missing = [];
for (const key of requiredKeys) {
    if (!process.env[key[0]]) missing.push(key);
}

if (missing.length > 1) throw new Error(`MISSING ENV VARIABLES! ${missing.map((x) => `${x[0]} - ${x[1]}`).join(", ")}`);

module.exports = {
    client: "postgresql",
    connection: {
        host: "pgdb",
        database: process.env.POSTGRES_DB,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
        min: 2,
        max: 10,
    },
};
