import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setIsDeleting(true);
      await onDelete(task.id);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggleComplete(task.id, task.completed);
    }
  };

  return (
    <div 
      className={`task-item ${isDeleting ? 'deleting' : ''}`}
      role="article"
      aria-label={`Task: ${task.title}`}
    >
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id, task.completed)}
          onKeyDown={handleKeyDown}
          aria-label={`Mark task "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
          id={`task-${task.id}`}
        />
      </div>
      <div className="task-content">
        <label 
          htmlFor={`task-${task.id}`}
          className={`task-title ${task.completed ? 'completed' : ''}`}
        >
          {task.title}
        </label>
      </div>
      <div className="task-actions">
        <button
          className="btn-icon btn-edit"
          onClick={() => onEdit(task)}
          aria-label={`Edit task "${task.title}"`}
          disabled={isDeleting}
        >
          ✏️
        </button>
        <button
          className="btn-icon btn-delete"
          onClick={handleDelete}
          aria-label={`Delete task "${task.title}"`}
          disabled={isDeleting}
        >
          {isDeleting ? '⏳' : '🗑️'}
        </button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired
};

export default TaskItem;
