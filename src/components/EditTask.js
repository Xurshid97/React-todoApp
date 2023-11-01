import React from 'react'

function EditTask({ editingTask, setEditingTask, editItemRef, TableTodoList, setTableTodoList }) {
    let taskEditInput = (e) => {
        let prev = e.target.value
        // console.log(editingTask.id);
        setEditingTask({ id: editingTask.id, task_detail: prev })
    }

    // When the "Save" button is clicked, update the task and clear the editing state
    const saveEditedTask = (index) => {
        if (editingTask) {
            const updatedTasks = [...TableTodoList];
            updatedTasks[index].task_detail = editingTask.task_detail;
            setTableTodoList(updatedTasks);
            localStorage.setItem('category', JSON.stringify(updatedTasks));
            setEditingTask(null); // Clear the editing state
            editItemRef.current.classList.remove('activeEdit')
        }
    };
    return (
        <div className='editTaskClass' ref={editItemRef}>
            {
                editingTask ? <>
                    <input value={editingTask.task_detail} onChange={taskEditInput}></input>
                    <button onClick={() => {
                        saveEditedTask(editingTask.id)
                    }}>Submit</button>
                </> : ''
            }
        </div>
    )
}

export default EditTask