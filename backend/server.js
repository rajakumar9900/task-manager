const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
  //  hi ia mnmn
const app = express();
app.use(cors());
app.use(express.json());

// Connect to SQLite
const db = new sqlite3.Database("./tasks.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create table
db.run(
  `CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER DEFAULT 0
  )`,
  () => {
    console.log("Tasks table ready");
  }
);

// ✅ GET all tasks (FIXED)
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) {
      console.error("Error fetching tasks:", err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// ✅ ADD task
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  db.run(
    "INSERT INTO tasks (title) VALUES (?)",
    [title],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID, title, completed: 0 });
    }
  );
});

// ✅ DELETE task
app.delete("/tasks/:id", (req, res) => {
  db.run("DELETE FROM tasks WHERE id = ?", req.params.id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Task deleted" });
  });
});

// ✅ UPDATE task
app.put("/tasks/:id", (req, res) => {
  const { title, completed } = req.body;
  const { id } = req.params;
  
  // Build dynamic update query based on provided fields
  let updates = [];
  let values = [];
  
  if (title !== undefined) {
    updates.push("title = ?");
    values.push(title);
  }
  
  if (completed !== undefined) {
    updates.push("completed = ?");
    values.push(completed ? 1 : 0);
  }
  
  if (updates.length === 0) {
    return res.status(400).json({ error: "No fields to update" });
  }
  
  values.push(id);
  const query = `UPDATE tasks SET ${updates.join(", ")} WHERE id = ?`;
  
  db.run(query, values, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task updated", changes: this.changes });
  });
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
