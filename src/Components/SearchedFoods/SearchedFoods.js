import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowSearchedFoods from '../ShowSearchedFoods/ShowSearchedFoods';
import './SearchedFoods.css'


const SearchedFoods = () => {

    const {searchValue} = useParams();
 

    const [searchedFoods, setSearchedFoods] = useState([]);
    const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;



    //fetch data
    const fetchSearchedFood=()=>{
        axios.get(searchUrl)
        .then(res=> setSearchedFoods(res.data.meals))
        .catch(error => 'Error Occured While Searching');

    }
    useEffect(()=>{
        fetchSearchedFood();
    },[searchedFoods]);

    
    return (
        <>

               <div className='searched-food-container-title'>
                    <h2>Your Search Result ({searchedFoods === null ? 0 : searchedFoods.length})</h2>

               </div>

               <div className='searched-food-container'>
                    <div className='searched-food-cards'>
                        {
                            searchedFoods?.map(meal => <ShowSearchedFoods
                            key={meal.idMeal}
                            meal={meal}
                            ></ShowSearchedFoods>)
                        }
                    </div>
               </div>

            
        </>
    );
};

export default SearchedFoods;