import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowCategorizedFood from '../ShowCategorizedFood/ShowCategorizedFood';
import Loading from '../LoadingSpinner/Loading';
import './LandingPageFoods.css'


const LandingPageFoods = () => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=french`;

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
    }, [])




    return (
        <div className='food-suggestion-title'>
            <h3>Foods you may like </h3>
            {
                isLoading? <Loading></Loading> :
                <div className='category-food-imm-parent'>
            
                    {
                        foods.map(food => <ShowCategorizedFood
                            key={food.idMeal}
                            meal={food}
                        ></ShowCategorizedFood>)
                    }
                 
                </div>
            }
            
            
        </div>
    );
};

export default LandingPageFoods;