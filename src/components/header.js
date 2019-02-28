import React from 'react'
import Brand from '../images/brand-darkBg.svg'

const Header = () => (
      <div id="wrapper-head">
        <div id="navBrand">
          <div className="navBrandPanelSticky unstuck" />
          <div className="navBrandPanel">
            <div className="brandDiv unstuck">
              <img
                src={Brand}
                alt="Chris Terrazas, designer, developer logo"
                className="brand"
              />
            </div>
            <div className="navToggle">
              <span />
              <span />
              <span />
              <span />
            </div>
            <nav className="nav unstuck">
              <ul>
                <li className="navLink">
                  <a href="#about">About</a>
                </li>
                <li className="navLink">
                  <a href="#work">Work</a>
                </li>
                <li className="navLink">
                  <a href="#footer">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )

export default Header
