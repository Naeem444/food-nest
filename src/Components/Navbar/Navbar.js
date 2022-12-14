import "./Navbar.css"
import './Mobile.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <>
            <nav>
                <div className="navbar">
                    <div>
                        <Link to="/"><h1>Food Nest</h1></Link>
                    </div>

                    <div>
                        
                    </div>

                    <div className="login-signup-btn">
                       
                        <Link to='/login' className="login-btn">
                            <button >Log in</button>
                        </Link>

                        <Link to='/signup' className="sign-up-btn">
                            <button>Sign Up</button>
                        </Link>
                        
                        {/* active route */}
                        <NavLink
                        to='/cart'
                        className={({ isActive }) =>isActive ? "cart-btn-active" : "cart-btn"}
                        >
                            <button ><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                            </button>

                        </NavLink>

                    </div>
                    
                
                </div>
            </nav>
        </>
    );
};

export default Navbar;