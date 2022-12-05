import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div>
            <div className='error-img'>
                <a href="https://storyset.com/web"><img src='images/oops.png' alt='404 error'></img></a>

            </div>
            <div className='error-text'>
                <h1>Page Not Found</h1>
            </div>
        </div>
    );
};

export default Error;