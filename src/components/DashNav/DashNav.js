import './DashNav.scss'
import oBLogo from '../../assets/img/obLogo.png'
import { Statistik, Seting } from '../Svgs/Svgs'
import { NavLink } from 'react-router-dom'

function DashNav() {
    return (
        <>
            <div className='site-navigation'>
                <div className='site-navigation__container'>
                    <NavLink className='site-navigation__logo-link' to='/'>
                        <img
                            className='site-navigation__logo-img'
                            src={oBLogo}
                            alt='Osmondagi bolalar'
                            width='85'
                            height='52'
                        />
                    </NavLink>
                    <nav className='site-navigation__nav nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/'
                                    exact>
                                    <Statistik className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Statistika
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/chart-stat'>
                                    <Statistik className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Graph
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/question'>
                                    <Statistik className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Savollar
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/offer'>
                                    <Statistik className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Takliflar
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/speaker'>
                                    <Statistik className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Speakerlar
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/users'>
                                    <Statistik className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Foydalanuvchilar
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/posts'>
                                    <Statistik className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Posts
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/link'>
                                    <Seting className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Setings
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default DashNav
