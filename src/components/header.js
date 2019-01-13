import React, { Component } from 'react'
import Brand from '../images/brand-darkBg.svg'

class Header extends Component {
  render() {
    return (
      <div id="wrapper-head">
        <div id="navBrand">
          <div class="navBrandPanelSticky unstuck" />
          <div class="navBrandPanel">
            <div class="brandDiv unstuck">
              <img
                src={Brand}
                alt="Chris Terrazas, designer, developer logo"
                class="brand"
              />
            </div>
            <div class="navToggle">
              <span />
              <span />
              <span />
              <span />
            </div>
            <nav class="nav unstuck">
              <ul>
                <li class="navLink">
                  <a href="#about">About</a>
                </li>
                <li class="navLink">
                  <a href="#work">Work</a>
                </li>
                <li class="navLink">
                  <a href="#footer">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
