import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './CategoryPage.module.css'

function CategoryPage(props) {
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

    const sendDataToParent = () => {
        // send the info about updated state of the child component
        props.sendDataToParent(categories);
      };


    return (
        <div className='container'>
            <form className='formClass' onSubmit={addCategory}>
                <input value={inputVal} onChange={inputValueTitleChanged} placeholder=' Create New Category'></input>
                <button type='submit'>Create</button>
            </form>

            <div className={styles.links}>
            {
                categories.map((category)=> {
                    return (
                        <div className={styles.linkCard} key={category.id}>
                            <div className={styles.shareLink}>
                                <div>
                                    <img src={'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'}></img>
                                </div>
                                <p>Share Link</p>
                            </div>

                            <Link key={category.id} to={`/CategoryDetails/${category.id}`} linkid={category.id} onClick={sendDataToParent} className={styles.link}>{category.category_name} </Link>
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}

export default CategoryPage