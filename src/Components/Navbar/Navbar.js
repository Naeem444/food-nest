import "./Navbar.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navbar">
                    <div>
                        <a href="/"><h1>Food Nest</h1></a>
                    </div>
                    <div>
                        
                    </div>
                    <div className="login-signup-btn">
                        <a href="/signup" className="login-btn">
                            <button>Log in</button>
                        </a>
                        <a href="/login" className="sign-up-btn">
                            <button>Sign Up</button>
                        </a>
                        <a href="/cart">
                           <button className="cart-btn"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></button>
                           </a>

                    </div>
                
                </div>
            </nav>
        </>
    );
};

export default Navbar;