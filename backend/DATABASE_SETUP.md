# MySQL Database Setup for Task Manager

## Prerequisites
- Install MySQL Server on your machine
- Download from: https://dev.mysql.com/downloads/mysql/

## Setup Instructions

### 1. **Configure Database Connection**
Edit `db.js` and update the following credentials:
```javascript
{
  host: 'localhost',
  user: 'root',           // Your MySQL username
  password: '',           // Your MySQL password
  database: 'task_manager'
}
```

### 2. **Create Database and Table**

#### Option A: Using MySQL Command Line
```bash
# Login to MySQL
mysql -u root -p

# Run the setup script
source setup.sql
```

#### Option B: Using MySQL Workbench
1. Open MySQL Workbench
2. Connect to your MySQL server
3. Open `setup.sql` file
4. Execute the script

#### Option C: Manual Commands
```sql
CREATE DATABASE IF NOT EXISTS task_manager;
USE task_manager;

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. **Verify Database Setup**
```sql
USE task_manager;
SHOW TABLES;
DESCRIBE tasks;
```

### 4. **Start the Server**
```bash
npm start
```

## Database Schema

### Tasks Table
| Column | Type | Description |
|--------|------|-------------|
| id | INT | Auto-incrementing primary key |
| title | VARCHAR(255) | Task title |
| completed | BOOLEAN | Task completion status |
| created_at | TIMESTAMP | Creation timestamp |

## API Endpoints (No Changes)
All API endpoints remain the same:
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Troubleshooting

### Connection Error
If you get a connection error:
1. Make sure MySQL server is running
2. Verify credentials in `db.js`
3. Check if the database exists

### Authentication Error
If you get "ER_NOT_SUPPORTED_AUTH_MODE":
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
FLUSH PRIVILEGES;
```

### Port Already in Use
If port 5000 is already in use, change it in `server.js`:
```javascript
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
```
