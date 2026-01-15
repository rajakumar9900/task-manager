function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
    return (
        <div className="task-item">
            <div className="checkbox-wrapper">
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id, task.completed)}
                />
            </div>
            <div className="task-content">
                <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                    {task.title}
                </span>
            </div>
            <div className="task-actions">
                <button
                    className="btn-icon btn-edit"
                    onClick={() => onEdit(task)}
                    title="Edit task"
                >
                    ✏️
                </button>
                <button
                    className="btn-icon btn-delete"
                    onClick={() => onDelete(task.id)}
                    title="Delete task"
                >
                    🗑️
                </button>
            </div>
        </div>
    )
}

export default TaskItem
