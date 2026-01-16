export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning'
};

export const MESSAGES = {
  FETCH_ERROR: 'Failed to fetch tasks. Please ensure the server is running.',
  ADD_SUCCESS: 'Task added successfully',
  ADD_ERROR: 'Failed to add task',
  UPDATE_SUCCESS: 'Task updated successfully',
  UPDATE_ERROR: 'Failed to update task',
  DELETE_SUCCESS: 'Task deleted successfully',
  DELETE_ERROR: 'Failed to delete task',
  EMPTY_TITLE: 'Task title cannot be empty'
};
