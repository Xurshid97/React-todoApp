import './App.css';
import CategoryPage from './components/CategoryPage';
import Navbar from './components/Navbar';
import { CategoryDetailsFunc } from './components/CategoryDetails';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'

function App() {
  const [dataFromChild, setDataFromChild] = useState('');
  let savedCache = localStorage.getItem('category') ? JSON.parse(localStorage.getItem('category')) : []

  const handleDataFromChild = (data) => {
    // handle the data, which means child is updated
    setDataFromChild(data);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CategoryPage sendDataToParent={handleDataFromChild} />}></Route>
        {
          savedCache.map((category) => {
            return (
            <Route 
              key={category.id}
              path={'/CategoryDetails/' + category.id} 
              element={<CategoryDetailsFunc 
              linkID={category.id} />}>
            </Route>)
          })
        }

      </Routes>
    </>
  );
}

export default App;
