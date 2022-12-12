import { Route, Routes } from 'react-router';
import './App.css';
import Error from './Components/Error/Error';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Navbar from './Components/Navbar/Navbar'
import SearchedFoods from './Components/SearchedFoods/SearchedFoods';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div className="App">
     <div className='landing-page'>
     
     <Navbar></Navbar>
 
     <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/food/:foodId' element={<FoodDetails></FoodDetails>}></Route>

        <Route path='/searchResult/:searchValue' element={<SearchedFoods></SearchedFoods>}></Route>





        <Route path='*' element={<Error></Error>}></Route>
     </Routes>
     
     </div>




    </div>
  );
}

export default App;
