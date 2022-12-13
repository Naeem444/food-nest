import { Route, Routes } from 'react-router';
import './App.css';
import Categories from './Components/Categories/Categories';
import CategorizedFoods from './Components/CategorizedFoods/CategorizedFoods';
import Error from './Components/Error/Error';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar'
import SearchedFoods from './Components/SearchedFoods/SearchedFoods';



function App() {
  return (
    <div className="App">
     <div className='landing-page'>
     
     <Navbar></Navbar>
 
     <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}>
           <Route path='/foodCategory/:category' element={<CategorizedFoods></CategorizedFoods>}></Route>
        </Route>    

        <Route path='/food/:foodId' element={<FoodDetails></FoodDetails>}></Route>
        <Route path='/searchResult/:searchValue' element={<SearchedFoods></SearchedFoods>}></Route>



        <Route path='*' element={<Error></Error>}></Route>
     </Routes>
     
     </div>

    </div>
  );
}

export default App;
