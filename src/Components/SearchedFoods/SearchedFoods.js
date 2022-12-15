import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../LoadingSpinner/Loading';
import ShowSearchedFoods from '../ShowSearchedFoods/ShowSearchedFoods';
import './SearchedFoods.css'
import './SearchedFoodsMobile.css'


const SearchedFoods = () => {

    const {searchValue} = useParams();
 

    const [searchedFoods, setSearchedFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;



    //fetch data
    const fetchSearchedFood=()=>{
        setIsLoading(true);
        axios.get(searchUrl)
        .then(res=> {
            setSearchedFoods(res.data.meals);
            setIsLoading(false)

        })
        .catch(error => {
            console.error('Error Occured While Searching');
            setIsLoading(false);

        });

    }
    useEffect(()=>{
        fetchSearchedFood();
    },[searchValue]);

    
    return (
        <>

               <div className='searched-food-container-title'>
                    <h2>Your Search Result ({searchedFoods === null ? 0 : searchedFoods.length})</h2>

               </div>

               <div className='searched-food-container'>
                {
                    isLoading? <Loading></Loading> :
                    <div className='searched-food-cards'>
                        {
                            searchedFoods?.map(meal => <ShowSearchedFoods
                            key={meal.idMeal}
                            meal={meal}
                            ></ShowSearchedFoods>)
                        }
                    </div>
                }
                    
               </div>

            
        </>
    );
};

export default SearchedFoods;