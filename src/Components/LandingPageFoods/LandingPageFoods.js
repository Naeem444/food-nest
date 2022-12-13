import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowCategorizedFood from '../ShowCategorizedFood/ShowCategorizedFood';
import './LandingPageFoods.css'


const LandingPageFoods = () => {
    const [foods, setFoods] = useState([]);

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=french`;

    const fetchFood=()=>{

        axios.get(url)
        .then(res=> setFoods(res.data.meals))
        .catch(error => console.error(`Error Occured  ${error}`));

    }

    useEffect(()=>{
        fetchFood();
    }, [foods])




    return (
        <div className='food-suggestion-title'>
            <h3>Foods you may like </h3>
            <div className='category-food-imm-parent'>
                
            {
                foods.map(food => <ShowCategorizedFood
                    key={food.idMeal}
                    meal={food}
                ></ShowCategorizedFood>)
            }
                 
            </div>
  


            
        </div>
    );
};

export default LandingPageFoods;