import React from 'react'
import { NavLink } from 'react-router-dom'

function WebNav() {
    return (
        <ul className='webdash__nav'>
            <li className='webdash__nav-link'>
                <NavLink to='/webdash' exact>
                    Orders
                </NavLink>
            </li>
            <li className='webdash__nav-link'>
                <NavLink to='/webdash/videos' exact>
                    Videos
                </NavLink>
            </li>
            <li className='webdash__nav-link'>
                <NavLink to='/webdash/team' exact>
                    Team
                </NavLink>
            </li>
            <li className='webdash__nav-link'>
                <NavLink to='/webdash/categories' exact>
                    Categories
                </NavLink>
            </li>
            <li className='webdash__nav-link'>
                <NavLink to='/webdash/products' exact>
                    Products
                </NavLink>
            </li>
            <li className='webdash__nav-link'>
                <NavLink to='/webdash/offers' exact>
                    Offers
                </NavLink>
            </li>
            <li className='webdash__nav-link'>
                <NavLink to='/webdash/stores' exact>
                    Stores
                </NavLink>
            </li>
        </ul>
    )
}

export default WebNav
