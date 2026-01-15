const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create database file in the backend directory
const dbPath = path.join(__dirname, 'tasks.db');

// Create connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');

        // Create tasks table if it doesn't exist
        db.run(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                console.log('Tasks table ready');
            }
        });
    }
});

// Function to get all tasks
const getAllTasks = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM tasks ORDER BY created_at DESC', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

module.exports = db;
module.exports.getAllTasks = getAllTasks;
