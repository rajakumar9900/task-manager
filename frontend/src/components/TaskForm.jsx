import { useState, useEffect } from 'react'

function TaskForm({ onSubmit, initialValue, isEditing, onCancel }) {
    const [title, setTitle] = useState(initialValue)

    useEffect(() => {
        setTitle(initialValue)
    }, [initialValue])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim()) {
            onSubmit(title)
            if (!isEditing) {
                setTitle('')
            }
        }
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="task-input"
                    placeholder="What needs to be done?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />
                <button type="submit" className="btn btn-primary">
                    {isEditing ? '💾 Save' : '➕ Add'}
                </button>
                {isEditing && (
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                )}
            </div>
        </form>
    )
}

export default TaskForm
