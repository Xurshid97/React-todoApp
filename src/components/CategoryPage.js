import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function CategoryPage() {
    let savedCache = localStorage.getItem('category')? JSON.parse(localStorage.getItem('category')) : []

    let [categories, setCategory] = useState(savedCache)
    let [inputVal, setInputVal] = useState('');
    
    let inputValueTitleChanged = (e) => {
        setInputVal(e.target.value)
    }

    let addCategory = (e)=> {
        e.preventDefault()
        if (e.target[0].value.trim()) {
            let newObj = {
                id: categories.length,
                category_name: inputVal,
                links: []
            };
            let updatedCategoryList = [...categories, newObj];
            setCategory(updatedCategoryList);
            localStorage.setItem('category', JSON.stringify(updatedCategoryList));
        }
        setInputVal('')
    }


    return (
        <div className='container'>
            <form className='formClass' onSubmit={addCategory}>
                <input value={inputVal} onChange={inputValueTitleChanged} placeholder=' Create New Category'></input>
                <button type='submit'>Create</button>
            </form>
            {
                categories.map((category)=> {
                    return (
                        <Link key={category.id} to={'/CategoryDetails/' + category.id} linkID={category.id}>{category.category_name} </Link>
                    )
                })
            }
        </div>
    )
}

export default CategoryPage