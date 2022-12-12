import React from 'react';
import { Link } from 'react-router-dom';

const ShowSearchedFoods = (props) => {


    const {strMealThumb, strMeal, idMeal} = props.meal;
    return (
        <div>
            <div className='food-card'>
                    <div className='food-img'>
                        <img src={strMealThumb} alt='Seafood'></img>

                    </div>
                    <div className='food-name'>
                        <h4>{strMeal}</h4>

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