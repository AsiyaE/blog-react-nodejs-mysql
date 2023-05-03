import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
	<div className={styles.navbar}>
	  <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt='logo'/>
      </div>

      <div className={styles.links}>
      <Link className='link' to='/?cat=art'><h6>art</h6></Link>
      <Link className='link' to='/?cat=science'><h6>science</h6></Link>
      <Link className='link' to='/?cat=technology'><h6>technology</h6></Link>
      <Link className='link' to='/?cat=design'><h6>design</h6></Link>
      <span>John</span>
      <span>Logout</span>
      <span className={styles.write}><Link className='link' to='/write'>Write</Link></span>

      </div>
    </div>
  </div>
  )
}

export default Navbar