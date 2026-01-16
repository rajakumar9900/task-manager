import { useState, useEffect, useCallback } from 'react';
import { API_URL } from '../constants';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/tasks`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned invalid response. Please ensure the backend is running.');
      }
      
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Cannot connect to server. Please ensure the backend is running on port 5000.');
      } else if (err.message.includes('JSON')) {
        setError('Server returned invalid response. Please ensure the backend is running correctly.');
      } else {
        setError(err.message);
      }
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = useCallback(async (title) => {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to add task');
        } else {
          throw new Error('Server error. Please ensure the backend is running correctly.');
        }
      }

      await fetchTasks();
      return { success: true };
    } catch (err) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        return { success: false, error: 'Cannot connect to server' };
      }
      return { success: false, error: err.message };
    }
  }, [fetchTasks]);

  const updateTask = useCallback(async (id, updates) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to update task');
        } else {
          throw new Error('Server error. Please ensure the backend is running correctly.');
        }
      }

      await fetchTasks();
      return { success: true };
    } catch (err) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        return { success: false, error: 'Cannot connect to server' };
      }
      return { success: false, error: err.message };
    }
  }, [fetchTasks]);

  const deleteTask = useCallback(async (id) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to delete task');
        } else {
          throw new Error('Server error. Please ensure the backend is running correctly.');
        }
      }

      await fetchTasks();
      return { success: true };
    } catch (err) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        return { success: false, error: 'Cannot connect to server' };
      }
      return { success: false, error: err.message };
    }
  }, [fetchTasks]);

  const toggleComplete = useCallback(async (id, completed) => {
    return updateTask(id, { completed: !completed });
  }, [updateTask]);

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    refetch: fetchTasks
  };
};
