import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className='navigation'>
            <ul className='navigation_ul'>
                <li className='electronics_navigation_li'>
                    <Link to='/products/category/electronics'>Electronics</Link>
                    <ul className='dropdown'>
                    <Link to='/products/category/monitor'><li className='navigation_li'>Monitor</li></Link>
                    <Link to='/products/category/mouse'><li className='navigation_li'>Mouse</li></Link>
                    <Link to='/products/category/keyboard'><li className='navigation_li'>Keyboard</li></Link>
                    <Link to='/products/category/headphone'><li className='navigation_li'>Headphones</li></Link>
                    </ul>
                </li>
                <Link to='/products/category/decoration'><li className='navigation_li'>Decoration</li></Link>
                <Link to='/products/category/laptop'><li className='navigation_li'>Laptops</li></Link>
                <li className='fashion_navigation_li'>
                    <Link to='/products/category/fashion'>Fashion</Link>
                    <ul className='dropdown'>
                    <Link to='/products/category/mens-fashion'><li className='navigation_li'>Mens Fashion</li></Link>
                    <Link to='/products/category/womens-fashion'><li className='navigation_li'>Womens Fashion</li></Link>
                    </ul>
                </li>
                <Link to='/products/category/books'><li className='navigation_li'>Books</li></Link>
            </ul>
        </div>
    )
}

export default Navigation
