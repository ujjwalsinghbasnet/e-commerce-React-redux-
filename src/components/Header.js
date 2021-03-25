import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import Search from './Search'
import logo from '../images/logo.png'

function Header(props) {
  const itemsInCart = useSelector(state => state.cart.itemNumber)
  const showHero = props.showHero
  const showNavigation = props.showNavigation
  const noHero = props.anotherClass
    return (
        <div className={`TopHero ${noHero}`}>
        <div className="header__section">
            <div className='header__section__logoCart'>
              <Link to='/'><div className='header__section__logo'><img src={logo} /></div></Link>
              <Search />
              <Link to='/cart' className='header__section__cart'>
                <span className='cart-btn' ><img src="https://img.icons8.com/pastel-glyph/64/ffffff/fast-cart.png"/></span>
                <span className='cartItem_no'>{itemsInCart}</span>
              </Link> {/*onClick={showCart}*/}
            </div>
            {showNavigation ? <Navigation /> : ''}
        </div>
        {showHero ? <HeroSection/> : ''}
        </div>
    )
}

export default Header
