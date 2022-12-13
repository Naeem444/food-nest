import React from 'react';

const ShowCategorizedFood = (props) => {
    const {idMeal, strMealThumb, strMeal} = props.meal;
    return (
        <div>
            <div className='food-card'>
                    <div className='food-img'>
                        <img src={strMealThumb} alt='catagorized meals'></img>

                    </div>
                    <div className='food-name'>
                        <h4>{strMeal}</h4>

                    </div>
            </div> 
            
        </div>
    );
};

export default ShowCategorizedFood;