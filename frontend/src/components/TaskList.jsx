import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state" role="status">
        <div className="icon" aria-hidden="true">📝</div>
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="task-list-container">
      <div className="task-stats" role="status" aria-live="polite">
        <span className="stat-item">
          <strong>{totalCount}</strong> {totalCount === 1 ? 'task' : 'tasks'}
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <strong>{completedCount}</strong> completed
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <strong>{totalCount - completedCount}</strong> remaining
        </span>
      </div>
      <div className="task-list" role="list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired
};

export default TaskList;
