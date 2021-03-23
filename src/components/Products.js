import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import IndividualProduct from './IndividualProduct'

function Products() {
    const products = useSelector(state => state.product.products)
    if(products.length !== 0) {
        const items = products.map( item => <IndividualProduct key={item.id} name={item.name} price={item.price} rating={item.rating} image = {item.image.url} slug = {item.slug}/>)
        return (
            
            <>
                <h1 className='product__list__header'>For You</h1>
                <div className='products__list'>
                    {items}
                </div>
            </>
        )
    } else {
        return <h1>Loading.......</h1>
    }
}

export default Products
