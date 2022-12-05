import { Route, Routes } from 'react-router';
import './App.css';
import Error from './Components/Error/Error';
import Navbar from './Components/Navbar/Navbar'
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div className="App">
     <div className='landing-page'>
     <Navbar></Navbar>
     
     
     <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>





        <Route path='*' element={<Error></Error>}></Route>
     </Routes>
     
     </div>




    </div>
  );
}

export default App;
