import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import LoadingSpinner from './components/LoadingSpinner';
import ToastContainer from './components/ToastContainer';
import ErrorBoundary from './components/ErrorBoundary';
import { useTasks } from './hooks/useTasks';
import { useToast } from './hooks/useToast';
import { TOAST_TYPES, MESSAGES } from './constants';
import './App.css';

function App() {
  const [editingTask, setEditingTask] = useState(null);
  const { tasks, loading, error, addTask, updateTask, deleteTask, toggleComplete } = useTasks();
  const { toasts, addToast, removeToast } = useToast();

  const handleAddTask = async (title) => {
    const result = await addTask(title);
    if (result.success) {
      addToast(MESSAGES.ADD_SUCCESS, TOAST_TYPES.SUCCESS);
    } else {
      addToast(result.error || MESSAGES.ADD_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const handleUpdateTask = async (title) => {
    const result = await updateTask(editingTask.id, { title });
    if (result.success) {
      addToast(MESSAGES.UPDATE_SUCCESS, TOAST_TYPES.SUCCESS);
      setEditingTask(null);
    } else {
      addToast(result.error || MESSAGES.UPDATE_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const handleDeleteTask = async (id) => {
    const result = await deleteTask(id);
    if (result.success) {
      addToast(MESSAGES.DELETE_SUCCESS, TOAST_TYPES.SUCCESS);
    } else {
      addToast(result.error || MESSAGES.DELETE_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    const result = await toggleComplete(id, completed);
    if (!result.success) {
      addToast(result.error || MESSAGES.UPDATE_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="app">
        <div className="container">
          <div className="error-state">
            <div className="error-icon">⚠️</div>
            <h2>Connection Error</h2>
            <p>{MESSAGES.FETCH_ERROR}</p>
            <button 
              className="btn btn-primary" 
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="app">
        <div className="container">
          <header className="header">
            <h1>✨ Task Manager</h1>
            <p className="subtitle">Stay organized, get things done</p>
          </header>

          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleAddTask}
            initialValue={editingTask?.title || ''}
            isEditing={!!editingTask}
            onCancel={() => setEditingTask(null)}
          />

          <TaskList
            tasks={tasks}
            onEdit={handleEdit}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        </div>

        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
