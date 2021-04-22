import "./DashNav.scss"
import oBLogo from "../../assets/img/obLogo.png"
import {Statistik, Seting } from "../Svgs/Svgs"
import { Link } from "react-router-dom"
import Container from "../Container/Container"

function DashNav () {
  return (
  <>
  <div className="site-navigation">
    <div className="site-navigation__container">
      <Link className="site-navigation__logo-link" to="/">
        <img className="site-navigation__logo-img" src={oBLogo} alt="Osmondagi bolalar" width="85" height="52"/>
      </Link>
      <nav className="site-navigation__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <Statistik className="nav__link-svg" />
              <span className="nav__link-span">Statistik</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <Statistik className="nav__link-svg" />
              <span className="nav__link-span">Statistik</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <Statistik className="nav__link-svg" />
              <span className="nav__link-span">Statistik</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <Statistik className="nav__link-svg" />
              <span className="nav__link-span">Statistik</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <Statistik className="nav__link-svg" />
              <span className="nav__link-span">Statistik</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <Statistik className="nav__link-svg" />
              <span className="nav__link-span">Statistik</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <Seting className="nav__link-svg" />
              <span className="nav__link-span">Setings</span>
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  </div>
  </>
  );
}

export default DashNav;