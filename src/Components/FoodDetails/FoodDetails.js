import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowFoodDetails from '../ShowFoodDetails/ShowFoodDetails';
import './FoodDetails.css'


const FoodDetails = () => {
    const {foodId} = useParams();



    // fetch details from the api
    const [foodDetails, setFoodDetails] = useState([]);
    const urlDetails = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;

    const getFoodDetails = ()=>{
        
        axios.get(urlDetails)
        .then(res => setFoodDetails(res.data.meals[0]))
        .catch(error => `Error Occured; ${error}`);
    }

    useEffect(()=>{
        getFoodDetails();
    }, []);

    


    return (
        <>
           <div>
               <h2>Food Name: {foodDetails.strMeal}</h2>
               <ShowFoodDetails foodDetail={foodDetails}></ShowFoodDetails>
           
           </div>


        </>
    );
};

export default FoodDetails;