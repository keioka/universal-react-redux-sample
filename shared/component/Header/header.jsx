import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './header.less'

class Header extends Component {
  
  constructor(){
    super()
  }

  render(){
    console.log(styles)
    return (
      <header className="header">
        <div className="header__logo">
          <img src="" alt="" />
        </div>
        <div className="header__nav">
          <ul className="header__nav__ul">
            <li className="header__nav__ul__li">Login or Signup</li>
            <li className="header__nav__ul__li"></li>
            <li className="header__nav__ul__li"></li>
          </ul>
        </div>
        <div className={styles.btn__header}>Button</div>
      </header>
    )
  }
}

export default Header
