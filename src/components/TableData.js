import React, {useEffect, useState} from 'react'

function TableData({ TableTodoList, setTableTodoList, editItemRef, setEditingTask }) {
    /* Remove item by index when remove button is clicked,
       instead of directly splicing the TableTodoList array
       we get the copy of it and made changes on it, and set the changes */
    let removeItemFromArray = (id) => {
        const updatedArr = TableTodoList.filter((tabletodo) => {
            return tabletodo.id !== id
        }); // Create copy of the array
        setTableTodoList(updatedArr)
        localStorage.setItem('category', JSON.stringify(updatedArr));
    }

    // When the "Edit" button is clicked, set the task to be edited
    const editItemOFArray = (index) => {
        editItemRef.current.classList.add('activeEdit')
        const taskToEdit = TableTodoList[index];
        setEditingTask(taskToEdit);
    };

    // console.log(apiLink);
    let table = TableTodoList.map((data, index) => {

        return (
                <div className='card' key={index}>
                    <div className='cardImage'>
                        <a href={data.link} target="_blank">
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'} alt='image'></img>
                        </a>
                    </div>
                    <div className='cardMian'>
                        <h5>{data.task_detail}</h5>
                        <button
                            className='tableButton'
                            onClick={() => editItemOFArray(index)}
                        >
                            Edit
                        </button>
                        <button
                            className='tableButton'
                            data-id={data.id}
                            onClick={() => removeItemFromArray(data.id)}
                        >
                            Remove
                        </button>
                    </div>
            </div>
        )
    })
    return (
        <>{table}</>
    )
}

export default TableData