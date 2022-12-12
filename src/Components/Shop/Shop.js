import React, { useEffect, useState } from 'react';
import './Shop.css'
import './Mobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ShowFoods from '../ShowFoods/ShowFoods';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [foods, setFoods] = useState([]);

    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    const fetchFood=()=>{

        axios.get(url)
        .then(res=> setFoods(res.data.meals))
        .catch(error => console.error(`Error Occured  ${error}`));

    }

    useEffect(()=>{
        fetchFood();
    }, [])



    //Search handling
    // const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState('');
    

    return (
        <>
        <div className='landing-page-container '>
            <div className='initial-search-section'>
                <h1>Order Your Favourite Foods</h1>
                <div className='search-field'>

                    <input className='search-input' placeholder='Search Foods...'
                    onChange={event => setSearchValue(event.target.value)}
                    ></input>

                    <Link to={`/searchResult/${searchValue}`}>
                        <button className='search-btn' ><FontAwesomeIcon icon={faMagnifyingGlass} ></FontAwesomeIcon></button>
                    </Link>

                   


                </div>
              
            </div>

           <div className='landing-page-img-container'> 
                
            </div>
         

            
        </div>

        <div className='initial-page-foods'>
            <h1>Popular Seafoods ({foods.length})</h1>

           <div className='popular-food-card-container'>
           {
                foods.map(food => <ShowFoods
                    key={food.idMeal}
                    food={food}
                ></ShowFoods>)
            }

           </div>

        </div>

        </>
    );
};

export default Shop;