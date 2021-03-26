import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, numberOfItemsChanged } from '../features/cartSlice'
import Navigation from './Navigation'
import Header from './Header'
import { Link } from 'react-router-dom'

function SingleProductPage(props) {
    const [showNav,setShowNav] = useState(false)
    const dispatch = useDispatch()
    const match = props.match.params.slug
    const data = useSelector(state => state.product.products)
    const user = useSelector(state => state.user.user)


    const addCart = e => {
        if(user.length!==0)
        {
            const container = e.target.parentNode.parentNode.parentNode.parentNode;
            const id = Number(container.getAttribute('data-id'));
            const imageDiv = container.children[0]
            const detailsDiv = container.children[1]
            const thumbnail = imageDiv.children[0].src
            const title = detailsDiv.children[0].firstChild.textContent;
            const price = Number(detailsDiv.children[1].firstChild.children[0].textContent);
            const quantity = 1;
            dispatch(addToCart({thumbnail,title,price,id,quantity,unitCost: price}))
            dispatch(numberOfItemsChanged())
        } else {
            alert('Please sign in first!');
        }
        
    }
    const showNavigation = () => {
        setShowNav(true)
    }
    if(data.length !== 0){
        const singleProduct = data.filter( item => item.slug === match)[0]
        return (
            <div>
                <div className='single_product__navigation'>
                    <Header showHero={false} anotherClass = 'noImageHero' showNavigation={false}/>
                    <div className='subNavigation'>
                        <div style = {{height: "100%",cursor: 'pointer'}}onMouseOver={showNavigation} onMouseLeave = {() => setShowNav(false)}>Category
                        {showNav ? <div className='hoverNav'>
                            <Navigation/>
                        </div> : ""}
                        </div>
                    </div>   
                </div>
                <div className='single_product__container' data-id={singleProduct.id}>
                <div className='single_product__image'>
                    <img className='single_product__thumbnail' src={singleProduct.image.url} alt={singleProduct.name}/>
                </div>
                <div className='single_product__details'>
                    <div className='single_product__header'>
                        <h4 className='single_product__name'>{singleProduct.name}</h4>
                        <span className='single_product__rating'>{singleProduct.rating}</span>
                    </div>
                    <div className='single_product__price'>
                        <span className='price'>
                           <> Rs. <p>{singleProduct.price}</p></>
                        </span>
                        <div className='single_product__btns'>
                            <Link to={`/buynow/${singleProduct.price}`}><button className='single_product__buynow button'>Buy Now</button></Link>
                            <button className='single_product__addtocart' onClick={addCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    } else {
        return <h1> Loading..... </h1>
    }
}

export default SingleProductPage
