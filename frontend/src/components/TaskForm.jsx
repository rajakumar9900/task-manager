import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ onSubmit, initialValue, isEditing, onCancel }) => {
  const [title, setTitle] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTitle(initialValue);
  }, [initialValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(title.trim());
      if (!isEditing) {
        setTitle('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isEditing) {
      onCancel();
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="task-input"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSubmitting}
          autoFocus
          aria-label="Task title"
          aria-required="true"
          maxLength={255}
        />
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting || !title.trim()}
          aria-label={isEditing ? 'Save task' : 'Add task'}
        >
          {isSubmitting ? '⏳' : isEditing ? '💾 Save' : '➕ Add'}
        </button>
        {isEditing && (
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={onCancel}
            disabled={isSubmitting}
            aria-label="Cancel editing"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
  isEditing: PropTypes.bool,
  onCancel: PropTypes.func
};

TaskForm.defaultProps = {
  initialValue: '',
  isEditing: false,
  onCancel: () => {}
};

export default TaskForm;
