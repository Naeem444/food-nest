import React, { useState } from 'react';
import './LandingPage.css'
import './Mobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import Categories from '../Categories/Categories';

const LandingPage = () => {

    //Search handling
    const [searchValue, setSearchValue] = useState('');
    

    return (
        <>
        <div className='landing-page-container '>
            <div className='initial-search-section'>
                <h1>Find and Order Your Favourite Foods</h1>
                <div className='search-field'>

                    <input className='search-input' placeholder='Search Foods...'
                    onChange={event => setSearchValue(event.target.value)}
                    ></input>

                    <Link to={`/searchResult/${searchValue}`}>
                        <button className='search-btn' ><FontAwesomeIcon icon={faMagnifyingGlass} ></FontAwesomeIcon></button>
                    </Link>

                </div>
            </div>

            <div className='landing-page-img-container'>   
            </div>  

            
        </div>

        <div>
                <Categories></Categories>
        </div>
        

        </>
    );
};

export default LandingPage;