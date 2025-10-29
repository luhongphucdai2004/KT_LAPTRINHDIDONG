import * as SQLite from "expo-sqlite";

// Sử dụng openDatabaseSync cho các phiên bản SDK mới của Expo
const db = SQLite.openDatabaseSync("notes.db");

export function initDB() {
  db.transactionAsync(async (tx) => {
    try {
      await tx.executeSqlAsync(
        `CREATE TABLE IF NOT EXISTS notes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          content TEXT,
          createdAt TEXT NOT NULL
        )`,
        []
      );
      console.log("Table notes OK");
    } catch (error) {
      console.error("Error creating table: ", error);
    }
  });
}

export function addNote(
  title: string,
  content: string,
  createdAt: string,
  onSuccess: (id: number) => void,
  onError: (error: any) => void
) {
  db.transactionAsync(async (tx) => {
    try {
      const result = await tx.executeSqlAsync(
        "INSERT INTO notes (title, content, createdAt) VALUES (?, ?, ?);",
        [title, content, createdAt]
      );
      console.log("Insert success", result);
      if (result.insertId) {
        onSuccess(result.insertId);
      }
    } catch (error) {
      console.error("Insert error", error);
      onError(error);
    }
  });
}

export default db;