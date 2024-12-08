import Database from "better-sqlite3";

/** Established database connection */
export const db = new Database("database/data.db", {
  fileMustExist: true,
});
db.pragma("journal_mode = WAL");

const createTable =
  "CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY, 'name' varchar, 'description' varchar);";
db.exec(createTable);

if (db.open) {
  console.log("SQLlite databse connected...");
}
