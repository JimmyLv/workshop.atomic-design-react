import { Component } from 'react'

import { Logo } from '../../atoms'
import { Menu } from '../../molecules'

import styles from './Header.css'

class Header extends Component {
  render() {
    const { logo, children } = this.props
    return (
      <div className={styles['header']}>
        <span className={styles['logo']}>{ logo ? <i className={logo} /> : <Logo />}</span>
        <Menu items={['Home', 'Blog', 'Photo']} />
        <span>{children}</span>
      </div>
    )
  }
}

export default Header