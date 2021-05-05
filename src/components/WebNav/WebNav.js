import React from 'react'
import { NavLink } from 'react-router-dom'
import './WebNav.scss'

function WebNav() {
    return (
        <div className="webdash__nav">
            <ul className='webdash__nav-list'>
            <li className='webdash__nav-item'>
                <NavLink
                    className='webdash__nav-link'
                    activeClassName='webdash__nav-link--active'
                    to='/webdash'
                    exact>
                    Orders
                </NavLink>
            </li>
            <li className='webdash__nav-item'>
                <NavLink
                    className='webdash__nav-link'
                    activeClassName='webdash__nav-link--active'
                    to='/webdash/videos'
                    exact>
                    Videos
                </NavLink>
            </li>
            <li className='webdash__nav-item'>
                <NavLink
                    className='webdash__nav-link'
                    activeClassName='webdash__nav-link--active'
                    to='/webdash/team'
                    exact>
                    Team
                </NavLink>
            </li>
            <li className='webdash__nav-item'>
                <NavLink
                    className='webdash__nav-link'
                    activeClassName='webdash__nav-link--active'
                    to='/webdash/categories'
                    exact>
                    Categories
                </NavLink>
            </li>
            <li className='webdash__nav-item'>
                <NavLink
                    className='webdash__nav-link'
                    activeClassName='webdash__nav-link--active'
                    to='/webdash/products'
                    exact>
                    Products
                </NavLink>
            </li>
            <li className='webdash__nav-item'>
                <NavLink
                    className='webdash__nav-link'
                    activeClassName='webdash__nav-link--active'
                    to='/webdash/weboffers'
                    exact>
                    Offers
                </NavLink>
            </li>
            <li className='webdash__nav-item'>
                <NavLink
                    className='webdash__nav-link'
                    activeClassName='webdash__nav-link--active'
                    to='/webdash/stores'
                    exact>
                    Stores
                </NavLink>
            </li>
        </ul>
        </div>
    )
}

export default WebNav
