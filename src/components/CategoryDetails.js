import React, { useState, useEffect, useRef } from 'react'
import '../todoTable.css'
import TableData from './TableData'
import EditTask from './EditTask'
import AddNewLink from './AddNewLink'
import { useParams } from 'react-router-dom';


export function CategoryDetailsFunc({linkID}) {
    const { linkIDP } = useParams();
    let localStorageTable = localStorage.getItem('category')? JSON.parse(localStorage.getItem('category')) : []
    let [TableTodoList, setTableTodoList] = useState(localStorageTable[linkID].links)
    const [editingTask, setEditingTask] = useState(null);
    const editItemRef = useRef(null)

    useEffect(() => {
        localStorage.setItem('category', JSON.stringify(localStorageTable));
    }, [TableTodoList, linkID, linkIDP]);

    return (
        <div className='mainPage'>
            <div className='container'>
                <div className='category'>
                    Category: {localStorageTable[linkID].category_name}
                </div>
                <AddNewLink TableTodoList={TableTodoList} setTableTodoList={setTableTodoList} linkID={linkID} localStorageTable={localStorageTable}/>

                <div className='allCards'>
                <TableData TableTodoList={TableTodoList} setTableTodoList={setTableTodoList} editItemRef={editItemRef} setEditingTask={setEditingTask}/>
                </div>
            </div>

            <EditTask setEditingTask={setEditingTask} editingTask={editingTask} editItemRef={editItemRef}  TableTodoList={TableTodoList} setTableTodoList={setTableTodoList}/>
        </div>
    )
}

