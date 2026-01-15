import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

const API_URL = 'http://localhost:5000/tasks'

function App() {
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)
  const [error, setError] = useState('')

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setTasks(data)
      setError('')
    } catch (err) {
      setError('Failed to fetch tasks. Make sure the server is running.')
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // Add a new task
  const addTask = async (title) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      })
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
      }
      await fetchTasks()
      setError('')
    } catch (err) {
      setError(err.message || 'Failed to add task')
    }
  }

  // Update a task
  const updateTask = async (id, title) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      })
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
      }
      await fetchTasks()
      setEditingTask(null)
      setError('')
    } catch (err) {
      setError(err.message || 'Failed to update task')
    }
  }

  // Delete a task
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
      }
      await fetchTasks()
      setError('')
    } catch (err) {
      setError(err.message || 'Failed to delete task')
    }
  }

  // Toggle task completion
  const toggleComplete = async (id, completed) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed })
      })
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
      }
      await fetchTasks()
    } catch (err) {
      setError(err.message || 'Failed to update task')
    }
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>✨ Task Manager</h1>
          <p className="subtitle">Stay organized, get things done</p>
        </header>

        {error && <div className="error-message">{error}</div>}

        <TaskForm
          onSubmit={editingTask ? (title) => updateTask(editingTask.id, title) : addTask}
          initialValue={editingTask?.title || ''}
          isEditing={!!editingTask}
          onCancel={() => setEditingTask(null)}
        />

        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
        />
      </div>
    </div>
  )
}

export default App
