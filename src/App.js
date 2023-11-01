import './App.css';
import CategoryPage from './components/CategoryPage';
import Navbar from './components/Navbar';
import { CategoryDetailsFunc } from './components/CategoryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  let savedCache = localStorage.getItem('category') ? JSON.parse(localStorage.getItem('category')) : []
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CategoryPage />}></Route>
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
