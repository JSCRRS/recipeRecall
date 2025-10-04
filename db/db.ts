import { Database } from "bun:sqlite";

const db = new Database("./recallRecipe.sqlite", { create: true });

db.run(`
    CREATE TABLE recipes(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    description TEXT NOT NULL,
    );
`);

export default db;
