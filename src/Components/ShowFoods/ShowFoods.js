import React from 'react';
import { useNavigate } from 'react-router';
import './ShowFoods.css'
const ShowFoods = (props) => {
    const {strMeal, strMealThumb, idMeal} = props.food;


    // here Dynamic path will be added; This can be done using <Link/> too

    const navigate = useNavigate();
    const foodDetail=()=>{
        navigate(`/food/${idMeal}`);
    }


    return (
        <>

                <div className='food-card'>
                    <div className='food-img'>
                        <img src={strMealThumb} alt='Seafood'></img>

                    </div>
                    <div className='food-name'>
                        <h4>{strMeal}</h4>

                    </div>

                    <div className='add-food-btn'>
                        <button onClick={foodDetail}>
                            +
                        </button>
                    </div>


                </div>

        </>
    );
};

export default ShowFoods;