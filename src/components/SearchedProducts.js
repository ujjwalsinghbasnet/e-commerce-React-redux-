import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import IndividualProduct from './IndividualProduct'

function SearchedProducts() {

    const items = useSelector(state => state.product.searchedProducts)
    const searchedProcs = items && items.map(item => <IndividualProduct key={item.id} name={item.name} price={item.price} rating={item.rating} image = {item.image.url} slug = {item.slug}/>)
    console.log(items)
    return (
        <>
            <Header showNavigation={false} showHero={false} anotherClass='noImageHero'/>
            <div className='products__list filtered'>
                {searchedProcs.length > 0 ? searchedProcs : <h1>No items found!</h1>}
            </div>
        </>
    )
}

export default SearchedProducts
