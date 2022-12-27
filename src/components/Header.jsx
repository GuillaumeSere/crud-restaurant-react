import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='menu'>
            <ul>
                <li className='brand'>
                    <NavLink to="/pwd">PWD</NavLink>
                </li>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ordercart">Cart</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
