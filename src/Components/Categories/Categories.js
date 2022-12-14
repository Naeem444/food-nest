import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Categories.css'
import './CategoryMobile.css'

const Categories = () => {

    const [categories, setCategories] = useState([]);
    // console.log(categories[0].strCategory)

    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    const fetchFood=()=>{

        axios.get(url)
        .then(res=> setCategories(res.data.categories))
        .catch(error => console.error(`Error Occured  ${error}`));

    }

    useEffect(()=>{
        fetchFood();
    }, [])


    return (
        <>
        <div className='catagory-header'>
            <h1>Explore Our Food Categories</h1>
        </div>

        
        <div className='categories-container'>

           <div className='category-btn-section'>
            


           {
                
                categories.map(category => category.strCategory !== 'Pork'?
                 <NavLink 
                 to={`/foodCategory/${category.strCategory}`} 
                 
                 className={({ isActive }) =>
                         isActive ? 'active-catagory-btn' : 'catagory-btn'
                }


                 key={category.strCategory}>

                    <button>{category.strCategory}</button>
                 
                 </NavLink> : null)
            }

           </div>
 

        </div>

        <div className='categorized-food-container'>
            <div>
                {/* Here all categorized foods will be shown */}
               
                <Outlet></Outlet>

            </div>
        </div>

       
        </>
    );
};

export default Categories;