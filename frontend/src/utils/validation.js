/**
 * Validation utilities for form inputs
 */

export const validateTaskTitle = (title) => {
  if (!title || typeof title !== 'string') {
    return { valid: false, error: 'Title is required' };
  }

  const trimmed = title.trim();
  
  if (trimmed.length === 0) {
    return { valid: false, error: 'Title cannot be empty' };
  }

  if (trimmed.length > 255) {
    return { valid: false, error: 'Title must be less than 255 characters' };
  }

  return { valid: true, value: trimmed };
};

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.trim();
};
