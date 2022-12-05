import React from 'react';
import './Shop.css'
import './Mobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    return (
        <>
        <div className='landing-page-container '>
            <div className='initial-search-section'>
                <h1>Order Your Favourite Foods</h1>
                <div className='search-field'>
                    <input className='search-input' placeholder='Search Foods...'></input>
                    <button className='search-btn'>Search</button>
                </div>
            </div>

           <div className='landing-page-img-container'> 
                
            </div>
         

            
        </div>
        </>
    );
};

export default Shop;