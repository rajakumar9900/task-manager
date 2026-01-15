import TaskItem from './TaskItem'

function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <div className="icon">📝</div>
                <p>No tasks yet. Add one above!</p>
            </div>
        )
    }

    return (
        <div className="task-list">
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
    )
}

export default TaskList
