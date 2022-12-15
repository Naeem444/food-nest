import React from 'react';
import { useNavigate } from 'react-router';
import '../ShowFoods/ShowFoods.css';
import '../ShowFoods/ShowFoodsMobile.css';

const ShowCategorizedFood = (props) => {
    const {idMeal, strMealThumb, strMeal} = props.meal;

    const navigate = useNavigate();
    const foodDetail=()=>{
        navigate(`/food/${idMeal}`);
    }

    const mealName = strMeal.length < 40 ?  strMeal : strMeal.slice(0,41).concat("...") ;


    return (
        <div>
            <div className='food-card'>
                    <div className='food-img'>
                        <img src={strMealThumb} alt='catagorized meals'></img>

                    </div>
                    <div className='food-name'>
                        <h4>{mealName}</h4>

                    </div>
                    <div className='add-food-btn'>
                        <button onClick={foodDetail}>
                            +
                        </button>
                    </div>
            </div> 
            
        </div>
    );
};

export default ShowCategorizedFood;