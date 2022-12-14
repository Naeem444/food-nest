import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowCategorizedFood from '../ShowCategorizedFood/ShowCategorizedFood';
import './CategorizedFoods.css'
import './CategorizedFoodsMobile.css'

const CategorizedFoods = () => {

    const {category} = useParams();
 

    

    const [foods, setFoods] = useState([]);

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    const fetchFood=()=>{

        axios.get(url)
        .then(res=> setFoods(res.data.meals))
        .catch(error => console.error(`Error Occured  ${error}`));

    }

    useEffect(()=>{
        fetchFood();
    }, [])




    return (
        <div>
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

export default CategorizedFoods;