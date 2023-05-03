import React from 'react'
import Logo from '../../img/logo.png'
import styles from './Footer.module.scss';


const Footer = () => {
  return (
	<footer>
    <img src={Logo} alt='logo'/>
    <span>Made with love and <b>React.js</b>.</span>
  </footer>
  )
}

export default Footer