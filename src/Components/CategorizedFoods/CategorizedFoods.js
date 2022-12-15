import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../LoadingSpinner/Loading';
import ShowCategorizedFood from '../ShowCategorizedFood/ShowCategorizedFood';
import './CategorizedFoods.css'
import './CategorizedFoodsMobile.css'

const CategorizedFoods = () => {

    const {category} = useParams();
 
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    const fetchFood=()=>{
        setIsLoading(true);
        axios.get(url)
        .then(res=> {setFoods(res.data.meals)
            setIsLoading(false);
        })
    
        .catch(error => {console.error(`Error Occured  ${error}`)
        setIsLoading(false);
    
    });

}

    useEffect(()=>{
        fetchFood();
    }, [category]); // here dependency is the category; it will show effect when category gets changed


    return (
        <div>
            {
                isLoading? <Loading></Loading> : 
                
                <div className='category-food-imm-parent'>
                    {
                        foods.map(food =><ShowCategorizedFood
                            key={food.idMeal}
                            meal={food}
                        ></ShowCategorizedFood>)
                    }
                     
                </div>
            }
            
        </div>
    );
};

export default CategorizedFoods;