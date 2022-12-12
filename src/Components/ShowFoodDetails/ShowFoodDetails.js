import React from 'react';

const ShowFoodDetails = (props) => {
    const {strMeal, strMealThumb} = props.foodDetail;
    return (
        <div>
              <div className='food-card'>
                    <div className='food-img'>
                        <img src={strMealThumb} alt='Seafood'></img>

                    </div>
                    <div className='food-name'>
                        <h4>{strMeal}</h4>

                    </div>
            </div>        
        </div>
    );
};

export default ShowFoodDetails;