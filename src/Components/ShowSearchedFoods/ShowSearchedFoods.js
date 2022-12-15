import React from 'react';
import { Link } from 'react-router-dom';
import '../ShowFoods/ShowFoods.css';
import '../ShowFoods/ShowFoodsMobile.css';

const ShowSearchedFoods = (props) => {

    const {strMealThumb, strMeal, idMeal} = props.meal;

    const mealName = strMeal.length < 40 ?  strMeal : strMeal.slice(0,41).concat("...") ;
    
    return (
        <div>
            <div className='food-card'>
                    <div className='food-img'>
                        <img src={strMealThumb} alt='Seafood'></img>

                    </div>
                    <div className='food-name'>
                        <h4>{mealName}</h4>

                    </div>

                    <div className='add-food-btn'>
                        <Link to={`/food/${idMeal}`}>
                            <button >
                                +
                            </button>
                        
                        </Link>                      
                    </div>


                </div>
        </div>
    );
};

export default ShowSearchedFoods;