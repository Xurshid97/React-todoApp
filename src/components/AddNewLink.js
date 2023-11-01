import React, {useState} from 'react'

function AddNewLink({TableTodoList, setTableTodoList, linkID, localStorageTable}) {
    let [inputVal, setInputVal] = useState('');
    let [linkVal, setLinkVal] = useState('');

    let inputValueTitleChanged = (e) => {
        setInputVal(e.target.value)
    }
    let inputValueLinkChanged = (e) => {
        setLinkVal(e.target.value)
    }

    let addNewTask = (e) => {
        e.preventDefault()
        if (e.target[0].value.trim()) {
            const newObj = {
                id: TableTodoList.length,
                task_detail: inputVal,
                link: linkVal
            };
            const updatedList = [...TableTodoList, newObj];
            setTableTodoList(updatedList);
            localStorageTable[linkID].links = updatedList
            localStorage.setItem('category', JSON.stringify(localStorageTable));
        }

        setInputVal('')
        setLinkVal('')
    }
    
    return (
        <form onSubmit={addNewTask}>
            <input value={inputVal} id='formInput' onChange={inputValueTitleChanged} placeholder='Title Name'></input>
            <div className='formClass'>
                <input value={linkVal} onChange={inputValueLinkChanged} placeholder='Link' ></input>
                <button type='submit'>Add Link</button>
            </div>
            
        </form>
    )
}

export default AddNewLink